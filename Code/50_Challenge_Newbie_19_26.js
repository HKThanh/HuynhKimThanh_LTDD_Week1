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
function rotateRight(arr) {
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}

console.log(`Rotate [1, 2, 3, 4, 5] to right 1 position: ${rotateRight([1, 2, 3, 4, 5])}`);
// 22. Reverse an array
// Cach 1:
// function  reverseArray(arr) {
//     let result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result.push(arr[i]);
//     }
//     return result;
// }
// Cach 2:
function reverseArray(arr) {
    return arr.reverse();
}

console.log(`Reverse [1, 2, 3, 4, 5]: ${reverseArray([1, 2, 3, 4, 5])}`);
// 23. Reverse a string
// Cach 1:
// function reverseString(str) {
//     let result = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }

// Cach 2:
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(`Reverse 'Hello World': ${reverseString('Hello World')}`);
// 24. Create a function that will merge two arrays and return the result as a new array
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(`Merge [1, 2, 3] and [4, 5, 6]: ${mergeArrays([1, 2, 3], [4, 5, 6])}`);
// 25. Create a function that will receive two arrays of numbers as arguments and return an
// array composed of all the numbers that are either in the first array or second array but not in
// both
function mergeArraysNotBoth(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }
    return result;
}

console.log(`Merge [1, 2, 3, 4] và [1, 4, 5] 
and return an array composed of all the numbers 
that are either in the first array or second array 
but not in both: ${mergeArraysNotBoth([1, 2, 3, 4], [1, 4, 5])}`);
// 26. Create a function that will receive two arrays and will return an array with elements that
// are in the first array but not in the second
function mergeArraysNotInSecond(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}

console.log(`Merge [1, 2, 3, 4] and [1, 4, 5] 
return an array which has elements in first array 
but not in second array: ${mergeArraysNotInSecond([1, 2, 3, 4], [1, 4, 5])}`);