// // console.log(`Fundamentals Part 2`);

// // // Fundtions - Declaration and Expressions

// // console.log(`=== FUNCTIONS ===`);

// // function logger(){
// //     console.log("My name is Jonas");
// // }

// // logger();

// // // Function with Parameters

// // function foodProcessor (apples, oranges){
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }


// // const appleJuice = foodProcessor(5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = foodProcessor (2, 4);
// // console.log(appleOrangeJuice);

// // // Function Expression

// // const calcAge = function (birthYear) {
// //     return 2037 - birthYear;
// // }

// // const age1 = calcAge (2005);
// // console.log(age1);

// // function calcAge2 (birthYear, currentYear){
// //     const age = currentYear - birthYear;
// //     return age;
// // }

// // const myAge = calcAge2(2005, 2025);
// // const someoneAge = calcAge2(1995, 2025)
// // console.log(`He is ${someoneAge}, and I am ${myAge}`);

// // console.log(calcAge(2005));

// // // Handling Missing Parameters

// // function introduce(firstName, lastName, age) {
// //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// //   return introduction;
// // }

// // console.log(introduce("Jonas", "Schmedtmann", 46)); // All good
// // console.log(introduce("Sarah")); // Missing parameters become undefined

// // // Understanding Return

// // function calcAge3 (birthYear){
// //     return 2025 - birthYear;
// // }

// // function yearsUntilRetirement (birthYear, firstName) {
// //     const age = calcAge3(birthYear);
// //     const retirement = 65 - age;

// //     if( retirement > 0){
// //         return `${firstName} retires in ${retirement} years`;
// //     }else{
// //         return `${firstName} has already retired.`
// //     }
// // }

// // console.log(yearsUntilRetirement(2005, "JB"));

// // // Function Scope

// // const globalVar = `I am global`;

// // function testScope(){
// //     const localVar = `I am local`;
// //     console.log(globalVar);
// //     console.log(localVar);
// // }

// // testScope();

// // // console.log(localVar); // will error because it is not defined
// // console.log(globalVar);

// // const userName = "Jonas";

// // function createWelcomeMessage(user){
// //     const message = `Welcome back ${user}!`;
// //     const timeStamp = new Data().toLocaleTimeString();

// //     return `${message} Current time: ${timeStamp}`;
// // }

// // // console.log(createWelcomeMessage(userName)); error because theres a local variable

// // // Coding Challenge 1
// // function calcAverage(score1, score2, score3){
// //     return (score1 + score2 + score3) / 3;
// // }

// // // Test 1
// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // Test Data 2
// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // function checkWinner(avgDolphins, avgKoalas){

// //     if (avgDolphins >= 2 * avgKoalas){
// //         return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
// //     }else if (avgKoalas >= 2 * avgDolphins){
// //         return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
// //     }else{
// //         return `No teams win`;
// //     }
// // }

// // Array and Data Manipulation // 

// const studentGrade = 85;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// console.log(`=== ARRAYS ===`);

// const mixed = [`Jonas`, 27, true];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// grades [0] = 99;

// console.log(grades[0]);
// console.log(grades[1]);
// console.log(grades[2]);
// console.log(grades[3]);
// console.log(grades[4]);

// console.log(grades.length);

// // Array expressions

// const firstName = "Jonas";
// const jonas = [firstName, "Schedtmann", 2037 - 1991];
// console.log(jonas);

// const calcAge = function (birthYear){
//     return 2025 - birthYear;
// };

// const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// console.log(ages);

// /////////////////////

// // Addinng Methods - Adding Elements
// const friends = ["Michael", "Steven", "Peter"];

// // Push - add to end
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// // Unshift - add to beginning
// friends.unshift("John");
// console.log(friends);

// // Removing Elements //

// // Pop - remove from end
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // Shift - remove from the beginning
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // Finding Elements // 

// // IndexOf - find the position of elements
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); // bob was not in the array

// // Includes - check if elements exists
// console.log(friends.includes("Steven")); // true because steven is in the array
// console.log(friends.includes("Bob")); // false because bob isnt in the array

// // Array Iteration //

// // For Loop with Arrays
// // const friends = ["Michael", "Steven", "Peter"] 
// for (let i = 0; i < friends.length; i++){
//     console.log(friends[i]);
// }

// // For loop with processing

// for (let i = 0; i < years.length; i++){
//     // const years = [1991, 2007, 1969, 2020];
//     const ages = [];
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// // forEach method - modern approach
// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// // Arrow function version (even cleaner)
// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// // Practice Example /
// //const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades.length; i++){
//   total += grades[i];
// }

// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });

// console.log(`${passedCount} out of ${grades.length} students passed`);

const grades = [78, 85, 92, 67, 88, 95, 73, 82];
let sum = 0;

for (let i = 0; i < grades.length; i++){
  sum += grades[i];
}
console.log(sum);

function calculateAverage(grades){
  const avgGrades = sum / grades.length;
  return avgGrades;
}

function findHighestGrade(grades){
  let highest = grades[0]
  for(let i = 0; i < grades.length; i++){
    if(grades[i] > highest){
      highest = grades[i];
    }
  }
  return highest;
}

function findLowestGrade(grades) {
   let lowest = grades[0]
  for(let i = 0; i < grades.length; i++){
    if(grades[i] < lowest){
      lowest = grades[i];
    }
  }
  return lowest;
}

function countPassing(grades, passingGrade){
  let count = 0;
  for(let i = 0; i < grades.length; i++){
    if(grades[i] >= passingGrade){
      count++;
    }
  }
  return count;
}

const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log(`=== GRADE REPORT ===`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing Students: ${passing} out of ${grades.length}`);