function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  let n = 11;
  console.log("Sum of first", n, "natural numbers:", sumOfNaturalNumbers(n));
  