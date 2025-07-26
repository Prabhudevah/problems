 // Variables to store operands and the selected operation
    let firstOperand = '';
    let secondOperand = '';
    let currentOperation = 0;
    let shouldResetScreen = false;

    const display = document.getElementById('display');

    // Function to append number to display
    function appendNumber(number) {
      if (shouldResetScreen) {
        display.value = '';
        shouldResetScreen = false;
      }
      display.value += number;
    }

    // Function to set operation
    function setOperation(operator) {
      if (display.value === '') return;
      firstOperand = display.value;
      currentOperation = operator;
      shouldResetScreen = true;
    }

    // Function to clear display and reset variables
    function clearDisplay() {
      display.value = '';
      firstOperand = '';
      secondOperand = '';
      currentOperation = null;
      shouldResetScreen = false;
    }

    // Function to perform calculation
    function calculate() {
      if (currentOperation === null || shouldResetScreen) return;
      secondOperand = display.value;
      let result;

      const a = parseFloat(firstOperand);
      const b = parseFloat(secondOperand);

      if (isNaN(a) || isNaN(b)) return;

      switch (currentOperation) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          if (b === 0) {
            alert("Can't divide by 0!");
            return;
          }
          result = a / b;
          break;
        default:
          return;
      }

      display.value = result;
      currentOperation = null;
    }
 
