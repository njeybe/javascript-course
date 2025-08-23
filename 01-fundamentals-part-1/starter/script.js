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

// console.log("CODING CHALLENGE #1 : BMI Calculator ===");

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const markBMI = massMark / heightMark ** 2;
// console.log(markBMI);

// const johnBMI = massJohn / heightJohn ** 2;
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI
// console.log(markBMI, johnBMI, markHigherBMI);

// String and Template Literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// // back ticks
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);


// console.log(`I'm ${2025 - 2005}, years old`);
// console.log(`Math works: ${2 + 3}, equals to five`);
// console.log(`Comparison too: ${5 > 7},`);

// console.log(`this is a regular string`);

// // Taking decisions: if/else statements

// const age = 15;

// if(age >= 18){
//     console.log(`Sarah can start driving license`);
// }else{
//     const yearLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearLeft}, years :)`)
// }

// ////
// // Truthy and falsy value

// console.log(Boolean (0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;

// if(money){
//     console.log(`dont spend it all`);
// }else{
//     console.log(`go get a job`);
// }

// let height = 0;

// if (height){
//     console.log(`YAY your height is defined as fuck`);
// }else{
//     console.log(`your height is UNDEFINED`)
// }

// // better approach
// if(height !== undefined){
//     console.log(`Heigh is defined`);
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const markBMI = massMark / heightMark ** 2;
// console.log(markBMI);

// const johnBMI = massJohn / heightJohn ** 2;
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI
// console.log(markBMI, johnBMI, markHigherBMI);

// if(markBMI > johnBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// }else{
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

console.log(`=== TYPE CONVERSION VS COERCION ===`);

// Manual Type Conversion
const inputYear = "1991";
console.log((inputYear), inputYear);

console.log(Number(inputYear) + 18);
console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// Automatic Type Coercion (js decides)
console.log(`I am ${23} years old`);
console.log(`23` - `10` - 3 );
console.log(`23` / `2`);
console.log(`23` * `2`);

// "1" + 1 will be concatinated then will minus to 1 so the answer is 10
let n = "1" + 1;
n = n - 1;
console.log(n);

// Exercise 1: Conversion Detective

console.log(`5` + 2); // concatinate 5 with 2 so the answer will be 52
console.log(`5` - 2); // the asnwer will be 3
console.log(`5` * 2); // the answer is 10
console.log(`5` / 2); // answer is 2.5

const userAge = `25`;
const userScore = 95;

console.log(Number(userAge)); // I use Number() to make the userAge a integer
console.log(String(userScore)); // Here I use String to make the score a string

// Excercise 2: Fix the Bug

// To solve the prompt error here I put Number() so that the number will become integer
// not a string then to run the HTML file then you can enter the numbers    

// const num1 = Number(prompt(`Enter First Number:`));
// const num2 = Number(prompt(`Enter Second Number:`));
// const sum = num1 + num2;
// console.log(`Sum: ${sum}`) 

// Equality Operators: === vs == (The Professional's Choice)

// Strict Equality (===) Professional way
// const age = `18`;
// if (age === 18) console.log(`You just became an adult (strict)`);
// if (age == 18) console.log(`You just became an adult (loose)`);

// console.log(`18`=== 18); // you cant compare string and integer using strict (===)
// console.log(`18`== 18); // you can compare string and integer using loose (==) 
// console.log(18 === 18); // you can compare both integer using strict (===)

// // Loose Equality (==) Dangerous one
// console.log(`0` == 0);
// console.log(0 == false);
// console.log(null == undefined);

// Practice
// The answer on this practice will show on console when you inspect the html file

// const favourite = Number(prompt(`What's your favourite number?`));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log(`Cool! 23 is an amazing number`);
// }else if (favourite == 7){
//     console.log(`7 is also a cool number`);
// }else if (favourite === 9){
//     console.log(`9 is also a cool number`);
// }else{
//     console.log(`Number is not 23 or 7 or 9`);
// }

// Excercise 1: Equality Detective

console.log(5 === "5"); // false
console.log(5 == "5");  // true
console.log(true === 1); // false
console.log(true == 1); // true
console.log(false === 0); // false 
console.log(false == 0); // true 

