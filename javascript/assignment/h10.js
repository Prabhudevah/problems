const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
function operate(a, b, operation) {
  return operation(a, b);
}

// Example usage
let result1 = operate(5, 3, add);       // 5 + 3 = 8
let result2 = operate(5, 3, multiply);  // 5 * 3 = 15

console.log("Result of operate(5, 3, add): " + result1);
console.log("Result of operate(5, 3, multiply): " + result2);

document.write("Result of operate(5, 3, add): " + result1 + "<br>");
document.write("Result of operate(5, 3, multiply): " + result2);