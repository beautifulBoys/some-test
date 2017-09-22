import {create, deal} from '../lib/create';
import sort from '../lib/sort';

import io from 'socket.io-client';

export default {
  state: {
    deskServer: null,
    start: false,
    mine: {
      id: 0,
      times: 15, // 倍数
      card: [],
      active: [],
      deathList: []
    },
    first: {
      id: 1,
      times: 15,
      card: [],
      active: [],
      deathList: []
    },
    second: {
      id: 2,
      times: 15,
      card: [],
      active: [],
      deathList: []
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
    saveHttpServer (state, server) {
      state.deskServer = server;
    }
  },
  actions: {
    start ({ commit }) {
      let httpServer = io.connect('http://10.209.96.67:3002');
      commit('saveHttpServer', httpServer);
    }
  }
};
