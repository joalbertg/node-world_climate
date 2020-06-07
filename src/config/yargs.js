const { argv } = require('yargs')
  .options({
    address: {
    alias: 'a',
    desc: 'City address for weather',
    demand: true
  }})
  .help();

module.exports = {
  argv
};

