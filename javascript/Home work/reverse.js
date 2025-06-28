function reverse(number) {
  result=0;
  while (number > 0) {
    let r= number % 10; // Get the last digit
    result = result * 10 + r; // Build the reversed number
    number= Math.floor(number/10);
  }
  return result;
}
console.log("Reversed Number:", reverse(12895)); 