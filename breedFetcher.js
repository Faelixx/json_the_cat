const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const catUrl = `https://api.thecatapi.com/v1/breeds/search?q=`;
  request(catUrl + breedName, (error, message, body) => {
    if (!error && message.statusCode === 200) {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(("Please enter a valid cat breed."), null);
      } else {
        callback(null, (data[0].description));
      }
    }
    if (error) {
      callback(("Received the following error: ", error), null);
    }
  });
};

module.exports = {
  fetchBreedDescription
};