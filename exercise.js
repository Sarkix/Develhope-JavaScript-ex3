// const sum = function (a, b) {
//   return a + b;
// };

const sum = (a, b) => a + b; // No hace falta el return porque sólo hay una operación. Eso pasa con todas las demás también.

// const subtract = function (a, b) {
//   return a - b;
// };

const subtract = (a, b) => a - b;

// const multiply = function (a, b) {
//   return a * b;
// };

const multiply = (a, b) => a * b;

// const divide = function (a, b) {
//   return a / b;
// };

const divide = (a, b) => a / b;

// const log = function (value) {
//   console.log(value);
// };

const log = (value) => console.log(value);

const step1 = sum(2, 4);
const step2 = sum(5, 2);

const step3 = multiply(step1, step2);
const step4 = subtract(step3, 2);
const result = divide(step4, 5);

log(result);
