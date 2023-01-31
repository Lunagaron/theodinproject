/* Event Listener for Keystrokes */
document.addEventListener("DOMContentLoaded", () => {
  const textBox = document.querySelector("#textBox");
  const output = document.querySelector("#output");

  textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
  });
});

/* Assingments from The Odin Project */

// Assignment 1: Adds 7 to a number
function addSeven(userNum) {
  userNum = Number(userNum);
  return 7 + userNum;
}

/* Sample test client 
const result = addSeven(5);     
console.log(result);    // Outputs 12
*/

// Assignment 2: Multiplies two numbers together
function multiplies(numOne, numTwo) {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  return numOne * numTwo;
}

/* Sample test client
const result = multiplies(5, 3);
console.log(result); // outputs 15
*/

// Assignment 3: Capitalisation
function capitalization(strCapital) {
  strCapital = String(strCapital);
  let lowerCaseString = strCapital.toLowerCase();
  strCapital =
    lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
  return strCapital;
}

/* Sample test client
const text = capitalization("HELLO THERE LOLOL WWWWWW");
*/

// Assignment 4: Return last letter of a string
function lastLetter(strLastChar) {
  strLastChar = String(strLastChar);
  return strLastChar.charAt(strLastChar.length - 1);
}

/* Sample test client
const string = lastLetter("Hello there Mate!");
console.log(lastLetter);
*/
