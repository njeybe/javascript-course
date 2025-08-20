// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// let js = "amazing";

// console.log(40 + 8 + 23 - 10);

// console.log("=== VARIABLES ===");


// let firstNames = "Jonas";
// console.log(firstNames);

// let aged = 30;
// aged = 34;
// console.log(aged);

// const birthYear = 2005;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer"

// let lastName = "Sarah";
// let currentJob = "teacher";
// let PIZ = 3.1415

// // used by default
// const country = "Portugal";
// const language = "Portuguese";
// const population = 10;

// // changable value
// let ageNow = 10;
// ageNow = 112;

// console.log("=== DATA TYPES ===");

// // numbers (int, decimmals)
// let ages = 23;
// console.log(ages);
// console.log(typeof ages);

// // strings
// let firstNamed = "jonas";
// console.log(firstNamed);
// console.log(typeof firstNamed);

// let JSisfun = true;
// console.log(JSisfun);
// console.log(typeof JSisfun);

// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);


// console.log("=== EXERCISE 1: Personal Info Variables");

// const firstName = "Joseph Brian";
// console.log(typeof firstName);

// let age = 20;
// age = 21;
// console.log(typeof age);

// const favNum = 21;
// console.log("My favorite number is " + favNum);

// let isJavaScriptEnjoyable = true;
// console.log(typeof isJavaScriptEnjoyable);

// console.log("=== MATH OPERATORS ===")

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);


// console.log(ageJonas *  2, ageJonas / 10, 2 ** 3);


// console.log("Math operations:");
// console.log("Addition: ", 10 + 5);
// console.log("Subtraction: ", 20 - 8);
// console.log("Multiplication: ", 4 * 10);
// console.log("Division: ", 20 / 5);
// console.log("Eponentiation: ", 2 ** 3);

// // string concat

// const firstName = "Jonas";
// const lastName = "Doe";
// console.log("My name is " + firstName + " " + lastName);

// console.log("I am " + 20 + " " + " years old.");

// // Assignment Operators

// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5
// console.log("x starts as " + x);

// x += 10;
// console.log("x starts as " + x);
// x -= 10;
// console.log("x starts as " + x);
// x *= 4;
// console.log("x starts as " + x);
// x /= 2;
// console.log("x starts as " + x);

// // incement and decrement

// x++;
// console.log("x starts as " + x);

// x--;
// console.log("x starts as " + x);

// // Comparison Operators

// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:")
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparison:")
// console.log(25 > 10);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult: ", isFullAge);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older: ", isJonasOlder);

// console.log("Complex comparisons");

// console.log(now - 1991 > now - 2018);
// console.log(ageJonas > ageSarah);

// Operator precedence

// console.log("=== OPERATOR PRECEDENCE ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

console.log("CODING CHALLENGE #1 : BMI Calculator ===");

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBMI = massMark / heightMark ** 2;
console.log(markBMI);

const johnBMI = massJohn / heightJohn ** 2;
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI
console.log(markBMI, johnBMI, markHigherBMI);

