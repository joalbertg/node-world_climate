const { instanceWeather: axios } = require('../config');

let params = {
  appid: '<api-key>',
  units: 'metric'
}

const getWeatherLonLat = async (lon, lat) => {
  params = {...params, lon, lat };
  const resp = await axios.get('/weather', { params });

  if (resp.data.cod != 200)
    throw new Error(`Coordinates lon: ${lon} lat: ${lat} not found`);

  return resp.data;
}

module.exports = {
  getWeatherLonLat
};

