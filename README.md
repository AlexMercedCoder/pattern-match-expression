# pattern-match-expression
pattern match expression library for javascript

## IF Class Documentation
The IF class is a utility class designed to facilitate conditional checks on various types of values, including data types, equality, divisibility, custom conditions, object matching, and array matching. It provides a fluent interface, allowing you to chain multiple checks together for a single value.

### Usage
To use the IF class, you must first create an instance of it:

```js
import matchTools from 'pattern-match-expression';
const {MATCH, IF} = matchTools;

const myCheck = new IF();
You can then chain multiple checks together to evaluate a value against various conditions:

javascript
Copy code
const valueToCheck = 42;

const isEven = myCheck
  .type('number')
  .divisibleBy(2)
  .check(valueToCheck);

console.log(`Is ${valueToCheck} an even number? ${isEven}`); // Should output: "Is 42 an even number? true"
```
### Methods

#### type(t) 

Adds a check to determine if the value is of a specific data type.

Parameters:
- t (string): The expected data type (e.g., 'number', 'string', 'object', 'boolean', 'function', 'undefined', 'symbol').

#### equals(v)

Adds a check to determine if the value is equal to a specified value.

Parameters:
- v (any): The value to compare against.

#### divisibleBy(v)

Adds a check to determine if the value is divisible by a specified number.

Parameters:
- v (number): The number by which the value should be divisible.
#### instanceOf(type)
Adds a check to determine if the value is an instance of a specified class or constructor function.

Parameters:
- type (function): The constructor function or class to check against.

#### custom(cb)
Adds a custom check using a provided callback function.

Parameters:
- cb (function): A custom callback function that returns a boolean value based on your custom condition. The callback function should take one argument, which is the value being checked.

#### objMatch(shape)
Adds a check to determine if an object has the same properties and values as a specified shape object.

Parameters:
- shape (object): An object representing the shape to compare against. The properties of this object define the expected properties in the value, and their values define the expected values. Use "!check" as a value to indicate that the property must exist but its value is not checked.

#### arrMatch(arr)
Adds a check to determine if an array has the same number of elements and values in the same indexes as a specified array.

Parameters:
- arr (array): An array to compare against. This method checks both the length and the values at corresponding indexes. Use "!check" as a value in the array to indicate that the value at that index should exist but is not checked.

#### regex(pattern) <a name="regex-pattern"></a>
Adds a check to determine if the value matches a specified regular expression pattern.

Parameters:
- pattern (RegExp): A regular expression pattern to match against the value.

Returns:
The IF instance, allowing for method chaining.

Throws:
An error if the provided pattern is not an instance of RegExp.

Example Usage:
```js
import matchTools from 'pattern-match-expression';
const {MATCH, IF} = matchTools;

const myCheck = new IF();

const valueToCheck = 'Hello, World!';
const regexPattern = /^[A-Za-z\s]+$/; // Matches alphabetic characters and spaces

const isAlphabetic = myCheck
  .regex(regexPattern)
  .check(valueToCheck);

console.log(`Does '${valueToCheck}' contain only alphabetic characters and spaces? ${isAlphabetic}`); // Should output: "Does 'Hello, World!' contain only alphabetic characters and spaces? true"
```

You can use the regex method to check if a value matches a specified regular expression pattern, enabling more advanced conditional checks in your application.

#### check(value) <a name="check-value"></a>
Performs all the added checks on the provided value.

Parameters:
- value (any): The value to be checked against the specified conditions.

Returns:
true if all checks pass; false if any of the checks fail.

Example Usage
Here's an example of how to use the IF class to perform various checks:

```js
import matchTools from 'pattern-match-expression';
const {MATCH, IF} = matchTools;

const myCheck = new IF();

const valueToCheck = 42;

const result = myCheck
  .type('number')
  .divisibleBy(2)
  .equals(42)
  .check(valueToCheck);

console.log(`Is ${valueToCheck} a specific even number? ${result}`); // Should output: "Is 42 a specific even number? true"
```

You can chain multiple checks together as needed to create complex conditional logic for your applications.

## MATCH class documentation

The MATCH class is a versatile utility class that allows you to define patterns and corresponding actions. You can use it to find the first pattern that matches a given value and execute the associated action, or match against all defined patterns and collect the results in an array. The MATCH class provides a fluent interface for registering patterns and actions.

### Usage
To use the MATCH class, you must first create an instance of it:

```js
import matchTools from 'pattern-match-expression';
const {MATCH, IF} = matchTools;

const myMatcher = new MATCH();
```

You can then register patterns and their corresponding actions using the when method and perform matches using the match and matchAll methods:

```js
const valueToMatch = 42;

const result = myMatcher
  .when((value) => value === 42, () => "Matched the value 42")
  .when((value) => value > 50, () => "Greater than 50")
  .when((value) => value < 10, () => "Less than 10")
  .match(valueToMatch);

console.log(result); // Should output: "Matched the value 42"
```

### Methods
#### match(value) <a name="match-value"></a>
Finds the first pattern that matches the provided value and returns the result of the associated action.

Parameters:
- value (any): The value to be matched against the registered patterns.

Returns:
The result of the action associated with the first matching pattern.

#### matchAll(value)
Matches the provided value against all registered patterns and returns an array of results from the associated actions.

