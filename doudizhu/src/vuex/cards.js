import create from '../lib/create';
import sort from '../lib/sort';
export default {
  state: {
    list: [],
    first: [],
    second: []
  },
  mutations: {
    create (state) {
      var arr = create();
      state.list = arr[0];
      state.first = arr[1];
      state.second = arr[2];
    },
    sort (state) {
      state.list = sort(state.list);
    }
  }
};
