//Explanation:
// The memoize function takes a function fn as input and returns a memoized version of that function.
//The memoized function enhances performance by caching the results of previous function calls,
//eliminating the need to recompute them for the same input. Inside the memoize function,
//a cache object is created to store the results. The returned memoized function, memoizedFunction,
//is a closure that checks if the arguments passed to it already exist as keys in the cache object.
//If a matching key is found, the cached result is returned. Otherwise,
//the original function fn is invoked with the arguments, and the result is stored in the cache object for future use.
// In summary, the memoize function adds a caching layer to a given function,
//enabling efficient memoization and improving the performance by avoiding redundant computations
//when the function is called with the same arguments multiple times.

function memoize(fn) {
	const cache = {};

	return function memoizedFunction(...args) {
		const key = JSON.stringify(args);
		if (key in cache) {
			return cache[key];
		}
		const result = fn(...args);
		cache[key] = result;
		return result;
	};
}

const sum = memoize(function (a, b) {
	return a + b;
});

const fib = memoize(function (n) {
	if (n <= 1) {
		return 1;
	}
	return fib(n - 1) + fib(n - 2);
});

const factorial = memoize(function (n) {
	if (n <= 1) {
		return 1;
	}
	return factorial(n - 1) * n;
});

console.log(sum(2, 3));
console.log(sum(2, 3));

//Dry run:
//first time check no key exist in cache call the function sum(2,3)
//=> cache["[2,3]"] = 5 ;
//2nd time we have cache["2,3"] = 5 it directly give the value without calling function.
