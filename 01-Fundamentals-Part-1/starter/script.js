// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23)


// let javaIsFun = true;

// console.log(typeof true);
// console.log(typeof javaIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");


// javaIsFun = "YES";
// console.log(typeof javaIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);


// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// var job = 'programmer';
// job = 'teacher';


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Mark";
// const lastName = "Lastname";
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageJonas > ageSarah);

// const isSarahFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y)

// const averageAge = (ageJonas + ageSarah) / 2;


// const firstName = "Mark";
// const job = "progeammer";
// const birthYear = 2002;
// const year = 2037;

// const mark = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(mark);

// const markNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(markNew);

// console.log(`Just a regular string...`);

// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`String
// multiple
// lines`);


// const age = 15;

// if (age >= 18) {
//     console.log("Sarah can start driving license 🚗");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years 😊`);
// }

// const birthYear = 2002;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);


//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23));

// //type coercion
// console.log("I am " + 23 + " years old");
// console.log('23' - '10' - 3);
// console.log('23' * '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);


const age = '18';
if (age === 18) console.log('You just turned 18 (strict)');
if (age == 18) console.log('You just turned 18 (loose)');

const favourite = Number(prompt("What;s your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 18) {
    console.log('Good choice');
}