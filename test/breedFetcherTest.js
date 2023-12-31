const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expecedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expecedDesc, desc.trim());

      done();
    });
  });
});

describe('fetchBreedDescription', () => {
  it('returns an error for an invalid breed, via callback', (done) => {
    fetchBreedDescription('SiberAsdian', (err, desc) => {
      assert.equal(desc, null);

      const expecedErr = "Please enter a valid cat breed.";

      assert.equal(expecedErr, err);

      done();
    });
  });
});