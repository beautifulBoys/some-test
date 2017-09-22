import {create, deal} from '../lib/create';
import sort from '../lib/sort';
export default {
  state: {
    mine: {
      id: 0,
      card: [],
      active: [],
      deathList: []
    },
    first: {
      id: 1,
      card: [],
      active: [],
      deathList: []
    },
    second: {
      id: 2,
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
    }
  }
};
