<template>
  <div class="second">
    <!-- <template v-for="item in first">
      <li-card :item="item" :show="true" type="small"></li-card>
    </template>
    <div style="width: 30px"></div> -->
    <div class="hand-card-box">
      <div class="hand-card">
        <template v-for="item in second">
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
        second: state => state.card.second
      }),
      ...mapGetters([]),
      ...mapMutations([])
    }
  };
</script>
<style lang="less" scoped>
  .second {
    flex: 1;
    height: 100%;
    padding: 10px 55px 20px 80px;
    box-sizing: border-box;
    background: green;
    text-align: right;
    .hand-card-box {
      margin-left: -15%;
      width: 70%;
      height: 50px;
      margin-top: 20px;
      float: left;
      display: flex;
      justify-content: center;
      align-items: center;
      .hand-card {
        height: 100%;
      }
    }
  }
</style>
