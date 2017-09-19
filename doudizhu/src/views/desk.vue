<template>
  <div class="desk">
    <div class="top-box">
      <div class="first">
        <template v-for="item in second">
          <li-card :item="item" :show="false" type="small"></li-card>
        </template>
        <div style="width: 30px"></div>
      </div>
      <div class="second">
        <template v-for="item in first">
          <li-card :item="item" :show="false" type="small"></li-card>
        </template>
        <div style="width: 30px"></div>
      </div>
    </div>
    <div class="mine">
      <template v-for="item in list">
        <li-card :item="item" :show="true"></li-card>
      </template>
      <div style="width: 50px"></div>
    </div>
  </div>
</template>

<script>
  import Card from '../components/card.vue';
  import { mapState, mapGetters, mapMutations } from 'vuex';
  export default {
    components: {
      'li-card': Card
    },
    data () {
      return {};
    },
    computed: {
      ...mapState({
        list: state => state.card.list,
        first: state => state.card.first,
        second: state => state.card.second
      }),
      ...mapGetters([]),
      ...mapMutations([])
    },
    mounted () {
      console.log(this.list);
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
    background: #eee url(../images/desk_bg.jpg) no-repeat;
    .top-box {
      display: flex;
      height: 60%;
      .first {
        flex: 1;
        height: 100%;
        padding: 20px 80px 20px 20px;
        box-sizing: border-box;
      }
      .second {
        flex: 1;
        height: 100%;
        padding: 20px 55px 20px 80px;
        box-sizing: border-box;
      }
    }
    .mine {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
