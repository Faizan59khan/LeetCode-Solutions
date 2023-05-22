//Related Article: https://medium.com/swlh/set-a-time-limit-on-async-actions-in-javascript-567d7ca018c2
var timeLimit = function (fn, t) {
  return async function (...args) {
    const promise = fn(...args);
    const timeout = new Promise((res, rej) => {
      setTimeout(() => rej("Time Limit Exceeded"), t);
    });
    const response = await Promise.race([promise, timeout]);
    return response;
  };
};

//Scenario 1:
const fn1 = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const inputs1 = [5];
const t1 = 50;

const timeLimitedFn = timeLimit(fn1, t1);

timeLimitedFn(...inputs1)
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//Scenario 2:
const fn2 = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const inputs2 = [5];
const t2 = 150;

const timeLimitedFn2 = timeLimit(fn2, t2);

timeLimitedFn2(...inputs2)
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
