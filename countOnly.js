const countOnly = (allItemsArr, itemsToCountObj) => { // change param names
  const results = {};
  for (const item of allItemsArr) {
    // if I don't add the &&, it asserts the last test as fail because it DOES have that name, but we don't want to count it. We only want to count it if it is true.
      if (itemsToCountObj.hasOwnProperty(item) && (itemsToCountObj[item])) {
      // if the item is not yet in the results object, start the count at 1
      if (!results[item]) { 
        results[item] = 1;
      } else {
        // if it is already in the object, increment by 1.
        results[item] ++;
      }
    }
  }
  return results;
};

module.exports = countOnly;
