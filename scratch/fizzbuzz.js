import matchTools from "../index.js"

const {MATCH, IF} = matchTools

// Create Expressions
const divisibleBy3 = new IF().divisibleBy(3).check
const divisibleBy5 = new IF().divisibleBy(5).check
const divisibleBy3and5 = new IF().divisibleBy(3).divisibleBy(5).check

// Setup Matcher
const fizzBuzzMatch = new MATCH()
    .when(divisibleBy3and5, () => "FizzBuzz")
    .when(divisibleBy3, () => "Fizz")
    .when(divisibleBy5, () => "Buzz")
    .setDefault((v) => v)

// Fizz Buzz
for(let i = 1; i <= 15; i++){
    console.log(fizzBuzzMatch.match(i))
}