const request = require('request');
const fs = require('fs');

const processArgs = process.argv;
const url = processArgs[2];

request(url, (error, message, body) => {
  const data = JSON.parse(body);
  // console.log(data)
  // console.log(typeof data);
})

