"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function renderCountry(data, calssName = "") {
  const html = `
    <article class="country ${calssName}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(2)}M people</p>
              <p class="country__row"><span>🗣️</span>${
                Object.values(data.languages)[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                Object.values(data.currencies)[0].name
              }</p>
            </div>
          </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
}

function renderError(msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
}

function getJSON(url, errorMsg = "Something went wrong!") {
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

/*
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
*/

//////////////////////////////////////////
// ASYNC FUNCTIONS

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );

    if (!resGeo.ok) throw new Error('Problem getting location data...');

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}`
    );
    if (!res.ok) throw new Error('Problem getting country data...');

    const data = await res.json();
    console.log(data[0]);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError('Something went wrong: ' + err.message);

    // Reject promise
    throw err;
  }
};

console.log('1: Will get location');

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
})();
*/

//////////////////////////////////////////
// RUNNING PROMISES IN PARALLEL

/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries("poland", "canada", "japan");
*/

// Promise.rece
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long!"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success!"),
  Promise.reject("ERROR"),
  Promise.resolve("Success!"),
]).then(res => console.log(res));

// Promise.any
Promise.any([
  Promise.resolve("Success!"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success!"),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
