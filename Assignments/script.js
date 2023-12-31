'use strict'

/*

const country = "Poland";
const continent = "Europe";
let population = 33;


const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "polish";


console.log(population / 2);
population++;
console.log(population);
const moreThanFinland = population > 6;
console.log(moreThanFinland);
console.log(population < 33);
description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);


description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} below average`);
}

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}



function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const c1 = describeCountry('Poland', 23, "Warsaw");
const c2 = describeCountry("Spain", 27, "Madrit");
const c3 = describeCountry("Great Britain", 20, "London");

console.log(c1, c2, c3);



const WORLDPOPULATION = 7900;

function percentageOfWorld1(population) {
    return (population / WORLDPOPULATION) * 100;
}

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
}

console.log(describePopulation("Poland", 23));



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);



function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    return bill * 0.2;
}

// console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];



const myCountry = {
    country: "Poland",
    capital: "Warsaw",
    language: "polish",
    population: 23,
    neighbours: ["Germany", "Ukraine", "Russia"],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking peaople, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length ? false : true;
        return this.isIsland
    }
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking peaople, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
myCountry["population"] -= 2;

myCountry.describe();
console.log(myCountry.checkIsland());



const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`);
}

*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals.push(tips[i] + bills[i]);
}

console.log(tips, totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));