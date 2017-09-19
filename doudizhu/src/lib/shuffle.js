
/*
  红心： a
  黑心： b
  梅花： c
  方块： d
*/
var cardArr = [
  {type: 'a', text: 'A', value: 14},
  {type: 'a', text: '2', value: 15},
  {type: 'a', text: '3', value: 3},
  {type: 'a', text: '4', value: 4},
  {type: 'a', text: '5', value: 5},
  {type: 'a', text: '6', value: 6},
  {type: 'a', text: '7', value: 7},
  {type: 'a', text: '8', value: 8},
  {type: 'a', text: '9', value: 9},
  {type: 'a', text: '10', value: 10},
  {type: 'a', text: 'J', value: 11},
  {type: 'a', text: 'Q', value: 12},
  {type: 'a', text: 'K', value: 13},
  {type: 'b', text: 'A', value: 14},
  {type: 'b', text: '2', value: 15},
  {type: 'b', text: '3', value: 3},
  {type: 'b', text: '4', value: 4},
  {type: 'b', text: '5', value: 5},
  {type: 'b', text: '6', value: 6},
  {type: 'b', text: '7', value: 7},
  {type: 'b', text: '8', value: 8},
  {type: 'b', text: '9', value: 9},
  {type: 'b', text: '10', value: 10},
  {type: 'b', text: 'J', value: 11},
  {type: 'b', text: 'Q', value: 12},
  {type: 'b', text: 'K', value: 13},
  {type: 'c', text: 'A', value: 14},
  {type: 'c', text: '2', value: 15},
  {type: 'c', text: '3', value: 3},
  {type: 'c', text: '4', value: 4},
  {type: 'c', text: '5', value: 5},
  {type: 'c', text: '6', value: 6},
  {type: 'c', text: '7', value: 7},
  {type: 'c', text: '8', value: 8},
  {type: 'c', text: '9', value: 9},
  {type: 'c', text: '10', value: 10},
  {type: 'c', text: 'J', value: 11},
  {type: 'c', text: 'Q', value: 12},
  {type: 'c', text: 'K', value: 13},
  {type: 'd', text: 'A', value: 14},
  {type: 'd', text: '2', value: 15},
  {type: 'd', text: '3', value: 3},
  {type: 'd', text: '4', value: 4},
  {type: 'd', text: '5', value: 5},
  {type: 'd', text: '6', value: 6},
  {type: 'd', text: '7', value: 7},
  {type: 'd', text: '8', value: 8},
  {type: 'd', text: '9', value: 9},
  {type: 'd', text: '10', value: 10},
  {type: 'd', text: 'J', value: 11},
  {type: 'd', text: 'Q', value: 12},
  {type: 'd', text: 'K', value: 13},
  {type: 'k', text: 'b', value: 17},
  {type: 'k', text: 'l', value: 16}
];
function hunxiao (arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var idx = Math.floor(Math.random() * (len - i));
    var temp = arr[idx];
    arr[idx] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }
  return arr;
}
export default () => {
  // let count = Math.floor(Math.random() * 3 + 2);
  return hunxiao(cardArr);
};
