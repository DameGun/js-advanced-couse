// Variant 3


// Only with var it will not cause error

// undefined
console.log(hoistedVar);

var hoistedVar = "How did you do that?";

// Also var has a functional visibility
// it means that if i call 'hoistedVar' inside function below
// i will the value it because i declare variable in global scope.
// But if i declare variable with the same name inside this function,
// the first one will be undefined when attempting to use it

function callHoistedVar() {
    // undefined
    console.log(hoistedVar);

    var hoistedVar = 15;

    console.log(hoistedVar);
}

callHoistedVar();


// For variables decalared with 'let' or 'var' we might no set the initial value
// And this variables will be undefined until we set the value

let overridenVariable;

// undefined
console.log(overridenVariable);

overridenVariable = 15;

// 15
console.log(overridenVariable);


// And the last one is 'const' which require developer to explicitly set initial values
// Beside this, we are not allow to override variable inside declared with 'const'
// it works only for primitive values

const array = [];
array.push(2, 5, 0, 6);

const primitiveVariable = 25;

// And as i said before, line below will cause an error
// primitiveVariable = 15