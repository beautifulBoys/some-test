<template>
  <div class="card-box">
    <div class="card">
      <div class="div fleft">
        <div v-if="item.type === 'k'"><!--大小王-->
          <div class="text joker" :class="{a: item.text === 'b'}" v-for="item1 in joker">{{item1}}</div>
        </div>
        <div v-if="item.type !== 'k'"><!--四色牌-->
          <div class="text" :class="item.type">{{item.text}}</div>
          <img src="../images/card_icon_a.png" class="img" v-if="item.type === 'a'"/>
          <img src="../images/card_icon_b.png" class="img" v-if="item.type === 'b'"/>
          <img src="../images/card_icon_c.png" class="img" v-if="item.type === 'c'"/>
          <img src="../images/card_icon_d.png" class="img" v-if="item.type === 'd'"/>
        </div>
      </div>

      <div class="div fright">
        <div v-if="item.type === 'k'"><!--大小王-->
          <div class="text joker" :class="{a: item.text === 'b'}" v-for="item1 in joker">{{item1}}</div>
        </div>
        <div v-if="item.type !== 'k'"><!--四色牌-->
          <div class="text" :class="item.type">{{item.text}}</div>
          <img src="../images/card_icon_a.png" class="img" v-if="item.type === 'a'"/>
          <img src="../images/card_icon_b.png" class="img" v-if="item.type === 'b'"/>
          <img src="../images/card_icon_c.png" class="img" v-if="item.type === 'c'"/>
          <img src="../images/card_icon_d.png" class="img" v-if="item.type === 'd'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
  红心： a
  黑心： b
  梅花： c
  方块： d
*/
  export default {
    props: ['item'],
    data () {
      return {
        joker: ['J', 'O', 'K', 'E', 'R']
      };
    }
  };
</script>

<style lang="less" scoped>
  .card-box {
    width: 30px;
    height: 120px;
    display: inline-block;
    text-align: center;
    z-index: 100;
    .card {
      width: 80px;
      height: 100%;
      border: 1px solid #aaa;
      border-radius: 5px;
      background: #fff;
      text-align: left;
      padding: 5px 0;
      box-sizing: border-box;
      .div {
        width: 30px;
        height: 100%;
        text-align: center;
        font-size: 20px;
        &.fleft {
          float: left;
        }
        &.fright {
          float: right;
          transform: rotate(180deg);
        }
        .img {
          width: 18px;
        }
        .text {
          width: 100%;
          height: 20px;
          &.joker {
            font-size: 16px;
            line-height: 16px;
            height: 16px;
            font-weight: 500;
          }
          &.a {
            color: #ff0303;
          }
          &.b {
            color: #000;
          }
          &.c {
            color: #000;
          }
          &.d {
            color: #ff0303;
          }
        }
      }
    }
  }
</style>
