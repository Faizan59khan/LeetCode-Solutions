//1- Solution
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
// var isEmpty = function (obj) {
//   if (Array.isArray(obj)) {
//     return !obj.length;
//   }
//   return !Object.keys(obj).length;
// };

//2 Solution
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  for (const _ in obj) return false;
  return true;
};

//Explanation:

// The for...in loop is used to iterate over the properties of the object. If the loop encounters at least one property,
// false is returned to indicate that the object is not empty.

// If the loop iterates through the entire object without finding any properties, the function returns true to indicate that the object is empty.

// Examples

// Example 1: Checking an empty array
let emptyArray = [];
console.log(isEmpty(emptyArray)); // Output: true

// Example 2: Checking a non-empty array
let nonEmptyArray = [1, 2, 3];
console.log(isEmpty(nonEmptyArray)); // Output: false

// Example 3: Checking an empty object
let emptyObject = {};
console.log(isEmpty(emptyObject)); // Output: true

// Example 4: Checking a non-empty object
let nonEmptyObject = { key: "value" };
console.log(isEmpty(nonEmptyObject)); // Output: false

// Example 5: Checking an array with an empty object
let arrayWithEmptyObject = [{}];
console.log(isEmpty(arrayWithEmptyObject)); // Output: false

// Example 6: Checking an object with an empty array
let objectWithEmptyArray = { key: [] };
console.log(isEmpty(objectWithEmptyArray)); // Output: false

// Example 7: Checking null (should be handled separately as it's not an object or array)
let nullValue = null;
console.log(isEmpty(nullValue)); // Output: true

// Example 8: Checking an array with null
let arrayWithNull = [null];
console.log(isEmpty(arrayWithNull)); // Output: false

// Example 9: Checking an empty string (should be handled separately as it's not an object or array)
let emptyString = "";
console.log(isEmpty(emptyString)); // Output: true
