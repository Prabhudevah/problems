function isPrime(number) {
    if (number <= 1) {
      return false; // 0 and 1 are not prime
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false; // Found a factor, not prime
      }
    }
  
    return true; // No factors found, it's prime
  }
  
  console.log("Is Prime?", isPrime(7));   // true
  console.log("Is Prime?", isPrime(10));  // false
  console.log("Is Prime?", isPrime(2));   // true
  