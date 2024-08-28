// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”
function firstPrimeNumbersGreaterThanN(n, p) {
    let primes = [];
    let i = n + 1;
    while (primes.length < p) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i++;
    }
    return primes;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// console.log(firstPrimeNumbersGreaterThanN(10, 5));
// 20. Rotate an array to the left 1 position
function rotateLeft(arr) {
    let first = arr.shift();
    arr.push(first);
    return arr;
}

console.log(`Rotate [1, 2, 3, 4, 5] to left 1 position: ${rotateLeft([1, 2, 3, 4, 5])}`);
// 21. Rotate an array to the right 1 position
// 22. Reverse an array
// 23. Reverse a string
// 24. Create a function that will merge two arrays and return the result as a new array
// 25. Create a function that will receive two arrays of numbers as arguments and return an
// array composed of all the numbers that are either in the first array or second array but not in
// both
// 26. Create a function that will receive two arrays and will return an array with elements that
// are in the first array but not in the second