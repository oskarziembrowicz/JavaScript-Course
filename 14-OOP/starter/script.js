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

// PROTOTYPES
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

oscar.calcAge();
matilda.calcAge();

console.log(oscar.__proto__);
console.log(oscar.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(oscar));
console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype is a prototype of linked objects, IT IS NOT the prototype of Person

Person.prototype.species = 'Homo Sapiens';
console.log(oscar.species, matilda.species);

console.log(oscar.hasOwnProperty('firstName'));
console.log(oscar.hasOwnProperty('species'));
