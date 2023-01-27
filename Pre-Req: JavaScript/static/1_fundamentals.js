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
let message = 'Hello';                                                      // Initialize and assign variable
alert(message);                                                             // Shows variable content as popup
let user = 'Bocchi', hobby = 'guitar', alias = 'guitarhero';                // Assign multiple variables at once

/* Assignment */

// 1. Add two numbers together
console.log(23 + 97);

// 2. Add a sequence of 6 different numbers together
console.log(1 + 2 + 3 + 4 + 5 + 6);

// 3. Print the solution to the following equation:
console.log((4 + 6 + 9) / 77)

// 4. Use variables
let a = 10;
let b = 7 * a;
console.log(b);

// 5. Further practice
let max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);
