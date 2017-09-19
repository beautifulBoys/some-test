import create from '../lib/create';
import sort from '../lib/sort';
export default {
  state: {
    list: []
  },
  mutations: {
    create (state) {
      state.list = create()[0];
    },
    sort (state) {
      state.list = sort(state.list);
    }
  }
};
