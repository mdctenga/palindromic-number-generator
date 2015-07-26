var chai = require('chai');
var expect = chai.expect;
var  palindromeNumberGenerator = require('../index.js');

describe('palindromeNumberGenerator', function () {
  it('should be a function', function () {
    expect(palindromeNumberGenerator).to.be.a('function');
  });
});
