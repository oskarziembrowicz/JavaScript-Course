'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderCountry(data, calssName = '') {
  const html = `
    <article class="country ${calssName}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(2)}M people</p>
              <p class="country__row"><span>🗣️</span>${
                Object.values(data.languages)[0]
              }</p>
              <p class="country__row"><span>💰</span>${
                Object.values(data.currencies)[0].name
              }</p>
            </div>
          </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
}

function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
}

function getJSON(url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
}

///////////////////////////////////////

/*
function getCountryData(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(2)} people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
}
*/

/*
function getCountryAndNeighbour(country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
}

// getCountryAndNeighbour('poland');
getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

*/

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// function getCountryData(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// }

// function getCountryData(country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'aadgsadg';

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }

//       response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong 🚫 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

/*
function getCountryData(country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} 💥💥💥`);
      renderError(`Something went wrong 🚫 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener('click', function () {
  getCountryData('poland');
});

getCountryData('Australia');

*/

///////////////////////////////////////////

/*

// Coding challange #1

function whereAmI(lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`Connection failed ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
      return fetch(
        `https://restcountries.com/v3.1/name/${data.address.country}`
      );
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Connection failed ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);
    })
    .catch(err => {
      console.log(`Something went wrong! Error: ${err}`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

*/

// BUILDING A SIMPLE PROMISE

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win!');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

Promisifying setTimeout
function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    wait(1);
  })
  .then(() => console.log('3 seconds passed'));

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.error(x));

*/

//////////////////////////////////////////////////

// PROMISIFYING THE GEOLOCATION API

/*

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

function whereAmI() {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Connection failed ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
      return fetch(
        `https://restcountries.com/v3.1/name/${data.address.country}`
      );
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Connection failed ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);
    })
    .catch(err => {
      console.log(`Something went wrong! Error: ${err}`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
}

btn.addEventListener('click', whereAmI);

*/

//////////////////////////////////////////

// CODING CHALLANGE 2

const imgContainer = document.querySelector('.images');

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject('Image not found');
    });
  });
}

function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

let global_img;

createImage('img/img-1.jpg')
  .then(img => {
    global_img = img;
    return wait(2);
  })
  .then(() => {
    console.log('Hide image');
    global_img.style.display = 'none';
    return wait(2);
  })
  .then(() => {
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    console.log('Show next image');
    global_img = img;
    return wait(2);
  })
  .then(() => {
    console.log('Hide image');
    global_img.style.display = 'none';
  })
  .catch(err => console.error(err));
