// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  if (num === 1) return 1;
  if (num === 2) return 2;
  if (num === 3) return 4;

  let beforePrev = 1;
  let prev = 1;
  let sum = 1;

  while (prev <= num) {
    if (prev % 2 !== 0) sum = sum + prev;
    const curr = prev + beforePrev;
    beforePrev = prev;
    prev = curr;
  }
  return sum;
}

sumFibs(4);
