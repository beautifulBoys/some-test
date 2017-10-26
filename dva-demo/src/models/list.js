
export default {
  namespace: 'listModel',
  state: {
    list: [],
    index: 0
  },
  subscriptions: {},
  effects: {},
  reducers: {
    add (state, {value}) {
      state.list = [...state.list, {id: state.index++, text: value, act: true}];
      return Object.assign({}, state);
    },
    delete (state, {value}) {
      state.list = state.list.filter((item) => item.id !== value)
      return Object.assign({}, state);
    },
    toggle (state, {value}) {
      for (let i = 0; i < state.list.length; i++) {
        let item = state.list[i];
        if (item.id === value) {
          item.act = !item.act
        }
      }
      return Object.assign({}, state);
    }
  }
};
