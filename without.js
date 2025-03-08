const without = (origArr, toRemoveArr) => {
  let arrWithout = [];
  for (const element of origArr) {
    if(!toRemoveArr.includes(element)) {
      arrWithout.push(element);
    }
  };
  return arrWithout;
};

module.exports = without;