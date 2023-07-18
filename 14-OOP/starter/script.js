'use strict';

// CONSTRUCTOR AND NEW OPERATOR

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this!!!
  //   this.calcAge = function() {
  //     console.log(2037 - this.birthYear);
  //   };
};

const oscar = new Person('Oscar', 2002);

console.log(oscar);

// 1. New empty object () is created
// 2. function is called, this = ()
// 3. () is linked to prototype
// 4. function automatically return ()

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(oscar instanceof Person);
