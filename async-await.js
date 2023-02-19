const API_KEY = '991f626650507e6605c2ca33f8edc191';

// asynchronous function
// fetch('https://restcountries.com/v3.1/all')
//   .then((response) => {
//     return response.json();
//   })
//   .then((countries) => {
//     console.log(countries);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// Employ Async and Await
// async can only used in front of a function
// using async without await has no meaning 
// await cannot be used without async

const workPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ msg: 'Work is Done' });
  }, 5000)
})

// Creating a function which is gonna have an asynchronous operation in it.
async function getCountries() {
  try {
    // asynchronous operation - chaining using await
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json(); // not executed until above promise is resolved
    // console.log(countries); // not executed until above promise is resolved
    // using the same asyn await concept fetch the weather data for 3 countries
    countries.slice(0, 3).forEach(async ({ name: { common }, latlng }) => {
      try {
        // using the latlng get the weather details for each
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${API_KEY}`);
        // Do like line 44
        // const weatherData = await weatherResponse.json();
        // const { main: { temp, temp_max, temp_min } } = weatherData;
        const { main: { temp, temp_max, temp_min } } = await weatherResponse.json();
        console.log(common);
        console.log('Lattitude:', latlng[0]);
        console.log('Longitude:', latlng[1]);
        console.log('Weather');
        console.log('Temp:', temp);
        console.log('Max Temp:', temp_max);
        console.log('Min Temp:', temp_min);
        console.log('####################################');
      } catch (errRes) {
        console.log('Weather Error', errRes);
      }
    })

  } catch (errRes) {
    console.log('Unable to Fetch:', errRes);
  }

  // just for example on return type , but usually we don't really on this value
  return [{ name: 'Sanjay' }];
}

getCountries();
