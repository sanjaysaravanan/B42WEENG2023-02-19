// // Create Obj which is capable of making an API Call
// const request = new XMLHttpRequest();

// // Open the connect to the API with HTTP method & URL
// request.open("GET", "https://restcountries.com/v3.1/all", true);

// // Send the Request to the Server 
// request.send(null);

// // login api
// // request.send({ email: 'sanjay@gmail.com', password: 'xxxxxxx' });

// // Parse the Text Passed on from the server
// request.onload = function () {
//   var response = JSON.parse(request.responseText);
//   console.log('Success', response);
// }

// request.onerror = function () {
//   console.log('Facling some try later');
// }
// Openweather API key
const API_KEY = '991f626650507e6605c2ca33f8edc191';

fetch('https://restcountries.com/v3.1/all')
  .then((response) => {
    console.log(response);
    // employ chaining
    // console.log(response.json());
    // return the promise which contains the desired data
    return response.json();
  })
  .then((countries) => {
    console.log(countries);
    // countries --> print all the lat and long in below format
    // Iterate and Print it
    // India
    // Lattitude: 9.0
    // Longitude: 8.0
    // ####################################
    // Singapore
    // Lattitude: 9.0
    // Longitude: 8.0

    // countries --> array of country data 
    countries.slice(0, 3).forEach(({ name: { common }, latlng }) => {

      // using the latlng get the weather details for each
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${API_KEY}`)
        .then((response) => {
          return response.json();
        })
        .then(({ main: { temp, temp_max, temp_min } }) => {
          console.log(common);
          console.log('Lattitude:', latlng[0]);
          console.log('Longitude:', latlng[1]);
          console.log('Weather');
          console.log('Temp:', temp);
          console.log('Max Temp:', temp_max);
          console.log('Min Temp:', temp_min);
          console.log('####################################');
        })
        .catch((errRes) => {
          console.log('Unable to fetch weather Data', errRes)
        })
    });
  })
  .catch((err) => {
    console.log(err)
  });
