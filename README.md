# World Climate

- [rapidapi][rapidapi]
- [open weather map][open_weather_map]

[open_weather_map]: https://openweathermap.org/
[rapidapi]: https://rapidapi.com/community/api/open-weather-map/endpoints

### Install

Without packages
```shell
docker-compose run app yarn add yargs axios
```

With `package.json`
```shell
docker-compose run app yarn
```

### Structure

> run `tree -I "node_modules"`
```shell
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package.json
├── src
│   ├── app.js
│   ├── config
│   │   ├── axios.js
│   │   ├── index.js
│   │   └── yargs.js
│   ├── helpers
│   ├── place
│   │   ├── index.js
│   │   └── place.js
│   └── weather
│       ├── index.js
│       └── weather.js
└── yarn.lock

5 directories, 13 files
```

> run `docker-compose run app node src/app --address "Mexico City"`

**Output:**
`Mexico City weather is 20 deg`

