// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

// addTogether(2, 3) should return 5.

// Passed
// addTogether(23, 30) should return 53.

// Passed
// addTogether(5)(7) should return 12.

// Passed
// addTogether("http://bit.ly/IqT6zt") should return undefined.

// Passed
// addTogether(2, "3") should return undefined.

// Passed
// addTogether(2)([3]) should return undefined.

function addTogether(num1, num2) {
  // if(num1 && num2){
  //   if(typeof num1 === "number" && typeof num2 === "number") {
  //     return num1 + num2;
  //   }
  // } else if(typeof num1 === "number") {
  //   return function(num3){
  //     if(typeof num3 === "number") return num1 + num3
  //   }
  // }

  if (typeof num1 === "number") {
    if (typeof num2 === "number") {
      return num1 + num2;
    } else if (!num2) {
      return function (num3) {
        if (typeof num3 === "number") return num1 + num3;
      };
    }
  }

  return undefined;
}

addTogether(2, 3);
