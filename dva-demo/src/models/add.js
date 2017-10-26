
export default {

  namespace: 'addModel',

  state: {
    haha: '哈哈'
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    add (state, {value}) {
      console.log(state, value);
      return state;
    }
  },

};
