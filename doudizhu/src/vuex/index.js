import Vuex from 'vuex';
import Vue from 'vue';
import a from './a.js';
import b from './b.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    a, b
  }
});
