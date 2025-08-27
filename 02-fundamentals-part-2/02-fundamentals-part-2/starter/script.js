console.log(`Fundamentals Part 2`);

// Fundtions - Declaration and Expressions

console.log(`=== FUNCTIONS ===`);

function logger(){
    console.log("My name is Jonas");
}

logger();

// Function with Parameters

function foodProcessor (apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


const appleJuice = foodProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = foodProcessor (2, 4);
console.log(appleOrangeJuice);

// Function Expression

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge (2005);
console.log(age1);

function calcAge2 (birthYear, currentYear){
    const age = currentYear - birthYear;
    return age;
}

const myAge = calcAge2(2005, 2025);
const someoneAge = calcAge2(1995, 2025)
console.log(`He is ${someoneAge}, and I am ${myAge}`);

console.log(calcAge(2005));

// Handling Missing Parameters

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Jonas", "Schmedtmann", 46)); // All good
console.log(introduce("Sarah")); // Missing parameters become undefined

// Understanding Return

function calcAge3 (birthYear){
    return 2025 - birthYear;
}

function yearsUntilRetirement (birthYear, firstName) {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;

    if( retirement > 0){
        return `${firstName} retires in ${retirement} years`;
    }else{
        return `${firstName} has already retired.`
    }
}

console.log(yearsUntilRetirement(2005, "JB"));

// Function Scope

const globalVar = `I am global`;

function testScope(){
    const localVar = `I am local`;
    console.log(globalVar);
    console.log(localVar);
}

testScope();

// console.log(localVar); // will error because it is not defined
console.log(globalVar);

const userName = "Jonas";

function createWelcomeMessage(user){
    const message = `Welcome back ${user}!`;
    const timeStamp = new Data().toLocaleTimeString();

    return `${message} Current time: ${timeStamp}`;
}

// console.log(createWelcomeMessage(userName)); error because theres a local variable

// Coding Challenge 1
function calcAverage(score1, score2, score3){
    return (score1 + score2 + score3) / 3;
}

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

function checkWinner(avgDolphins, avgKoalas){

    if (avgDolphins >= 2 * avgKoalas){
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    }else if (avgKoalas >= 2 * avgDolphins){
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    }else{
        return `No teams win`;
    }
}


