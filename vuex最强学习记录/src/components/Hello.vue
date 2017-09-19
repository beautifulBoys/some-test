<template>
  <div class="hello">
    <div class="title">{{list[index].id + '、 ' + list[index].text}}</div>
    <div class="title">{{'list长度 : ' + listCount + '　　list的索引: ' + index}}</div>
    <div class="box">
      <div class="btn" @click="backEvent()">后退</div>
      <div class="btn" @click="deleteEvent()">删除</div>
      <div class="btn" @click="forwardEvent()">前进</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  data () {
    return {
      msg: ''
    };
  },
  computed: {
    ...mapState({
      list: state => state.a.list,
      index: state => state.b.index
    }),
    ...mapGetters({
      listCount: 'count'
    })
  },
  methods: {
    ...mapMutations([]),
    backEvent () {
      this.$store.commit('backEvent', {index: this.index});
    },
    forwardEvent () {
      this.$store.commit('forwardEvent', {list: this.list, index: this.index});
    },
    deleteEvent () {
      this.$store.commit('deleteEvent', {index: this.index});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .title {
    font-size: 30px;
    text-align: center;
    margin: 30px 0;
  }
  .box {
    text-align: center;
    .btn {
      width: 100px;
      line-height: 60px;
      border: 1px solid red;
      display: inline-block;
      &:active {
        background: #eee;
      }
    }
  }
</style>
