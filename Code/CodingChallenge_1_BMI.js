// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Code here:
const prompt = require("prompt-sync")({ sigint: true });

let markMass = prompt("Enter Mark's mass in kg: ");
let markHeight = prompt("Enter Mark's height in meter: ");
let johnMass = prompt("Enter John's mass in kg: ");
let johnHeight = prompt("Enter John's height in meter: ");

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);