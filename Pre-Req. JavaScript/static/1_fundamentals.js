/* Variables */
/* In Javascript, 'var', 'let', and 'const' declare variables. Capitalisaiton matters, and uppercase are
 *  typically reserved for constants.
 *
 *  Variables declared with 'var' are function-scoped, meaning they are only available within the function
 *  they are declared or globall if outside of any function. This is less preferred to let and const.
 *
 *  Variables declared with 'let' are block-scoped, which means they are only accessible within the block
 *  they are declared within.
 *
 *  Variables declared with 'const' are the same as 'let', except they cannot be reassigned after declaration.
 */
let message = "Hello"; // Initialize and assign variable
//alert(message);                                                           // Shows variable content as popup
let user = "Bocchi",
  hobby = "guitar",
  alias = "guitarhero"; // Assign multiple variables at once

/* Assignment */

// 1. Add two numbers together
console.log(23 + 97);

// 2. Add a sequence of 6 different numbers together
console.log(1 + 2 + 3 + 4 + 5 + 6);

// 3. Print the solution to the following equation:
console.log((4 + 6 + 9) / 77);

// 4. Use variables
let a = 10;
let b = 7 * a;
console.log(b);

// 5. Further practice
let max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);

/* Strings */
/* Quotation marks are very important for wrapping strings. Single and double quotation marks are suitable
 *  candidates to wrap strings inside. However a mixture will not work unless a special escape character (\)
 *  is added before the quotation mark, i.e. const bigmouth.
 */
const sgl = "Single quotation marks";
const dbl = "Double quotation marks";
const sglDbl = 'Would you eat a "fish supper" tonight?';
const bigmouth = "I've got no right to eat this big fish!";

/* To concatenate strings, variables needed to be wrapped inside a special set of symbols ${} with BACKTICKS (`)
 *  It is also possible to use "+" to concatenate strings.
 *  Javascript respects multi-line strings. A literal line break is represented as normal.
 */
const greeting = `Hello there`;
const name = "Bocchi";
const greetingPerson = `Hello there, ${name}`;
console.log(greetingPerson);
console.log(`${greeting}, ${name}`);
console.log(greeting + ", " + name);

/* Numbers
 *  Strings and numbers can also concanate together without issue. To make a string into a number, use number();
 */
let myString = "123";
const myNum = Number(myString);
console.log(myNum);

/* Conditionals
 *  The switch statement block can check the expression for the correct case output, return default if none match.
 */
const today = new Date().getDay();

switch (today) {
  case 0:
    console.log("It's Sunday today!");
    break;

  case 6:
    console.log("It's Saturday today!");
    break;

  default:
    console.log("It's a horrible day today :(");
}
