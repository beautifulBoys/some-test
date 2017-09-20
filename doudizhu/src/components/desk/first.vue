<template>
  <div class="first">
    <template v-for="item in first">
      <li-card :item="item" :show="true" type="small"></li-card>
    </template>
    <div style="width: 30px"></div>
    <div class="hand-card-box">
      <div class="hand-card">
        <template v-for="item in first">
          <li-card :item="item" :show="true" type="small"></li-card>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  import Card from '../card.vue';
  export default {
    components: {
      'li-card': Card
    },
    computed: {
      ...mapState({
        first: state => state.card.first
      }),
      ...mapGetters([]),
      ...mapMutations([])
    }
  };
</script>
<style lang="less" scoped>
  .first {
    flex: 1;
    height: 100%;
    padding: 10px 80px 20px 20px;
    box-sizing: border-box;
    background: blue;
    .hand-card-box {
      margin-right: -15%;
      width: 70%;
      height: 50px;
      margin-top: 20px;
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      .hand-card {
        height: 100%;
      }
    }
  }
</style>
