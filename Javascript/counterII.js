var createCounter = function (init) {
	const value = init;
	const increment = () => {
		init += 1;
		return init;
	};
	const decrement = () => {
		init -= 1;
		return init;
	};
	const reset = () => {
		init = value;
		return init;
	};
	return { increment, decrement, reset };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

// This piece of code demonstrates the concept of closures and encapsulation in JavaScript.
//Closures: The inc,dec , res function have access the init and value even after the outer has completed.
//Encapsulation: Binding related funcionalities together and hides init and value to access outside world
//they can only b accessible through inc, dec, res
