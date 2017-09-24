

function sortSmall (arr) {
  return arr.sort((a, b) => {
    return a.value - b.value;
  });
}
// const cardTypeMap = {
//   err: '错误',
//   0: '单',
//   1: '对',        is_dui
//   2: '顺子',      is_shunzi
//   3: '三带一',    is_sandaiyi
//   4: '三带一对',  is_sandaiyidui
//   5: '四带二',    is_sidaier
//   6: '三个X',
//   7: '飞机',      is_feiji
//   8: '连对',      is_liandui
//   9: '炸弹',      is_zhadan
//   10: '王炸',     is_wangzha
//   11: '四带两对'  is_sidaier
// };
function sortValue () {

}
var funcObj = {
  dan: function (arr, obj, val) { // val 就是单牌的时候的 值
    var newArr1 = [];
    var newArr2 = [];
    for (var i in obj) {
      if (i - 0 > val) newArr1.push(i - 0);
    }
    for (var j = 0; j < newArr1.length; j++) {
      for (var k = 0; k < arr.length; k++) {
        if (arr[k].value === newArr1[j]) {
          newArr2.push([arr[k]]);
          break;
        }
      }
    }
    return newArr2;
  },
  dui: function (arr, obj, val) { // val 同上
    var newArr1 = [];
    var newArr2 = [];
    for (var i in obj) {
      if (obj[i] >= 2 && i - 0 > val) newArr1.push(i - 0);
    }
    for (var j = 0; j < newArr1.length; j++) {
      var o = [];
      var index = 0;
      for (var k = 0; k < arr.length; k++) {
        if (newArr1[j] === arr[k].value && newArr1[j] > val && index < 2) {
          o.push(arr[k]);
          index++;
        };
      }
      newArr2.push(o);
    }
    return newArr2;
  },
  shunzi: function (arr, obj, firVal, length) {
    function fn (k) { // 探测顺子的初始值
      return obj[k];
    }
    function pushVal (i) {
      var a = [];
      for (let h = 0; h < length; h++) {
        for (let y = 0; y < length; y++) {
          if (arr[y].value === i) {
            a.push(arr[y]);
            break;
          }
        }
        i++;
      }
      console.log(a);
      return a;
    }
    var newArr1 = [];
    for (let i in obj) {
      if (i - 0 > firVal) {
        var sign = true;
        for (let j = 0; j < length; j++) {
          if (!fn(i - 0 + j)) {
            sign = false;
            break;
          }
        }
        if (sign) {
          newArr1.push(pushVal(i - 0));
        }
      }
    }
    return newArr1;
  },
  sandaiyi: function (arr, obj) {

  },
  sandaiyidui: function (arr, obj) {

  },
  sidaier: function (arr, obj) {

  },
  sange: function (arr, obj) {

  },
  feiji: function (arr, obj) {

  },
  liandui: function (arr, obj) {

  },
  zhadan: function (arr, obj) {

  },
  sidailiangdui: function (arr, obj) {

  }
};

module.exports = funcObj;
