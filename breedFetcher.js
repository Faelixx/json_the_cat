const request = require('request');

const processArgs = process.argv;
const url = processArgs[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${url}`, (error, message, body) => {
  if (!error && message.statusCode === 200) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Please enter a valid cat breed.");
    } else {
      console.log(data[0].description);
    }
  }
  if (error) {
    console.log("Received the following error: ", error);
  }
});

