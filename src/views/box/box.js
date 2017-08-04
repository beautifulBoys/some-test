
import init from '../../init';

const html = init('box');

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
