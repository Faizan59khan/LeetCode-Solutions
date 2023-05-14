/*Function Composition:
  f(g(x)) => It means output of g(x) is used as input of fog(x).  
*/

//Traditional Aproach:
const addOneT = (num) => num + 1;
const doubleT = (num) => num * 2;

const output = doubleT(addOneT(2));
console.log(output);

//Alternate Aproach
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((y, f) => f(y), x);
  };
};

const addOne = (num) => num + 1;
const double = (num) => num * 2;
const square = (num) => num ** 2;

const composedFunction = compose([square, double, addOne]);
console.log(composedFunction(2));
