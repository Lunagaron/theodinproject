/* Object-Orientated Programming in Javascript
 * Fundamentals Part 5 of the Odin Project - Fundamental Course
 */

/* Out of the eight data types in Javascript, opp is the only one that is not
 * considered as a primitive data type.This is because the coder decides for
 * themselves given the context of their problem what special data should be
 * included within the data type.
 */

// Creating an empty object
let user1 = {
  name: "Bocchi", // by key "name" store value "Bocchi"
  age: 12, // by key "age" store value 12
  "Is part of a band": true, //by custom key in quotation brackets store boolean value true
};

// Fetching property values of an object:
alert(user1.name);
alert(user1.age);

// Deletes a property
delete user1.age;

// Alternative method of object declaration
let user2 = new Object();
user2["name"] = "Hitori Gotoh";
alert(user2["name"]);
delete user2["name"];

// Property value shorthand of declaration
function makeUser(name, age) {
  return {
    name, // can also be name: name,
    age,
  };
}

let user3 = makeUser("Bocchi", 12);

// Printing out properties
for (let key in user3) {
  alert(key); // Prints out keys: name, age
  alert(user[key]); // Prints out values for keys: Bocchi, 12
}
