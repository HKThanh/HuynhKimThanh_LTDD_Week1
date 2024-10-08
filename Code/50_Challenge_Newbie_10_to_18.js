// 10. Calculate the sum of numbers in an array of numbers
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// 11. Calculate the average of the numbers in an array of numbers
let average = sum / numbers.length;
// console.log(average);

// 12. Create a function that receives an array of numbers as argument and returns an array
// containing only the positive numbers
function getPositiveNumbers(numbers) {
    return numbers.filter(number => number > 0);
}
let numbers2 = [-1, 2, -3, 4, -5];
// console.log(getPositiveNumbers(numbers2));
// 13. Find the maximum number in an array of numbers
let numbers3 = [-2, 0, 58, 49, 30, 60];
// Cách 1:
// let max = numbers3[0];
// for (let i = 1; i < numbers3.length; i++) {
//     if (max < numbers3[i]) {
//         max = numbers3[i];
//     }
// }
// console.log(`Max of array: ${max}`);
// Cách 2:
let max = Math.max(...numbers3);
// console.log(`Max of array: ${max}`);

// 14. Print the first 10 Fibonacci numbers without recursion
let n = 10;
let fibo = [0, 1];
for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
// console.log(fibo);
// 15. Create a function that will find the nth Fibonacci number using recursion
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(2));
// 16. Create a function that will return a Boolean specifying if a number is prime
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(2));
// 17. Calculate the sum of digits of a positive integer number
function sumDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
// console.log(`Sum of digits of 123 is: ${sumDigits(123)}`);
// 18. Print the first 100 prime numbers
let count = 0;
let i = 2;

while (count < 100) {
    if (isPrime(i)) {
        console.log(i);
        count++;
    }
    i++;
}
