const axios = require('axios');

const instancePlace = axios.create({
  baseURL: 'https://community-open-weather-map.p.rapidapi.com',
  timeout: 1000,
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': 'd0af94c7b9mshb81c9d56adb1704p13ac04jsndec3af486864'
  }
});

const instanceWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 1000,
});

module.exports = {
  instancePlace,
  instanceWeather
};

