// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
//     Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
function calcAverageHumanAge(ages) {
    // 1. Calculate the dog age in human years using the following formula: if the dog is
    // <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
    // humanAge = 16 + dogAge * 4
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    console.log(humanAges);
    // 2. Exclude all dogs that are less than 18 human years old (which is the same as
    // keeping dogs that are at least 18 years old)
    ages = humanAges.filter(age => age >= 18);
    console.log(ages);
    // 3. Calculate the average human age of all adult dogs (you should already know
    // from other challenges how we calculate averages �)
    const average = ages.reduce((acc, age) => acc + age, 0) / ages.length;
    console.log(average);
}
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);