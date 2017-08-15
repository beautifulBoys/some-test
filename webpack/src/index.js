
import Vue from './vue/vue.min.js';
import init from './init';

import indexHtml from './views/index/index.js';
import boxHtml from './views/box/box.js';

const html = require('./index.hml');
new Vue({
  template: html,
  components: {
    'index-html': indexHtml,
    'box-html': boxHtml
  },
  el: '#app'
});
// Vue.component('index-html', indexHtml);
