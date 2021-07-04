// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let multiplier = 1;
  let result = 0;
  const max = Math.max(...arr);

  while (true) {
    result = max * multiplier;
    let isCommon = true;
    for (let min = Math.min(...arr); min < max; min++) {
      // console.log('result',result,'min',min)
      if (result % min !== 0) {
        isCommon = false;
        break;
      }
    }
    if (isCommon) return result;
    multiplier++;
  }
}

smallestCommons([1, 5]);
