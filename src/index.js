
import Vue from './vue/vue.min.js';
import indexHtml from './views/index/index.js';
import boxHtml from './views/box/box.js';

new Vue({
  template: `
    <div>
      <index-html></index-html>
      <div>我是中间的分割线</div>
      <box-html></box-html>
    </div>
  `,
  components: {
    'index-html': indexHtml,
    'box-html': boxHtml
  },
  el: '#app'
});
// Vue.component('index-html', indexHtml);
