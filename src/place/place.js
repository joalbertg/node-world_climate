const { instancePlace: axios } = require('../config');

// error
// {
//    "cod": "404",
//    "message": "city not found"
// }
//
// ok
//{
//  coord: { lon: -74.01, lat: 40.71 },
//  weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' } ],
//  base: 'stations',
//  main: {
//    temp: 299.47,
//    feels_like: 293.37,
//    temp_min: 298.15,
//    temp_max: 300.37,
//    pressure: 1007,
//    humidity: 34
//  },
//  visibility: 16093,
//  wind: { speed: 8.48, deg: 332 },
//  clouds: { all: 1 },
//  dt: 1591492866,
//  sys: {
//    type: 1,
//    id: 4610,
//    country: 'US',
//    sunrise: 1591435523,
//    sunset: 1591489473
//  },
//  timezone: -14400,
//  id: 5128581,
//  name: 'New York',
//  cod: 200
//}

const getPlaceLonLat = async address => {
  const resp = await axios.get('/weather', {
    params: {
      q: address
    }
  });

  if (resp.data.cod != 200) {
    throw new Error(`No results for this address ${address}`);
  }

  const { lon, lat } = resp.data.coord;
  return {
    address: resp.data.name,
    lon,
    lat
  };
}

module.exports = {
  getPlaceLonLat
};

