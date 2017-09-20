<template>
  <div class="mine">
    <template v-for="item in mine">
      <li-card :item="item" :show="true"></li-card>
    </template>
    <div style="width: 50px"></div>
    <div class="hand-card-box">
      <template v-for="item in mine">
        <li-card :item="item" :show="true" type="small"></li-card>
      </template>
      <div style="width: 30px"></div>
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
        mine: state => state.card.mine
      }),
      ...mapGetters([]),
      ...mapMutations([])
    }
  };
</script>
<style lang="less" scoped>
  .mine {
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .hand-card-box {
      position: absolute;
      left: 15%;
      top: -60%;
      width: 70%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
