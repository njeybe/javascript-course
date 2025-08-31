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

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];
// let sum = 0;

// for (let i = 0; i < grades.length; i++){
//   sum += grades[i];
// }
// console.log(sum);

// function calculateAverage(grades){
//   const avgGrades = sum / grades.length;
//   return avgGrades;
// }

// function findHighestGrade(grades){
//   let highest = grades[0]
//   for(let i = 0; i < grades.length; i++){
//     if(grades[i] > highest){
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// function findLowestGrade(grades) {
//    let lowest = grades[0]
//   for(let i = 0; i < grades.length; i++){
//     if(grades[i] < lowest){
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// function countPassing(grades, passingGrade){
//   let count = 0;
//   for(let i = 0; i < grades.length; i++){
//     if(grades[i] >= passingGrade){
//       count++;
//     }
//   }
//   return count;
// }

// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log(`=== GRADE REPORT ===`);
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing Students: ${passing} out of ${grades.length}`);

// console.log(`=== OBJECTS AND DATA STRUCTURES ===`);

// // The Array Problem

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"]
// ];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);

// Basic Object Creation

// const jonas = {
//   firstname: `Jonas`,
//   lastname: `Schmedtmann`,
//   age: 2037 - 1991,
//   job: `teacher`,
//   friends: [`Michael`, `Peter`, `Steven`]
// };

// console.log(jonas);

// // array is hard to understand because you need to remember the data while creating an object makes us clear and easy to understand

// console.log(jonas.firstname);
// console.log(jonas.lastname);
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);


// console.log(jonas["firstname"]); // Same result as dot notation
// console.log(jonas["lastname"]);
// console.log(jonas["age"]);

// // here the variable will concatinate with the value inside the bracket so it will become properties
// // first + name = firstname, jonas[firstname] = Jonas
// // last + name = lastname, jonas[firstname] = Schemedtmann
// const nameKey = "name";
// console.log(jonas["first" + nameKey]); // 'Jonas'
// console.log(jonas["last" + nameKey]);

////////////////////////////////////
// Modifying Existing Properties
// jonas.job = `Programmer`;
// jonas[`age`] = 35;
// console.log(jonas);

// // Adding New Properties
// jonas.location = `Portugal`;
// jonas.twitter = `@jonasschemdtmann`;
// jonas.hasDriversLicense = true;
// console.log(jonas);

// Exercise 1: Personal Object

// const book = {
//   title: `Naruto Volume 1`,
//   author: `Masashi Kishimoto`,
//   pages: 192,
//   isRead: false
// };

// const playlist = {
//   name: `zxc`,
//   creator: `njeybe`,
//   songs: [`Heaven by Bryan Adams`, `Wherever You Will Go by The Calling`, 
//     `All Out of Love by Air Supply`
//   ]
// };

// console.log(book.title);
// console.log(playlist[`creator`]);

// // Adding new Properties
// book.published = 2003;
// playlist.estimatedtime = `3h 21m`;

// // Modifying existing properties
// book[`pages`] = 187;
// playlist.songs[1] = `Bed of Roses by Bon Jovi`;

// console.log(book);
// console.log(playlist);


///////////////////////////////////////////////////
// Objects vs Arrays: When to Use What

// // Use Array for:
// // Ordered, indexed data - think lists
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// // Use Objects for:
// // Named, descriptive data - think entities
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

//////////////////////////////////////////////////////////
// Object Methods

// const jonas = {
//   firstname: `Jonas`,
//   lastname: `Schmedtmann`,
//   birthYear: 1991,
//   job: `teacher`,
//   friends: [`Michael`,`Peter`,`Steven`],
//   hasDriversLicense: true,

//   //method - function inside object
//   calcAge: function(birthYear){
//     return 2037 - birthYear;
//   },
// }

// console.log(jonas.calcAge(1991));
// console.log(jonas.calcAge(jonas.birthYear));

// // The 'this' keyword - Accessing own Properties
// const jonasImproved = {
//   firstname: `Jonas`,
//   lastname: `Schmedtmann`,
//   birthYear: 1991,
//   job: `teacher`,
//   friends: [`Michael`,`Peter`,`Steven`],
//   hasDriversLicense: true,

//   calcAge: function(){
//     console.log(this);
//     return 2037 - this.birthYear;
//   },
// };

// console.log(jonasImproved.calcAge());


// const jonasAdvanced = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function(){
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function (){
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has
//     ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// }

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age);
// console.log(jonasAdvanced.getSummary());

/////////////////////////////////////////////////
// Exercise 2: Calculator Object

// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

//   add: function(){
//     return this.num1 + this.num2
//   },

//   subtract: function(){
//     return this.num1 - this.num2;
//   },

//   multiply: function(){
//     return this.num1 * this.num2;
//   },

//   divide: function(){
//     return this.num1 / this.num2;
//   },

//   calculate: function(){
//     if (this.operator === '+'){
//       return this.add()
//     }else if (this.operator === '-'){
//       return this.subtract();
//     }else if (this.operator === '*'){
//       return this.multiply();
//     }else if(this.operator === '/'){
//       return this.divide();
//     }else{
//       return `Please input an operator`;
//     }
//   },

//   getResult: function(){
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   }
// }

// console.log(calculator.calculate());
// console.log(calculator.getResult());

// ////////////////////////////////////////////////////////////

// // Coding Challenge 3: User Profile System

// const user = {
//   firstname: `Joseph Brian`,
//   lastname: `Natividad`,
//   birthYear: 2005,
//   location: `Teresa, Rizal`,
//   interests: [` basketball `, ` coding `, ` playing pc games `],
//   friends: [
//     {name: `Jed`, status: `active`},
//     {name: `Cymon`, status: `inactive`},
//     {name: `Vic`, status: `active`},
//     {name: `JP`, status: `inactive`},
//     {name: `Justin`, status: `active`},
//     {name: `Lebron`, status: `inactive`}
// ],

//   isActive: true,

//   calcAge: function(){
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

//   addFriend: function(name, status = `active`){
//     const newFriend = {
//       name: name, status: status
//     };

//     this.friends.push(newFriend);

//     return this.friends.length;
//   },

//   getActiveFriends: function(){
//     return this.friends.filter(`active`);
//   },

//   toggleStatus: function (){
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   getSummary: function(){
//     return `
//     Name: ${this.firstname} ${this.lastname}
//     Age: ${this.calcAge()}
//     Location: ${this.location}
//     Status (Active/Inactive): ${this.isActive}
//     Friend Counts: ${this.friends.length}
//     Interests: ${this.interests}`
//   }
// }

