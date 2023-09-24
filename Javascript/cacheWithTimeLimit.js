// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

var TimeLimitedCache = function () {
  this.cache = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  if (this.cache[key] && this.cache[key].timer) {
    clearTimeout(this.cache[key].timer);
    this.cache[key].value = value;
    this.cache[key].timer = setTimeout(() => {
      delete this.cache[key];
    }, duration);
    return true;
  } else {
    this.cache[key] = {
      value: value,
      timer: setTimeout(() => {
        delete this.cache[key];
      }, duration),
    };
    return false;
  }
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache[key] && this.cache[key].timer) {
    return this.cache[key].value;
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;
  for (const key in this.cache) {
    if (this.cache[key].timer) {
      count++;
    }
  }
  return count;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
setTimeout(() => {
  console.log(timeLimitedCache.get(1));
}, 1000);

//Explanation
// 1) In this example, we create a new instance of the TimeLimitedCache class called timeLimitedCache.
// We first call the set method on timeLimitedCache with the parameters 1 (key), 42 (value), and 1000 (duration in milliseconds).
// This sets a key-value pair in the cache with a duration of 1000 milliseconds. Since there is no existing key with the same value,
// the set method returns false.
// 2) Next, we call the get method on timeLimitedCache with the parameter 1.
// This retrieves the value associated with key 1, which is 42. Therefore, the get method returns 42.
// 3) We then call the count method on timeLimitedCache. Since there is one unexpired key in the cache, the count method returns 1.
// After that, we use setTimeout to delay the execution of the next code block by 1000 milliseconds.
// Inside the delayed code block, we call the get method on timeLimitedCache again with the parameter 1.
// However, since the duration of the key 1 has elapsed (1000 milliseconds have passed), the key is considered expired.
// Therefore, the get method returns -1.
// So, the final output of the example is:
// Copy

//Output
// false
// 42
// 1
// -1
