let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

    // Anonymous function assigned to a variable
    let add = function(a, b) {
      return a + b;
    };
    console.log("The sum of " + num1 + " and " + num2 + " is " + add(num1, num2));