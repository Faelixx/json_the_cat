const request = require('request');
const fs = require('fs');

const processArgs = process.argv;
const url = processArgs[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${url}`, (error, message, body) => {
  const data = JSON.parse(body);
  // console.log(data)
  // console.log(typeof data);
  console.log(data[0].description);
})

