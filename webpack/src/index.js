
import Vue from './vue/vue.min.js';
import init from './init';

import indexHtml from './views/index/index.js';
import boxHtml from './views/box/box.js';
const html = init('index');

new Vue({
  template: html,
  components: {
    'index-html': indexHtml,
    'box-html': boxHtml
  },
  el: '#app'
});
// Vue.component('index-html', indexHtml);
