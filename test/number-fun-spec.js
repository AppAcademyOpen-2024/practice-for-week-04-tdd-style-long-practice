// Your code here
const { returnsThree, reciprocal } = require('../problems/number-fun');
const chai = require('chai');
const { expect } = chai;

describe('Returns three', () => {
  it('should return the number 3', () => {
    const three = returnsThree();
    expect(three).to.equal(3);
  });
});

describe('Reciprocal', () => {
  context('when input is valid', () => {
    it('should return the reciprocal of an input number', () => {
      const four = reciprocal(4);
      expect(four).to.equal(0.25);

      const nine = reciprocal(9);
      expect(nine).to.equal(0.1111111111111111);
    });
  });

  context('when input is not valid', () => {
    it('should throw a TypeError if input is not a number', () => {
      const str = () => reciprocal('string');
      expect(str).to.throw(TypeError, 'Input must be a number');
    });

    it('should throw a TypeError if input is less than 1 or greater than 1,000,000', () => {
      const lessThan = () => reciprocal(0.2);
      expect(lessThan).to.throw(TypeError, 'Input must be between 1 and 1,000,000');

      const moreThan = () => reciprocal(200000000);
      expect(moreThan).to.throw(TypeError, 'Input must be between 1 and 1,000,000');
    });
  });
});