// Exercise 2: Fix the loggin system
// Changed the loose (==) to strict(===)

// const username = prompt(`Username:`);
// const password = prompt(`Password:`);

// if (username === "admin" && password === `1234`){
//     console.log(`Welcome Admin!`);
// }else{
//     console.log(`Access denied`);
// }

/////////////////////////////////////////
// Logical operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// Real-World Example
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log(`Sarah is able to drive!`);
}else{
    console.log(`Someone else should drive...`);
}

// Complex Logic with Parethesis
// const age = 20;
const hasPermission = true;
const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience){
//     console.log(`Approve to drive`);
// }else{
//     console.log(`Not approve to drive`);
// }

// Exercise 1: Club Entry System

// const age = 19;
// const hasID = true;
// const isVIP = false;

// if ((age >= 21 && hasID) || isVIP){
//     console.log(`Welcome to the club :)`);
// }else{
//     console.log(`Sorry, you cannot enter`)
// }

// Exercise 2: Weather Advisor

const temperature = 30;
const isRaining = false;
const isWindy = true;

if ((temperature >= 20 && temperature <=30) && !isRaining && !isWindy){
    console.log(`Perfect day`);
}else if((temperature >= 15 && temperature <=35) && !isRaining){
    console.log(`Good day`);
}else{
    console.log(`Stay inside`)
}

//////////////////////////////////////////////////////////////////////////
// The Conditional (Ternary) Operator

const age = 23;
const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

// Equivalent if/else (more verbose)
let drink2;
if (age >= 18){
    drink2 = `wine`;
}else{
    drink2 = `water`;
}
console.log(drink2);

// Ternary in Template Literals (Super Powerful)
console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);

// When to use Ternary vs If/Else

// Ternary is good for TWO OPTION decisions
// const score = 60
// const status = score >= 60 ? `passed` : `failed`;
// console.log(status);

// const isLoggedIn = false;
// const message = isLoggedIn ? `Welcome back!` : `Please Log in`;
// console.log(message);

// const isPremium = true;
// const discount = isPremium ? 0.2 : 0.1;
// console.log(discount);

// // If/Else is good for complex logic with multiple statements

// if (score >= 90){
//     console.log(`Excellent!`);
//     grade = `A`;
//     bonus = true;
// }else if( score>= 80){
//     console.log(`Very Good!`);
//     grade = `B`;
//     bonus = true;
// }else if( score>= 70){
//     console.log(`Good!`);
//     grade = `D`;
//     bonus = true;
// }else if( score>= 60){
//     console.log(`Fail!`);
//     grade = `E`;
//     bonus = true;
// }


// Exercise 1: Status Messages

// 1. Login status

// const isLoggedIn = true;
// let welcomeMessage;
// if (isLoggedIn) {
//     welcomeMessage = `Welcome back!`;
// }else{
//     welcomeMessage = `Please sign in`;
// }

// Ternary version
const isLoggedIn = true;
const welcomeMessage = isLoggedIn ? `Welcome back` : `Please sign in`;
console.log(welcomeMessage);

// 2. Price with discount

// const isPremium = false;
// let price;
// if (isPremium){
//     price = 100 * 0.8;
// }else{
//     price = 100;
// }

// Ternary version

const isPremium = false;
const price = isPremium ? 100 * 0.8 : 100;
console.log(price);

// Exercise 2: Smart Responses

const score = 85;
const yourScore = score >= 85 ? `Passed` : `Failed`;
console.log(`Your score: ${score}. (${yourScore}) :)`);

const weather = `sunny`;
const todaysWeather = weather === `sunny` ? `Great for activities` : `Stay inside`;
console.log(`Today is ${weather}. (${todaysWeather})`);

const battery = 15;
const battPercent = battery <= 20 ? `Low battery percentage` : `Battery OK`;
console.log(`Battery ${battery}% (${battPercent})`);

console.log(`=== FINAL CHALLENGE: TIP CALCULATOR ===`);

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const totalVal = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalVal}`)