Parameters:
- value (any): The value to be matched against the registered patterns.

Returns:
An array containing the results of all actions associated with matching patterns.

#### when(pattern, action)
Registers a pattern and its associated action for later matching.

Parameters:
- pattern (function or IF): A function or an instance of the IF class defining the pattern to match against the value. If using the IF class, the pattern is defined using its chainable methods (e.g., type, equals, divisibleBy).
- action (function): A function that specifies the action to be executed when the pattern matches. The action function should take one argument, which is the value being matched.

Returns:
The MATCH instance, allowing for method chaining to register multiple patterns.

Example Usage
Here's an example of how to use the MATCH class to match values against various patterns:

```js
import matchTools from 'pattern-match-expression';
const {MATCH, IF} = matchTools;

const myMatcher = new MATCH();

const valueToMatch = 42;

const result = myMatcher
  .when((value) => value === 42, () => "Matched the value 42")
  .when((value) => value > 50, () => "Greater than 50")
  .when((value) => value < 10, () => "Less than 10")
  .match(valueToMatch);

console.log(result); // Should output: "Matched the value 42"
```

You can register multiple patterns and their associated actions using the when method and then use match or matchAll to find matches and execute actions accordingly.

#### setDefault(action: Function): MATCH
The setDefault method allows you to set a default action that will be executed when none of the registered patterns in the MATCH instance matches the input value.

Parameters

- action (Function): A JavaScript function that represents the action to be performed when none of the registered patterns match. This function can accept any number of arguments and perform any desired logic.

Returns
- MATCH: The MATCH instance itself, which allows for method chaining.

Throws
- Throws an error if the action argument is not a valid JavaScript function.

```js
Copy code
const matchInstance = new MATCH();

// Register patterns
matchInstance.when((value) => value === 1, () => 'One');
matchInstance.when((value) => value === 2, () => 'Two');

// Set a default action
matchInstance.setDefault(() => 'No match found');

// Use match()
const result1 = matchInstance.match(3); // Returns 'No match found'

// Use matchAll()
const result2 = matchInstance.matchAll(4); // Returns ['No match found']
```

In this example, the setDefault method is used to define a default action that gets executed when none of the registered patterns match the input value. The setDefault method returns the MATCH instance, allowing you to chain it with other methods.

Note that the setDefault method throws an error if the provided action argument is not a valid JavaScript function.

## Using MATCH with IF
You can enhance the flexibility of the MATCH class by using it in conjunction with instances of the IF class. This allows you to define complex patterns using the chainable methods of IF and then register these patterns with the MATCH class for matching against values. Here's how you can use MATCH with IF:

Create an instance of MATCH:

```js
import matchTools from 'pattern-match-expression';
const {MATCH, IF} = matchTools;

const myMatcher = new MATCH();
```

Create an instance of IF and define your patterns using its chainable methods. For example, let's define two patterns using IF:

```js
import matchTools from 'pattern-match-expression';
const {MATCH, IF} = matchTools;

const pattern1 = new IF()
  .type('number')
  .divisibleBy(2);

const pattern2 = new IF()
  .type('string')
  .equals('OpenAI');
```

Register patterns and actions with the MATCH instance using the when method. You can use the check method of the IF instance to get the pattern's checking function.
```javascript
myMatcher
  .when(pattern1.check, (value) => `Pattern 1 matched for ${value}`)
  .when(pattern2.check, (value) => `Pattern 2 matched for ${value}`);
```
Match values against the registered patterns using the match or matchAll methods:

```javascript
const value1 = 42;
const value2 = 'OpenAI';

const result1 = myMatcher.match(value1);
const result2 = myMatcher.match(value2);

console.log(result1); // Should output: "Pattern 1 matched for 42"
console.log(result2); // Should output: "Pattern 2 matched for OpenAI"
```

## Fizz Buzz Code Example

```js

import matchTools from "pattern-match-expression"

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

```

## EJS Parser (Code Example)

```js
import matchTools from "pattern-match-expression"

const {MATCH, IF} = matchTools

// Create Expressions
const isPlaceholder = new IF().regex(/<%=([\s\S]+?)%>/).check;

// Setup Matcher
const ejsParser = new MATCH()
    .when(isPlaceholder, (value) => {
        // Extract the placeholder expression from the matched string
        const match = /<%=([\s\S]+?)%>/.exec(value);
        if (match) {
            const expression = match[1];
            
            // Return a function that evaluates the expression within the provided data object
            return (data) => eval(expression);
        }
        
        return value;
    })
    .setDefault((v) => v);

// Sample EJS template
const template = "Hello, <%= name %>! Today is <%= day %>.";

// Data object with values to replace placeholders
const data = {
    name: "John",
    day: "Monday"
};

// Parse and render the EJS template
const renderedTemplate = template.replace(/<%=([\s\S]+?)%>/g, (match, expression) => {
    const renderFunc = ejsParser.match(match);
    if (typeof renderFunc === 'function') {
        return renderFunc(data);
    }
    return match;
});

console.log(renderedTemplate);
```

By combining the power of MATCH and IF, you can create intricate matching logic based on the conditions defined in your IF instances and execute actions when patterns are successfully matched. This approach provides a versatile way to handle complex conditional scenarios in your applications.