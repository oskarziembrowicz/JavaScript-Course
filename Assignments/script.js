const country = "Poland";
const continent = "Europe";
let population = 34;


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