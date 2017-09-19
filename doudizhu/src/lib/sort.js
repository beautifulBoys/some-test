export default (arr) => {
  return arr.sort((a, b) => {
    return b.value - a.value;
  });
};
