
function robot (arr, active) { // 机器人
  if (active) {

  } else { // 不出牌 (过)

  }
}
/*
{id: '0', checked: false, alive: true, type: 'a', text: 'A', value: 14},
  {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
  {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3},
  {id: '3', checked: false, alive: true, type: 'a', text: '4', value: 4},
  {id: '4', checked: false, alive: true, type: 'a', text: '5', value: 5},
  {id: '5', checked: false, alive: true, type: 'a', text: '6', value: 6},
  {id: '6', checked: false, alive: true, type: 'a', text: '7', value: 7},
  {id: '7', checked: false, alive: true, type: 'a', text: '8', value: 8},
  {id: '8', checked: false, alive: true, type: 'a', text: '9', value: 9},
  {id: '9', checked: false, alive: true, type: 'a', text: '10', value: 10},
  {id: '10', checked: false, alive: true, type: 'a', text: 'J', value: 11},
  {id: '11', checked: false, alive: true, type: 'a', text: 'Q', value: 12},
  {id: '12', checked: false, alive: true, type: 'a', text: 'K', value: 13},
  {id: '13', checked: false, alive: true, type: 'b', text: 'A', value: 14},
  {id: '14', checked: false, alive: true, type: 'b', text: '2', value: 16},
  {id: '15', checked: false, alive: true, type: 'b', text: '3', value: 3},
  {id: '16', checked: false, alive: true, type: 'b', text: '4', value: 4},
  {id: '17', checked: false, alive: true, type: 'b', text: '5', value: 5},
  {id: '18', checked: false, alive: true, type: 'b', text: '6', value: 6},
  {id: '19', checked: false, alive: true, type: 'b', text: '7', value: 7},
  {id: '20', checked: false, alive: true, type: 'b', text: '8', value: 8},
  {id: '21', checked: false, alive: true, type: 'b', text: '9', value: 9},
  {id: '22', checked: false, alive: true, type: 'b', text: '10', value: 10},
  {id: '23', checked: false, alive: true, type: 'b', text: 'J', value: 11},
  {id: '24', checked: false, alive: true, type: 'b', text: 'Q', value: 12},
  {id: '25', checked: false, alive: true, type: 'b', text: 'K', value: 13},
  {id: '26', checked: false, alive: true, type: 'c', text: 'A', value: 14},
  {id: '27', checked: false, alive: true, type: 'c', text: '2', value: 16},
  {id: '28', checked: false, alive: true, type: 'c', text: '3', value: 3},
  {id: '29', checked: false, alive: true, type: 'c', text: '4', value: 4},
  {id: '30', checked: false, alive: true, type: 'c', text: '5', value: 5},
  {id: '31', checked: false, alive: true, type: 'c', text: '6', value: 6},
  {id: '32', checked: false, alive: true, type: 'c', text: '7', value: 7},
  {id: '33', checked: false, alive: true, type: 'c', text: '8', value: 8},
  {id: '34', checked: false, alive: true, type: 'c', text: '9', value: 9},
  {id: '35', checked: false, alive: true, type: 'c', text: '10', value: 10},
  {id: '36', checked: false, alive: true, type: 'c', text: 'J', value: 11},
  {id: '37', checked: false, alive: true, type: 'c', text: 'Q', value: 12},
  {id: '38', checked: false, alive: true, type: 'c', text: 'K', value: 13},
  {id: '39', checked: false, alive: true, type: 'd', text: 'A', value: 14},
  {id: '40', checked: false, alive: true, type: 'd', text: '2', value: 16},
  {id: '41', checked: false, alive: true, type: 'd', text: '3', value: 3},
  {id: '42', checked: false, alive: true, type: 'd', text: '4', value: 4},
  {id: '43', checked: false, alive: true, type: 'd', text: '5', value: 5},
  {id: '44', checked: false, alive: true, type: 'd', text: '6', value: 6},
  {id: '45', checked: false, alive: true, type: 'd', text: '7', value: 7},
  {id: '46', checked: false, alive: true, type: 'd', text: '8', value: 8},
  {id: '47', checked: false, alive: true, type: 'd', text: '9', value: 9},
  {id: '48', checked: false, alive: true, type: 'd', text: '10', value: 10},
  {id: '49', checked: false, alive: true, type: 'd', text: 'J', value: 11},
  {id: '50', checked: false, alive: true, type: 'd', text: 'Q', value: 12},
  {id: '51', checked: false, alive: true, type: 'd', text: 'K', value: 13},
  {id: '52', checked: false, alive: true, type: 'k', text: 'b', value: 18},
  {id: '53', checked: false, alive: true, type: 'k', text: 'l', value: 17}
*/
function sortSmall (arr) {
  return arr.sort((a, b) => {
    return a.value - b.value;
  });
}
function judgeCardType (active) { // 判断出的是什么类型的牌
  var length = active.length;
  var type = null;
  if (length === 1) {
    type = 0;
  } else if (length === 2) {
    if (obj.is_dui(active)) type = 1;
    else if (obj.is_wangzha(active)) type = 0;
    else console.log('判断类型出错了', active);
  } else if (length === 3) {
    type = 6;
  } else if (length === 4) {
    if (obj.is_sandaiyi(active)) type = 3;
    else if (obj.is_zhadan(active)) type = 9;
    else console.log('判断类型出错了', active);
  } else if (length === 5) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_sandaiyidui(active)) type = 4;
    else console.log('判断类型出错了', active);
  } else if (length === 6) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_sidaier(active)) type = 5;
    else if (obj.is_liandui(active)) type = 8;
    else console.log('判断类型出错了', active);
  } else if (length === 7) {
    if (obj.is_shunzi(active)) type = 2;
    else console.log('判断类型出错了', active);
  } else if (length === 8) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_feiji(active)) type = 7;
    else if (obj.is_liandui(active)) type = 8;
    else console.log('判断类型出错了', active);
  } else if (length === 9) {
    type = ;
  } else if (length === 10) {
    type = ;
  } else if (length === 11) {
    type = ;
  } else if (length === 12) {
    type = ;
  } else if (length === 13) {
    type = ;
  } else if (length === 14) {
    type = ;
  } else if (length === 15) {
    type = ;
  } else if (length === 16) {
    type = ;
  } else if (length === 17) {
    type = ;
  } else if (length === 18) {
    type = ;
  } else if (length === 19) {
    type = ;
  } else if (length === 20) {
    type = ;
  } else {
    console.log('判断类型出错了 else', active);
  }
  /*
      单：      0
      对：      1
      顺子：    2
      三带一：  3
      三带一对：4
      四带二：  5
      三个X：   6
      飞机：    7
      连对：    8
      炸弹：    9
      王炸：    10
  */
}
var obj = {
  is_dui: function (arr) {
    return arr.length === 2 && arr[0].value === arr[1].value;
  },
  is_wangzha: function (arr) {
    arr = sortSmall(arr);
    return arr.length === 2 && arr[0].value === 17 && arr[1].value === 18;
  },
  is_sandaiyi: function (arr) {
    return arr.length === 4 && !this.is_zhadan(arr);
  },
  is_zhadan: function (arr) {
    return arr.length === 4 && arr[0].value === arr[1].value && arr[1].value === arr[2].value && arr[2].value === arr[3].value;
  },
  is_shunzi: function (arr) {
    arr = sortSmall(arr);
    function fn (a, b) {
      return ++a === b;
    }
    var sign = true;
    for (var i = 0, j = arr.length - 1; i < j; i++) {
      if (!fn(arr[i].value, arr[i + 1].value)) {
        sign = false;
        break;
      }
    }
    return sign;
  },
  is_sandaiyidui: function (arr) {
    return arr.length === 5 && !this.is_shunzi(arr);
  },
  is_sidaier: function (arr) { // 待优化
    if (arr.length !== 6) return false;
    var a = {};
    var b = 0;
    for (var i = 0; i < arr.length; i++) {
      if (a[arr[i].value]) a[arr[i].value]++;
      else {
        a[arr[i].value] = 1;
        b++;
      }
    }
    return b === 2;
  },
  is_liandui: function (arr) {
    if (arr.length < 6) return false;
    var a = {};
    var b = 0;
    for (var i = 0; i < arr.length; i++) {
      if (a[arr[i].value]) a[arr[i].value]++;
      else {
        a[arr[i].value] = 1;
        b++;
      }
    }
    var sign = true;
    for (var i in a) {
      if(!a[i] === 2) sign false;
    }
    return sign;
  },
  is_feiji: function (arr) {
    if (arr.length > 7) {
      if (arr.length % 4 === 0) {
        var a = {};
        for (var i = 0; i < arr.length; i++) {
          if (a[arr[i].value]) a[arr[i].value]++;
          else {
            a[arr[i].value] = 1;
          }
        }
        var newa = [];
        var cc = 0;
        for (var i in a) {
          if(a[i] === 3) {
            newa.push({value: i});
            cc++;
          }
        }
        if (cc < 2) return false;
        else return this.is_shunzi(newa);
      } else return false;
    } else {
      return false;
    }
  }
};
function sortMap (arr) { // 拆牌
  let obj = {};
  // {id: '36', checked: false, alive: true, type: 'c', text: 'J', value: 11}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i].value]) {
      obj[arr[i].value]++;
    } else {
      obj[arr[i].value] = 1;
    }
  }
  console.log(obj);
}

function choice () { // 选择出牌

}
