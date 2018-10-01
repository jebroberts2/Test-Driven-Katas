function wrap(string, number) {
  let splitArray = [];
  let remainingString = string;
  while (remainingString.length > number) {
    let backwardsCounter = number;
    while (remainingString[backwardsCounter] !== " ") {
      backwardsCounter--;
    }

    splitArray.push(remainingString.slice(0, backwardsCounter + 1));
    // console.log(splitArray);
    // console.log("remaining string before slice:", remainingString);
    remainingString = remainingString.slice(backwardsCounter + 1);
    // console.log("remaining string after slice:", remainingString);
  }
  splitArray.push(remainingString);
  return splitArray.join("\n");
}

// console.log(wrap("kirsten likes dogs", 10));
module.exports = wrap;

// we have a string. we do our while loop, then we push the first section of our string
// into the split array, and we keep doing that until there is no more string left