// console.log(user.getSummary());
// user.addFriend(`JD`, `active`);
// user.toggleStatus();
// console.log(`After updates:`);
// console.log(user.getSummary());

////////////////////////////////////////////////////////////////////////////

console.log(`=== DOM MANIPULATION AND INTERACTIVITY ===`);

// querySelector (different selector types)
// const message = document.querySelector(".message");
// const button = document.querySelector("#btn");
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");

// console.log(message);
// console.log(button);
// console.log(heading);

// getElementById (only works with IDs)
// const buttonById = document.getElementById("btn");

// console.log(buttonById);
// console.log(buttonById === button);

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);
// console.log(allParagraphs,length);



// // Exercise 1: Element Selection Practice

// const guessInput = document.querySelector(".guess");
// const buttonQuery = document.querySelector("#btn");
// const buttonById = document.getElementById("btn");
// const allSpans = document.querySelectorAll("span");
// const firstSpan = document.querySelector("span");

// console.log(guessInput);
// console.log(buttonQuery);
// console.log(buttonById);
// console.log(allSpans);
// console.log(firstSpan.textContent);

// // Modifying Element Content

// const message = document.querySelector(".message");

// console.log(message.textContent);
// message.textContent = "Hello from JavaScript"; // plain text only

// message.innerHTML = "<strong>Bold text from JS!</strong>"; // html content

// console.log(message.innerText); // visible text only, ignored respects CSS

// // Working with input elements

// const input = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default Text";
// input.placeholder = "Type here";

// Dynamic Style Changes 

// const heading = document.querySelector("h1");

// heading.style.color = "red"
// heading.style.backgroundColor = "yellow"
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

// Exercise 2: Content and Style

// const heading = document.querySelector("h1");
// const button = document.querySelector("#btn");
// const input = document.querySelector(".guess");
// const message = document.querySelector(".message");
// const scoreValue = document.querySelector(".score-value");

// heading.textContent = "Joseph Brian Natividad";

// button.style.backgroundColor = "blue";
// button.style.color = "white";
// button.style.padding = "10px 20px";
// button.style.border = "none"
// button.style.borderRadius = "8px";

// input.placeholder = "Type something cool...";

// message.innerHTML = "Hello, I am <strong>happy</strong> to be here. :)";

// scoreValue.style.fontSize = "2rem";
// scoreValue.style.color = "green";
// scoreValue.style.fontWeight = "bold";


// // Event Listeners and User Interaction
// // Click events

// button.addEventListener("click", function (){
//   console.log(`Button was clicked!`);
//   message.textContent = `You clicked the button!`;
//   message.style.color = `green`;
// });

// // Click Counter Example

// let clicked = 0;

// button.addEventListener("click", function (){
//   clicked++;
//   message.textContent = `You have clicked ${clicked} times`;
//   button.style.backgroundColor = `hsl (${clicked * 30}, 70%, 50%)`;
// });

// // Input Events - Real-time Typing Response

// input.addEventListener("input", function(){
//   const userText = input.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`
// });

// // Keyboard events - responding to a specific keys

// input.addEventListener("keydown",  function (event){
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter"){
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = "";
//   }
// });

// // Global keyboard events

// document.addEventListener("keydown", function(event){
//   if(event.key === "Escape"){
//     message.textContent = `Reset with Escape`;
//     input.value = "";
//     clicked = 0;
//     button.textContent = "Click me!";
//   }
// });

// Exercise 3: Event listeners practice

// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");
// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// heading.addEventListener("click", function (){
//   heading.style.color = "blue";
// });

// input.addEventListener("input", function(){
//   const count = input.value.length;
//   message.textContent = `Character counts: ${count}`;
// });

// document.addEventListener("keydown", function(event){
//   if(event.key === " "){
//     message.textContent = `Spacebar Pressed`;
//   }
// });

// button.addEventListener("mouseover", function(){
//   button.textContent = `Hovering button`;
// })

// button.addEventListener("mouseout", function(){
//   button.textContent = `Click me!`;
// });

// heading.addEventListener("dblclick", function(){
//   heading.textContent = `Double clicked!`;
//   heading.style.backgroundColor = "lightBlue";
// });

// Final project: Interactive Score Tracker

