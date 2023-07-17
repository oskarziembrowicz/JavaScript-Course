'use strict';

/*

// HOW PASSING ARGUMENTS WORKS

const flight = 'LH234';
const oscar = {
  name: 'Oskar Lastname',
  passport: 23456723412,
};

const checkIn = function (flightNumber, passanger) {
  flightNumber = 'LH999';
  passanger.name = 'Mr. ' + passanger.name;

  if (passanger.passport === 23456723412) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, oscar);
// console.log(flight);
// console.log(oscar);

// // Is the same as doing...
// const flightNumber = flight;
// const passanger = oscar;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(oscar);
checkIn(flight, oscar);



// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);
['Oscar', 'Adam', 'Martha'].forEach(high5);

*/

// FUNCTIONS RETURNING FUNCTIONS

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeter = greet('Hey');
greeter('Oscar');
greeter('Steven');

greet('Hello')('Oscar');

const greet1 = greeting => name => console.log(`${greeting} ${name}`);

greet1('Howdy')('partner');
