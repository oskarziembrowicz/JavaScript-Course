////////////////////////////////////
// IMPORTING MODULES
/*
// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('apple', 7);
add('pizza', 2);
add('bread', 5);
console.log(cart);
*/

/////////////////////////////////////////
// TOP LEVEL AWAIT

/*
// const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  console.log(data);

  return { title: data.title };
};

// Approach 1:
// const lastPost = getLastPost();
// lastPost.then(last => console.log(last));

// Approach 2:
const lastPost = await getLastPost();
console.log(lastPost);
*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);
