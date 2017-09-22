var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var shuffle = require('./lib/shuffle');

// var Desk = require('./schemas/desk.js'); // 数据库处理

function desk() {
  io.on('connection', function(socket) {
    console.log('有人连入');

    //监听新用户加入
    socket.on('in', function() {
      var me = this;
      //向除自己以外的所有客户端广播:有新用户加入
      console.log('有人联入');
    });

    //监听用户退出
    socket.on('disconnect', function() {
      // 有人退出了群聊
      console.log('有人退出了群聊');
    });


  });

  http.listen(3002, function() {
    console.log('监听端口:3002');
  });
}

module.exports = desk;
