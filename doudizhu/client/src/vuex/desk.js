import {create, deal} from '../lib/create';
import sort from '../lib/sort';

import io from 'socket.io-client';
// import jiaodizhufunc from './desk_func/jiaodizhu.js';

export default {
  state: {
    httpServer: null,
    deskStatus: ['start', 'jiaodizhu', 'chupai', 'jieshu'],
    timeObj: {
      chupai: 20,
      yaobuqi: 3
    },
    info: { // 整体传输info对象
      jiaodizhuIndex: 0,
      jiaodizhuCurrentTimes: 0,
      mine: {
        user: {
          id: 21,
          name: '深藏blue',
          money: 20580
        },
        desk: {
          times: 15,
          active: [],
          cards: [],
          cards_fu: [],
          deathList: [],
          deskId: null,
          isMingPai: false,
          chupaiObj: {
            status: true,
            textShow: false,
            cardShow: false
          },
          role: {
            index: null, // 叫地主顺序
            type: null, // 角色类型
            text: '' // 角色类型解释说明
          }
        }
      },
      first: {
        user: {},
        desk: {
          times: 15,
          active: [],
          cards: [],
          deathList: [],
          deskId: null,
          isMingPai: false,
          role: {
            index: null, // 叫地主顺序
            type: null, // 角色类型
            text: '' // 角色类型解释说明
          }
        }
      },
      second: {
        user: {},
        desk: {
          times: 15,
          active: [],
          cards: [],
          deathList: [],
          deskId: null,
          isMingPai: false,
          role: {
            index: null, // 叫地主顺序
            type: null, // 角色类型
            text: '' // 角色类型解释说明
          }
        }
      },
      other: {
        dipai: []
      }
    },
    third: [],
    ready: false
  },
  mutations: {
    create (state) { // 创建扑克、洗牌、发牌、排序
      var arr = create();
      deal(state.mine.card, arr[0], () => {
        setTimeout(() => {
          state.mine.card = sort(state.mine.card);
          state.ready = true;
        }, 500);
      });
      deal(state.first.card, arr[1], () => {
        state.first.card = sort(state.first.card);
      });
      deal(state.second.card, arr[2], () => {
        state.second.card = sort(state.second.card);
      });
      state.third = arr[3];
    },
    updateTimes (state, id, n) {},
    saveHttpServer (state, httpServer) {
      state.httpServer = httpServer;
      state.deskStatus.shift();
      client(state, httpServer);
    },
    bujiaoEvent (state) {
      state.info.jiaodizhuIndex++;
      state.httpServer.emit('jiao-di-zhu', state.info);
    },
    jiaodizhuEvent (state) {
      state.info.jiaodizhuIndex++;
      state.info.jiaodizhuCurrentTimes++;
      state.httpServer.emit('jiao-di-zhu', state.info);
    },
    buchuEvent (state) {
      state.info.mine.chupaiObj.textShow = true;
      state.httpServer.emit('chu-pai', state.info);
    },
    chupaiEvent (state) {
      state.info.mine.chupaiObj.cardShow = true;
      state.info.mine.active = [];
      var mine = state.info.mine.cards;
      var mineNew = [];
      var playCards = [];
      for (let i = 0; i < mine.length; i++) {
        if (mine[i].checked) {
          mine[i].alive = false;
          playCards.push(mine[i]);
        } else {
          mineNew.push(mine[i]);
        }
      }
      state.info.mine.cards = mineNew;
      state.info.mine.active = playCards.reverse();
      state.info.mine.deathList.push(state.info.mine.active);
      state.httpServer.emit('chu-pai', state.info);
    }
  },
  actions: {
    startEvent ({ commit }) {
      let httpServer = io.connect('http://10.209.96.67:3002');
      commit('saveHttpServer', httpServer);
    }
  }
};

function client (state, httpServer) {
  httpServer.on('connectSuccess', () => {
    console.log('连接成功');
    httpServer.emit('user', state.info);
  });
  httpServer.on('desk-and-cards', (info) => { // 分桌并发牌
    state.start = true;
    state.info = info;
    deal(state.info.mine.desk.cards, info.mine.desk.cards_fu, () => {
      setTimeout(() => {
        state.info.mine.desk.cards = sort(state.info.mine.desk.cards);
      }, 500); // 此处可以写一个排序动画
    });
  });
  httpServer.on('jiao-di-zhu', (info) => { // 叫地主 -- 收到的回复

  });
  httpServer.on('jiao-di-zhu-success', (info) => { // 叫地主 -- 收到的回复
    state.info = info;
    state.deskStatus.shift();
  });
}
