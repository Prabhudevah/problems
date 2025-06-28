function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }
  

  let num = 1234567891011;
  console.log("Sum of digits of", num, "is:", sumOfDigits(num));
  