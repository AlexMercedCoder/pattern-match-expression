import matchTools from "../index.js"

const {MATCH, IF} = matchTools

const checkNumber = new IF()

const myMatcher = new MATCH();

const pattern1 = new IF()
  .type('number')
  .divisibleBy(2);

const pattern2 = new IF()
  .type('string')
  .equals('OpenAI');

myMatcher
  .when(pattern1.check, (value) => `Pattern 1 matched for ${value}`)
  .when(pattern2.check, (value) => `Pattern 2 matched for ${value}`);

  const value1 = 42;
  const value2 = 'OpenAI';
  
  const result1 = myMatcher.match(value1);
  const result2 = myMatcher.match(value2);
  
  console.log(result1); // Should output: "Pattern 1 matched for 42"
  console.log(result2); // Should output: "Pattern 2 matched for OpenAI"