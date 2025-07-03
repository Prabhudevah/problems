function countDown(n) {
    if (n < 1) {
      return; // Base case: stop when n is less than 1
    }
    console.log(n);
    countDown(n - 1); // Recursive call
  }
  
  // Example usage:
  countDown(5);
  