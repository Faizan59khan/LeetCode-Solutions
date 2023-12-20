/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
	let res = [];
	let index = 0;
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) {
			res[index++] = arr[i];
		}
	}
	return res;
};

//filter function: It iterates through an array and filters its elements based on a provided callback function

//Examples:

//1) Function to filter even numbers
function isEven(num) {
	return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filter(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//2) Function to filter strings longer than a given length
function filterLongStrings(str, maxLength) {
	return str.length > maxLength;
}

const words = ["apple", "banana", "orange", "grape", "kiwi"];

const longWords = filter(words, (str) => filterLongStrings(str, 5));
console.log(longWords); // Output: ["banana", "orange"]
