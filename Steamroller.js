// Flatten a nested array. You must account for varying levels of nesting.
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

// Passed
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

// Passed
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

// Passed
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

// Passed
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

const flatArr = (arr, result = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object" && arr[i].length >= 0) {
      result = flatArr(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
};

function steamrollArray(arr) {
  return flatArr(arr);
}

steamrollArray([1, [2], [3, [[4]]]]);
