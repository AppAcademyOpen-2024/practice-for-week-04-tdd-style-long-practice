// Your code here
const reverseString = require('../problems/reverse-string');
const chai = require('chai');
const { expect } = chai;

describe('Reverse string', () => {
  it('should return the input string reversed', () => {
    const funReverse = reverseString('fun');
    expect(funReverse).to.equal('nuf');
  });

  it('should throw a TypeError if input is not string', () => {
    const errorReverse = () => reverseString([1, 2, 3]);
    expect(errorReverse).to.throw(TypeError, 'Input must be a string');
  });


});
