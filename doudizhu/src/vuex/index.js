import Vuex from 'vuex';
import Vue from 'vue';
import card from './cards';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    card
  }
});
