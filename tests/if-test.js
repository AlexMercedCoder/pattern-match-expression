import IF from "../if.js";

function assert(condition, message) {
  if (!condition) {
    console.error(`Assertion Error: ${message}`);
  }
}

function testIF() {
  let ifInstance = new IF();

  // Test type() method
  assert(ifInstance.type('string').check('Hello'), 'type() check failed');
  assert(!ifInstance.type('number').check('Hello'), 'type() check failed');

  ifInstance = new IF();

  // Test equals() method
  assert(ifInstance.equals(42).check(42), 'equals() check failed');
  assert(!ifInstance.equals(42).check(23), 'equals() check failed');

  ifInstance = new IF();

  // Test divisibleBy() method
  assert(ifInstance.divisibleBy(2).check(10), 'divisibleBy() check failed');
  assert(!ifInstance.divisibleBy(3).check(10), 'divisibleBy() check failed');

  ifInstance = new IF();

  // Test instanceOf() method
  assert(ifInstance.instanceOf(Array).check([]), 'instanceOf() check failed');
  assert(!ifInstance.instanceOf(Array).check({}), 'instanceOf() check failed');

}

// Run the tests
testIF();