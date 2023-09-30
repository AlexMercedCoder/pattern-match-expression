import MATCH from '../match.js';
import IF from '../if.js';

function assert(condition, message) {
  if (!condition) {
    console.error(`Assertion Error: ${message}`);
  }
}

function testMATCH() {
  const matchInstance = new MATCH();
  
  // Test match() method
  matchInstance.when((value) => value === 1, () => 'One');
  matchInstance.when((value) => value === 2, () => 'Two');
  
  let result = matchInstance.match(1);
  assert(result === 'One', 'match() test failed');
  
  result = matchInstance.match(2);
  assert(result === 'Two', 'match() test failed');
  
  // Test matchAll() method
  const matchAllResult = matchInstance.matchAll(1);
  assert(Array.isArray(matchAllResult), 'matchAll() test failed');
  assert(matchAllResult.length === 1, 'matchAll() test failed');
  assert(matchAllResult[0] === 'One', 'matchAll() test failed');
  
  // Test when() method
  matchInstance.when((value) => value === 3, () => 'Three');
  
  result = matchInstance.match(3);
  assert(result === 'Three', 'when() test failed');
  
  // Test invalid arguments for when() method
  try {
    matchInstance.when('invalid', () => 'Invalid');
    assert(false, 'when() should throw an error for invalid argument');
  } catch (error) {
    console.log(error)
    assert(error === 'first arg must be function or IF object', 'when() error message mismatch');
  }
  
  try {
    matchInstance.when((value) => value === 4, 'Invalid');
    assert(false, 'when() should throw an error for invalid argument');
  } catch (error) {
    console.log(error)
    assert(error === 'arg2 must be a Function', 'when() error message mismatch');
  }
  
  // Add more tests for other methods as needed
}

// Run the tests
testMATCH();