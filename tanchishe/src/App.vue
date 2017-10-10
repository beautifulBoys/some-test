<template>
  <div id="app">
    <div class="top">
      <div class="row" v-for="(row, index1) in sq">
        <div class="item" v-for="(item, index2) in row" :class="{c: item.c, guo: index2 === guo.x && index1 === guo.y}"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="btn" @click="wayEvent(0)">上</div>
      <div class="btn" @click="wayEvent(1)">下</div>
      <div class="btn" @click="wayEvent(2)">左</div>
      <div class="btn" @click="wayEvent(3)">右</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      rows: 19,
      sq: [],
      she: [],
      guo: {x: 4, y: 0},
      way: 0, // 0:上  1:下  2:左  3:右
      time: 500
    };
  },
  created () {
    let sq = [];
    for (let y = 0; y < this.rows; y++) {
      let a = [];
      for (let x = 0; x < this.rows; x++) {
        if (x === 9 && y < 12 && y > 6) {
          a.push({x: x, y: y, c: true});
          this.she.push({x: x, y: y, c: true});
        } else a.push({x: x, y: y, c: false});
      }
      sq.push(a);
    }
    this.sq = sq;
    console.log(sq, this.she);
  },
  mounted () {
    this.setTimeout();
  },
  methods: {
    wayEvent (way) {
      this.way = way;
    },
    setTimeout () {
      let timer = setTimeout(() => {

        clearTimeout(timer);
      }, this.time);
      console.log('timer', timer);
    },
    move () {
      if (this.way === 0) {

      }
    }
  }
}
</script>

<style lang="less" scoped>
  #app {
    width: 100%;
    height: 100%;
    .top {
      width:100%;
      padding-bottom:100%;
      height:0;
      .row {
        width: 100%;
        display: flex;
        .item {
          flex: 1;
          padding-bottom: 18px;
          height:0;
          background:#fff;
          border: 0.5px solid #999;
          box-sizing: border-box;
          &.c {
            background: #3b3b3b;
            border: 0.5px solid #333;
          }
          &.guo {
            background: red;
            border: 0.5px solid red;
          }
        }
      }
    }
    .bottom {
      display: flex;
      .btn {
        flex: 1;
        margin: 10px;
        background: green;
        line-height: 40px;
        text-align: center;
        color: #fff;
        &:active {
          background: #333;
        }
      }
    }
  }
</style>
