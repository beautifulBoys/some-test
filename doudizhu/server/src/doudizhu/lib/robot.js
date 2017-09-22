
function robot (arr, active) { // 机器人
  if (active)
}

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
