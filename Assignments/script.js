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

*/

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const c1 = describeCountry('Poland', 23, "Warsaw");
const c2 = describeCountry("Spain", 27, "Madrit");
const c3 = describeCountry("Great Britain", 20, "London");

console.log(c1, c2, c3);