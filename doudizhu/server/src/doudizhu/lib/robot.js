
var judgeCardType = require('./judgeCardType.js');
var separateCard = require('./separateCard.js');

function sortSmall (arr) {
  return arr.sort((a, b) => {
    return a.value - b.value;
  });
}
function getAllValue (arr) {
  var a = 0;
  for (let i = 0; i < arr.length; i++) {
    a += arr[i].value;
  }
  return a;
}
function robot (arr, active) { // 机器人
  // const cardTypeMap = {
  //   err: '错误',
  //   0: '单',
  //   1: '对',
  //   2: '顺子',
  //   3: '三带一',
  //   4: '三带一对',
  //   5: '四带二',
  //   6: '三个X',
  //   7: '飞机',
  //   8: '连对',
  //   9: '炸弹',
  //   10: '王炸',
  //   11: '四带两对'
  // };
  arr = sortSmall(arr);
  var newArr = [];
  var type = judgeCardType(active); // {type: 1, text: '对子'}
  if (type.type === 0) {
    newArr = separateCard.dan(arr, sortMap(arr), active[0].value); // (arr, obj, val)
  } else if (type.type === 1) {
    newArr = separateCard.dui(arr, sortMap(arr), active[0].value); // (arr, obj, val)
  } else if (type.type === 2) {
    newArr = separateCard.shunzi(arr, sortMap(arr), active[0].value, active.length); // (arr, obj, firVal, length)
  } else if (type.type === 3) {
    var a = sortMap(active);
    let val = null;
    for (let k in a) {
      if (a[k] === 3) val = k - 0;
    }
    newArr = separateCard.sandaiyi(arr, sortMap(arr), val); // (arr, obj, val)
  } else if (type.type === 4) {
    var a = sortMap(active);
    let val = null;
    for (let k in a) {
      if (a[k] === 3) val = k - 0;
    }
    newArr = separateCard.sandaiyidui(arr, sortMap(arr), val); // (arr, obj, val)
  } else if (type.type === 5) {
    var a = sortMap(active);
    let val = null;
    for (let k in a) {
      if (a[k] === 4) val = k - 0;
    }
    newArr = separateCard.sidaier(arr, sortMap(arr), val); // (arr, obj, val)
  } else if (type.type === 6) {
    newArr = separateCard.sange(arr, sortMap(arr), active[0].value); // (arr, obj, val)
  } else if (type.type === 7) {

  } else if (type.type === 8) {

  } else if (type.type === 9) {

  } else if (type.type === 10) {

  } else if (type.type === 11) {
    var a = sortMap(active);
    let val = null;
    for (let k in a) {
      if (a[k] === 4) val = k - 0;
    }
    newArr = separateCard.sidailiangdui(arr, sortMap(arr), val); // (arr, obj, val)
  } else if (type.type === 12) {

  } else {
    newArr = ['错误'];
  }
  return newArr;
}

function sortMap (arr) { // 拆牌
  let obj = {}; // {3:1, 4:2, 6:4, 9:3, 13:1}
  // {id: '36', checked: false, alive: true, type: 'c', text: 'J', value: 11}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i].value]) obj[arr[i].value]++;
    else obj[arr[i].value] = 1;
  }
  return obj;
}

function choice () { // 选择出牌

}

module.exports = {
  judgeCardType: judgeCardType,
  robot: robot,
  sortMap: sortMap,
  choice: choice
};
