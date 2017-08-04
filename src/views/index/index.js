
import init from '../../init';

const html = init('index');

export default {
  template: html,
  data () {
    return {
      text: '我是index组件的页面'
    };
  },
  mounted () {
    console.log('index组件初始化完成');
  }
};
