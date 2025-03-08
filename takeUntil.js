const takeUntil = (arr, fn) => {
  const resultArr = [];
  for(let value of arr) {
    if (fn(value)) {
      return resultArr;
    }
    resultArr.push(value);
  }
  return resultArr;
};


module.exports = takeUntil;