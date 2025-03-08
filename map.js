const map = (arr, fn) => {
  const results = [];
  for(let item of arr) {
    results.push(fn(item));
  }
  return results;
}

module.exports = map;

