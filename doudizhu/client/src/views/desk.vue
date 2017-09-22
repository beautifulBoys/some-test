<template>
  <div class="desk">
    <div class="top-box">
      <desk-first></desk-first>
      <desk-second></desk-second>
    </div>
    <desk-mine></desk-mine>
    <desk-bottom></desk-bottom>
  </div>
</template>

<script>
  import firstCode from '../components/desk/first.vue';
  import secondCode from '../components/desk/second.vue';
  import mineCode from '../components/desk/mine.vue';
  import bottomCode from '../components/desk/bottom.vue';
  export default {
    components: {
      'desk-first': firstCode,
      'desk-second': secondCode,
      'desk-mine': mineCode,
      'desk-bottom': bottomCode
    },
    data () {
      return {};
    },
    mounted () {
      console.log(this.mine);
      this.$store.commit('create');
    },
    methods: {
      sortEvent () {
        this.$store.commit('sort');
      }
    }
  };
</script>
<style lang="less" scoped>
  .desk {
    width: 100%;
    height: 100%;
    background: #eee url(../images/desk_bg.jpg) no-repeat center center;
    background-size: 113%;
    .top-box {
      display: flex;
      height: 55%;
    }
  }
</style>
