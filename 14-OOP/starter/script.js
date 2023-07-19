'use strict';

/*

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


// PROTOTYPAL INHERITANCE

console.log(oscar.__proto__);
// Pbject.prototype (top of chain)
console.log(oscar.__proto__.__proto__);
console.log(oscar.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 8, 1, 5, 8, 4]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

*/

// ES6 CLASSES

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to prototype of PersonCl
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first class citizens
// 3. Classes are executed always in strict mode
