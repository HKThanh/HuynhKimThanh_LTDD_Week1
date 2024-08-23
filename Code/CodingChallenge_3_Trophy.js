// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// 1.
let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];

let dolphinsAverage = Math.round((dolphins[0] + dolphins[1] + dolphins[2]) / 3);
let koalasAverage = Math.round((koalas[0] + koalas[1] + koalas[2]) / 3);

console.log(`Dolphins average: ${dolphinsAverage}`);
console.log(`Koalas average: ${koalasAverage}`);

// 2.

if (dolphinsAverage > koalasAverage) {
    console.log(`Dolphins win the trophy!`);
} else if (koalasAverage > dolphinsAverage) {
    console.log(`Koalas win the trophy!`);
} else {
    console.log(`Both win the trophy!`);
}

// 3.
console.log(`\nBonus 1:`);

let dolphinsBonus1 = [97, 112, 101];
let koalasBonus1 = [109, 95, 123];

let dolphinsAverageBonus1 = Math.round((dolphinsBonus1[0] + dolphinsBonus1[1] + dolphinsBonus1[2]) / 3);
let koalasAverageBonus1 = Math.round((koalasBonus1[0] + koalasBonus1[1] + koalasBonus1[2]) / 3);

console.log(`Dolphins average: ${dolphinsAverageBonus1}`);
console.log(`Koalas average: ${koalasAverageBonus1}`);

if (dolphinsAverageBonus1 > koalasAverageBonus1 && dolphinsAverageBonus1 >= 100) {
    console.log(`Dolphins win the trophy!`);
} else if (koalasAverageBonus1 > dolphinsAverageBonus1 && koalasAverageBonus1 >= 100) {
    console.log(`Koalas win the trophy!`);
} else if (dolphinsAverageBonus1 === koalasAverageBonus1 && dolphinsAverageBonus1 >= 100 && koalasAverageBonus1 >= 100) {
    console.log(`Both win the trophy!`);
} else {
    console.log(`No one wins the trophy`);
}

// 4.
console.log(`\nBonus 2:`);

let dolphinsBonus2 = [97, 112, 101];
let koalasBonus2 = [109, 95, 106];

let dolphinsAverageBonus2 = Math.round((dolphinsBonus2[0] + dolphinsBonus2[1] + dolphinsBonus2[2]) / 3);
let koalasAverageBonus2 = Math.round((koalasBonus2[0] + koalasBonus2[1] + koalasBonus2[2]) / 3);

console.log(`Dolphins average: ${dolphinsAverageBonus2}`);
console.log(`Koalas average: ${koalasAverageBonus2}`);

if (dolphinsAverageBonus2 > koalasAverageBonus2 && dolphinsAverageBonus2 >= 100) {
    console.log(`Dolphins win the trophy!`);
} else if (koalasAverageBonus2 > dolphinsAverageBonus2 && koalasAverageBonus2 >= 100) {
    console.log(`Koalas win the trophy!`);
} else if (dolphinsAverageBonus2 === koalasAverageBonus2 && dolphinsAverageBonus2 >= 100 && koalasAverageBonus2 >= 100) {
    console.log(`Both win the trophy!`);
} else {
    console.log(`No one wins the trophy`);
}