const test = require("../lib/testing.js");
const squareObj = require("../src/shapes/square.js");

const square = squareObj.square;

const testSquare = function() {
  test.assertEquality("****\n****\n****\n****\n", square(4), 'should give square of given length');
}

testSquare();
