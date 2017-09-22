<template>
  <div class="mine">
    <div class="left">
      <img src="../../images/dizhu.png"/>
      <div class="user"><span>深藏blue</span></div>
    </div>

    <div class="right">
      <template v-for="item in card">
        <li-card :item="item" :show="true" :canActive="true"></li-card>
      </template>
      <div style="width: 50px"></div>
    </div>

    <div class="control">
      <div class="control-position">
        <div class="play-card" v-show="cardShow">
          <template v-for="item in active">
            <li-card :item="item" :show="true" type="small"></li-card>
          </template>
          <div style="width: 30px"></div>
        </div>
        <div class="play-tip" v-show="tipShow">
          <div class="control-text">不出</div>
        </div>
        <div class="play-control" v-show="controlShow">
          <div class="control-box-btn">
            <div class="btn" @click="playEvent()">出牌</div>
            <div class="btn" @click="tipEvent()">提示</div>
            <div class="btn"@click="noPlayEvent()">不出</div>
            <li-clock style="margin-top:15px;" :second="countDown" v-model="clockStatus"></li-clock>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  import Clock from './clock.vue';
  import Card from '../card.vue';
  import io from 'socket.io';
  export default {
    components: {
      'li-card': Card,
      'li-clock': Clock
    },
    data () {
      return {
        countDown: 15,
        clockStatus: false,
        noPlay: false,
        cardShow: false,
        controlShow: true,
        tipShow: false
      };
    },
    computed: {
      ...mapState({
        card: state => state.card.mine.card,
        active: state => state.card.mine.active
      }),
      ...mapGetters([])
    },
    methods: {
      playEvent () {
        this.cardShow = true;
        this.$store.commit('play');
        this.controlShow = false;
      },
      tipEvent () {

      },
      noPlayEvent () {
        this.countDown = 0;
        this.controlShow = false;
        this.tipShow = true;
      },
      ...mapMutations([])
    }
  };
</script>
<style lang="less" scoped>
  .mine {
    width: 100%;
    height: 35%;
    display: flex;
    position: relative;
    .left {
      width: 100px;
      min-width: 100px;
      font-size: 0;
      img {
        width: 100%;
      }
      .user {
        width: 100%;
        text-align: center;
        margin-top: 4px;
        span {
          background: rgba(0,0,0,0.2);
          border-radius: 10px;
          padding: 2px 15px;
          font-size: 12px;
          color: #fff;
        }
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: -30px;
    }
    .control {
      position: absolute;
      left: 0;
      top: -50%;
      width: 100%;
      height: 40px;
      .control-position {
        width: 90%;
        height: 100%;
        margin-left: 10%;
        position: relative;
        .play-card {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .play-control {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          .control-box-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            &.text {
              padding-top: 15px;
              color: #ffcc33;
              font-size: 28px;
              font-weight: bold;
              text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
            }
            .btn {
              width: 90px;
              height: 35px;
              background: linear-gradient(180deg, #f2d903, #e6ba01, #d59300, #c15e03);
              text-align: center;
              border-radius: 18px;
              line-height: 35px;
              font-size: 20px;
              color: #fff;
              font-weight: 900;
              text-shadow: 0 0 2px rgba(0,0,0,0.5);
              box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
              margin: 20px 20px 0 0;
              &:active {
                transform: scale(0.9);
              }
            }
          }
        }
        .play-tip {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          padding-top: 16px;
          .control-text {
            color: #ffcc33;
            font-size: 25px;
            font-weight: bold;
            text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
            text-align: center;
          }
        }
      }
    }
  }
</style>
