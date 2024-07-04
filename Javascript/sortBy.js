/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((b, a) => fn(b) - fn(a));
};

// The `sort` method in JavaScript sorts the elements of an array in place and returns the sorted array.
// The default sort order is according to string Unicode code points. However, we can provide a compare
// function to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:

// A negative value indicates that a should come before b.
// A positive value indicates that a should come after b.
// Zero or NaN indicates that a and b are considered equal.

//Example 1
const arr = [1, 2, 3, 4, 5];
const sortedArr = sortBy(arr, (x) => x % 2);
// This will sort the array by the result of the function fn (x => x % 2),
// which means it will place even numbers before odd numbers.
console.log(sortedArr); // Output might be: [2, 4, 1, 3, 5]

//Example 2
const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 22 },
  { name: 'Mary', age: 30 },
  { name: 'Mike', age: 28 },
];

const sortedPeople = sortBy(people, (person) => person.age);
// This will sort the array of objects by the age property in descending order.
console.log(sortedPeople);
/* Output might be:
[
    { name: 'Mary', age: 30 },
    { name: 'Mike', age: 28 },
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 }
]
*/
