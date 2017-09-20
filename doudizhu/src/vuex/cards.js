import {create, deal} from '../lib/create';
import sort from '../lib/sort';
export default {
  state: {
    mine: [],
    first: [],
    second: [],
    third: []
  },
  mutations: {
    create (state) {
      var arr = create();
      deal(state.mine, arr[0]);
      deal(state.first, arr[1]);
      deal(state.second, arr[2]);
      state.third = arr[3];
    },
    sort (state) {
      state.mine = sort(state.mine);
      deal();
    }
  }
};
