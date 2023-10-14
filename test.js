import { addNumber } from "./counter.js";

function testAddNumber() {
  const result = addNumber(4, 10);
  const expected = 14;
  if (result !== expected) {
    throw new Error(
      `testAddNumber failed: expected ${expected}, got ${result}`,
    );
  } else {
    console.info('testAddNumber PASSED');
  }
}

testAddNumber();