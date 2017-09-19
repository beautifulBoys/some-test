<template>
  <div class="desk">
    <div class="top-box">
      <div class="first">
        <button @click="sortEvent()">排 序</button>
      </div>
      <div class="second">

      </div>
    </div>
    <div class="mine">
      <template v-for="item in list">
        <li-card :item="item"></li-card>
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
        list: state => state.card.list
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
    background: #eee;
    .top-box {
      display: flex;
      height: 60%;
      .first {
        flex: 1;
        height: 100%;
        background: blue;
      }
      .second {
        flex: 1;
        height: 100%;
        background: green;
      }
    }
    .mine {
      width: 100%;
      height: 40%;
      background: red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
