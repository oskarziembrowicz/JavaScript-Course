'use strict';

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
