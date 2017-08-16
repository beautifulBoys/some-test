
import init from '../../init';

const html = init('box');
console.log(html);
var a = document.getElementsByClassName('index');
console.log(a);
export default {
  template: html,
  data () {
    return {
      text: '我是box组件的页面'
    };
  },
  mounted () {
    console.log('box组件初始化完成');
  }
};
