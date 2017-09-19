export default {
  state: {
    index: 5
  },
  mutations: {
    forwardEvent (state, obj) {
      if (obj.index < obj.list.length - 1) state.index++;
    },
    backEvent (state, obj) {
      if (obj.index > 0) state.index--;
    }
  }
};
