const letterPositions = (sentence) => {
  let positions = {};
  for (let i = 0; i < sentence.length; i++) {
    // let letter = sentence[i];
    if (sentence[i] !== " ") {
      if (!positions[sentence[i]]) {
        positions[sentence[i]] = [i];
      } else {
        positions[sentence[i]].push(i);
      }
    }
  }
  return positions;
};



module.exports = letterPositions;