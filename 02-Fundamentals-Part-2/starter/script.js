'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// const interface = 'Audio';
// const private = 534;



function logger() {
    console.log("My name is Jonas");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2002);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(2002);

console.log(age1, age2);



//Arrow function:
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(2002, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(2002, "Oscar"));
console.log(yearsUntilRetirement(1950, "Mike"));



const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2002, 2023);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Oscar"
const oscar = [firstName, "Lastname", 2037 - 1991, "programmer", friends];
console.log(oscar);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
console.log(ages);



const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23)
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven.");
}



// Object literal syntax
const oscar = {
    firstName: "Oscar",
    lastName: "Lastname",
    age: 2037 - 2002,
    job: "programmer",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(oscar);

console.log(oscar.lastName);
console.log(oscar["lastName"]);

const nameKey = "Name";
console.log(oscar["first" + nameKey]);
console.log(oscar["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Oscar? Choose between firstName, lastName, age, job, and friends");

if (oscar[interestedIn]) {
    console.log(oscar[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

oscar.location = "Poland";
oscar["twitter"] = "@oziembrowicz";
console.log(oscar);

// Challange
// "Oscar has 3 friends and his best friend is called Michael"
console.log(`${oscar.firstName} has ${oscar.friends.length} friends, and his best friend is called ${oscar.friends[0]}`);

*/

const oscar = {
    firstName: "Oscar",
    lastName: "Lastname",
    birthYear: 2002,
    job: "programmer",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} drivers license.`;
    }
};

console.log(oscar.calcAge());

console.log(oscar.age);
console.log(oscar.age);
console.log(oscar.age);

//Challenge
// "Oscar is a 43-year old programmer, and he has a/no drivers license."

console.log(oscar.getSummary());