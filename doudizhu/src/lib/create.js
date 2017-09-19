import shuffle from './shuffle';
export default () => {
  let arr = shuffle();
  let newArr = [[], [], [], []]; // 前三个数组为三家牌，第四个数组为三张底牌
  let index = 0;
  for (let i = 0; i < 54; i++) {
    if (i < 51) {
      newArr[index].push(arr[i]);
      if (index !== 2) index++;
      else index = 0;
    } else {
      newArr[3].push(arr[i]);
    }
  }
  return newArr;
};
