

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
  dui: function (arr, obj, val) { // val 就是单牌的时候的 值
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
    let newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (k > firVal) { // 可以作为开始值 // 可以去探测是否有连续length长度的顺子存在
        let sign1 = true;
        let index = k + 0;
        for (let i = 0; i < length; i++) { // 循环length次，判断是否有该张牌
          if (obj[index]) index++;
          else sign1 = false; // 不存在就设置为false
        }
        if (sign1) { // 存在大于的连续顺子
          let newar = [];
          let aaa = k;
          for (let j = 0; j < length; j++) { // 控制长度
            for (let m = 0; m < arr.length; m++) {
              if (arr[m].value === aaa) {
                newar.push(arr[m]);
                aaa++;
                break;
              }
            }
          }
          newArr.push(newar);
        }
      }
    }
    return newArr;
  },
  sandaiyi: function (arr, obj, val) {
    var dan = [];
    for (let j in obj) {
      if (obj[j] === 1) dan.push(j - 0);
    }
    var newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (obj[k] >= 3 && k > val) {
        var newar = [];
        var index = 0;
        for (let w = 0; w < arr.length; w++) {
          if (arr[w].value === k) {
            if (index < 3) {
              newar.push(arr[w]);
              if (index === 2) {
                for (let o = 0; o < arr.length; o++) { // 查一个单牌
                  if (arr[o].value === dan[0]) {
                    newar.push(arr[o]);
                    break;
                  }
                }
              }
              index++;
            }
          }
        }
        newArr.push(newar);
      }
    }
    return newArr;
  },
  sandaiyidui: function (arr, obj, val) {
    var dui = [];
    for (let j in obj) {
      if (obj[j] === 2) dui.push(j - 0);
    }
    var newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (obj[k] >= 3 && k > val) {
        var newar = [];
        var index = 0;
        for (let w = 0; w < arr.length; w++) {
          if (arr[w].value === k) {
            if (index < 3) {
              newar.push(arr[w]);
              if (index === 2) {
                for (let o = 0; o < arr.length; o++) { // 查一个单牌
                  if (arr[o].value === dui[0]) newar.push(arr[o]);
                }
              }
              index++;
            }
          }
        }
        newArr.push(newar);
      }
    }
    return newArr;
  },
  sidaier: function (arr, obj, val) {
    var dan = [];
    for (let j in obj) {
      if (obj[j] === 1) dan.push(j - 0);
    }
    var newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (obj[k] === 4 && k > val && dan.length > 1) {
        var newar = [];
        var index = 0;
        for (let w = 0; w < arr.length; w++) {
          if (arr[w].value === k) {
            if (index < 4) {
              newar.push(arr[w]);
              if (index === 3) {
                for (let o = 0; o < arr.length; o++) { // 查一个单牌
                  if (arr[o].value === dan[0] || arr[o].value === dan[1]) newar.push(arr[o]);
                }
              }
              index++;
            }
          }
        }
        newArr.push(newar);
      }
    }
    return newArr;
  },
  sidailiangdui: function (arr, obj, val) {
    var dui = [];
    for (let j in obj) {
      if (obj[j] === 2) dui.push(j - 0);
    }
    var newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (obj[k] === 4 && k > val && dui.length > 1) {
        var newar = [];
        var index = 0;
        for (let w = 0; w < arr.length; w++) {
          if (arr[w].value === k) {
            if (index < 4) {
              newar.push(arr[w]);
              if (index === 3) {
                for (let o = 0; o < arr.length; o++) { // 查一个单牌
                  if (arr[o].value === dui[0] || arr[o].value === dui[1]) newar.push(arr[o]);
                }
              }
              index++;
            }
          }
        }
        newArr.push(newar);
      }
    }
    return newArr;
  },
  sange: function (arr, obj, val) {
    var newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (obj[k] === 3 && k > val) {
        var newar = [];
        for (let w = 0; w < arr.length; w++) {
          if (arr[w].value === k) newar.push(arr[w]);
        }
        newArr.push(newar);
      }
    }
    return newArr;
  },
  feiji: function (arr, obj) {

  },
  liandui: function (arr, obj) {

  },
  zhadan: function (arr, obj) {

  }
};

module.exports = funcObj;
