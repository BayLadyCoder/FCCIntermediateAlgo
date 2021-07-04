// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

const findPrimes = (num) => {
  const primeNumbers = [2];
  for (let n = 3; n <= num; n++) {
    let isPrime = true;
    for (let j = 2; j < n; j++) {
      if (n % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primeNumbers.push(n);
  }
  return primeNumbers;
};

function sumPrimes(num) {
  return findPrimes(num).reduce((acc, n) => acc + n);
}

sumPrimes(10);
