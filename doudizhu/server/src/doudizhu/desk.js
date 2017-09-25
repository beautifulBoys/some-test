var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var cards = require('./lib/cards.js');
var robot = require('./lib/robot.js');

// var Desk = require('./schemas/desk.js'); // 数据库处理

/*
      socket.emit('a', obj); // 向自己推送
      me.broadcast.emit('b', obj); // 广播给自己以外的所有用户

      角色：0：{role: '地主', type: ''}，1:{role: '农民1', type: ''}，2:{role: '农民2', type: ''}           type：1：人   0：机器人
*/
function desk () {
  io.on('connection', function (socket) {
    console.log('有人连入');
    socket.emit('connectSuccess');
    socket.on('user', function (info) { // 获取到用户信息，洗牌、分牌、发牌
      var newCardArr = cards.distribute();
      info.mine.desk.deskId = 12;
      info.mine.desk.role.index = 0; // 叫地主顺序
      info.mine.desk.role.type = 1; // 角色类型
      info.mine.desk.role.text = '地主'; // 角色类型解释说明
      info.mine.desk.cards_fu = newCardArr[info.mine.desk.role.index];

      info.first.desk.deskId = 12;
      info.first.desk.role.index = 1; // 叫地主顺序
      info.first.desk.role.type = 0; // 角色类型
      info.first.desk.role.text = '农民'; // 角色类型解释说明
      info.first.desk.cards = newCardArr[info.first.desk.role.index];
      info.first.user = {
        id: 22,
        name: '醉生梦死',
        money: 20130
      };

      info.first.desk.deskId = 12;
      info.first.desk.role.index = 2; // 叫地主顺序
      info.first.desk.role.type = 0; // 角色类型
      info.first.desk.role.text = '农民'; // 角色类型解释说明
      info.second.desk.cards = newCardArr[info.second.desk.role.index];
      info.second.user = {
        id: 23,
        name: '望穿秋水',
        money: 53330
      };
      info.other = newCardArr[3];



      info.mine.desk.cards_fu = [
        {id: '0', checked: false, alive: true, type: 'a', text: 'A', value: 14},
        {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
        {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3},
        {id: '3', checked: false, alive: true, type: 'a', text: '4', value: 4},
        {id: '4', checked: false, alive: true, type: 'a', text: '5', value: 5},
        {id: '15', checked: false, alive: true, type: 'b', text: '3', value: 3},
        {id: '17', checked: false, alive: true, type: 'b', text: '5', value: 5},
        {id: '18', checked: false, alive: true, type: 'b', text: '6', value: 6},
        {id: '18', checked: false, alive: true, type: 'c', text: '6', value: 6},
        {id: '28', checked: false, alive: true, type: 'c', text: '3', value: 3},
        {id: '41', checked: false, alive: true, type: 'd', text: '3', value: 3},
        {id: '45', checked: false, alive: true, type: 'd', text: '7', value: 7},
        {id: '52', checked: false, alive: true, type: 'k', text: 'b', value: 18},
        {id: '53', checked: false, alive: true, type: 'k', text: 'l', value: 17}
      ];
      info.first.desk.cards = [
        {id: '0', checked: false, alive: true, type: 'a', text: 'A', value: 14},
        {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
        {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3},
        {id: '4', checked: false, alive: true, type: 'a', text: '5', value: 5},
        {id: '9', checked: false, alive: true, type: 'a', text: '10', value: 10},
        {id: '22', checked: false, alive: true, type: 'b', text: '10', value: 10},
        {id: '35', checked: false, alive: true, type: 'c', text: '10', value: 10},
        {id: '36', checked: false, alive: true, type: 'c', text: 'J', value: 11},
        {id: '38', checked: false, alive: true, type: 'c', text: 'K', value: 13},
        {id: '39', checked: false, alive: true, type: 'd', text: 'A', value: 14},
        {id: '45', checked: false, alive: true, type: 'd', text: '7', value: 7},
        {id: '46', checked: false, alive: true, type: 'd', text: '8', value: 8},
        {id: '47', checked: false, alive: true, type: 'd', text: '9', value: 9},
        {id: '48', checked: false, alive: true, type: 'd', text: '10', value: 10},
        {id: '49', checked: false, alive: true, type: 'd', text: 'J', value: 11},
        {id: '50', checked: false, alive: true, type: 'd', text: 'Q', value: 12},
        {id: '51', checked: false, alive: true, type: 'd', text: 'K', value: 13},
        {id: '52', checked: false, alive: true, type: 'k', text: 'b', value: 18},
        {id: '53', checked: false, alive: true, type: 'k', text: 'l', value: 17}
      ];


      socket.emit('desk-and-cards', info);
    });
    // 叫地主
    socket.on('jiao-di-zhu', function (info) {
      socket.emit('jiao-di-zhu-success', info); // 向自己推送
    });
    // 出牌
    socket.on('chu-pai', function (info) {
      var tipArr = robot.robot(info.first.desk.cards, info.mine.desk.active);
      // console.log('tipArr: ', tipArr);
      socket.emit('chu-pai', {cards: info.first.desk.cards, arr: tipArr}); // 向自己推送
      // robot(info.first.desk.cards, info.mine.desk.active);
    });

    //监听用户退出
    socket.on('disconnect', function () {
      // 有人退出了群聊
      console.log('有人退出');
    });


  });

  http.listen(3002, function () {
    console.log('后台程序已经启动，正在监听3002端口。');
  });
}

module.exports = desk;
