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



// THE BIND METHOD

const lufthansa = {};

// With event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addTax = value => value + value * 0.23;

console.log(addVAT(100));

function setTaxRate(rate) {
  return function (value) {
    return value + value * rate;
  };
}
const addVAT2 = setTaxRate(0.23);
console.log(addVAT2(100));

*/

// CODING CHALLANGE #1

// Create registerNewAnswer

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const input = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(input);

    if (typeof input === 'number' && input < this.answers.length) {
      3;
      this.answers[input]++;
    } else {
      console.log('incorrect answer');
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// [5,2,3]
// [1,5,3,9,6,1]
