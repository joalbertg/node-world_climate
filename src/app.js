const { argv } = require('./config');
const place = require('./place');
const weather = require('./weather');

//console.log(argv);

const getInfo = async () => {
  try {
    const placeLonLat = await place.getPlaceLonLat(argv.address);
    const resp = await weather.getWeatherLonLat(placeLonLat.lon, placeLonLat.lat);

    return `${placeLonLat.address} weather is ${resp.main.temp} deg`;
  } catch(error) {
    throw new Error(`No precise weather in ${argv.address}`);
  }
}

getInfo()
  .then(console.log)
  .catch(error => console.error(error.message));

