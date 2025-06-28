function double(x) {
    return x * 2;
  }

  // Function that applies a given function twice
  function applyTwice(func, value) {
    return func(func(value));
  }

  // Example usage
  let result = applyTwice(double, 5); // double(double(5)) = 20

  console.log("Result of applyTwice(double, 5): " + result);
  document.write("Result of applyTwice(double, 5): " + result);