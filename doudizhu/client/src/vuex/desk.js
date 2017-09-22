import {create, deal} from '../lib/create';
import sort from '../lib/sort';

import io from 'socket.io-client';

export default {
  state: {
    deskServer: null,
    start: false,
    info: { // 整体传输info对象
      mine: {
        user: {
          id: 21,
          name: '深藏blue'
        },
        desk: {
          times: 15,
          active: [],
          cards: [],
          cards_fu: [],
          deathList: [],
          deskId: null,
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
    play (state) {
      state.mine.active = [];
      var mine = state.mine.card;
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
      state.mine.card = mineNew;
      state.mine.active = playCards.reverse();
      state.mine.deathList.push(state.mine.active);
    },
    updateTimes (state, id, n) {},
    saveHttpServer (state, httpServer) {
      state.deskServer = httpServer;
      client(state, httpServer);
    }
  },
  actions: {
    start ({ commit }) {
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
        if (!state.info.mine.desk.role.index) httpServer.emit('jiao-di-zhu', state.info);
      }, 500);
    });
  });
  httpServer.on('desk-and-cards', (info) => { // 分桌并发牌

  });
}
