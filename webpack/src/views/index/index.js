
import init from '../../init';
import './index.less';
const html = init('index');

export default {
  template: html,
  data () {
    return {
      text: '我是index组件的页面',
      hello: false
    };
  },
  mounted () {
    console.log('index组件初始化完成');
    setTimeout(() => {
      this.hello = true;
      console.log(this.hello);
    }, 2200);
  }
};
