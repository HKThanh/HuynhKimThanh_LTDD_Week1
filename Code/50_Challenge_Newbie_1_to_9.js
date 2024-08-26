// 1. Print numbers from 1 to 10
console.log('Numbers from 1 to 10:');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('-------------------');
// 2. Print the odd numbers less than 100
console.log('Odd numbers less than 100:');
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}
console.log('-------------------');

// 3. Print the multiplication table with 7
console.log('Multiplication table with 7:');
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}
console.log('-------------------');

// 4. Print all the multiplication tables with numbers from 1 to 10
console.log('Multiplication tables from 1 to 10:');
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
console.log('-------------------');

// 5. Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum of numbers from 1 to 10: ${sum}`);
console.log('-------------------');

// 6. Calculate 10!
let number = 1;
for (let i = 1; i <= 10; i++) {
    number *= i;
}
console.log(`10! = ${number}`);
console.log('-------------------');

// 7. Calculate the sum of even numbers greater than 10 and less than 30
let sum2 = 0;
for (let i = 12; i < 30; i += 2) {
    sum2 += i;
}
console.log(`Sum of even numbers greater than 10 and less than 30: ${sum2}`);
console.log('-------------------');

// 8. Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

console.log(`30 Celsius to Fahrenheit: ${celsiusToFahrenheit(30)}`);
console.log('-------------------');

// 9. Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(`86 fahrenheit to Celsius: ${fahrenheitToCelsius(86)}`);
