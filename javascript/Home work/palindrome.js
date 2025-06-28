function isPalindrome(number) {
    let original = number;
    let reversed = 0;
  
    while (number > 0) {
      let r = number % 10;
      reversed = reversed * 10 + r;
      number = Math.floor(number / 10);
    }
  
    return original === reversed;
  }
  
  console.log("Is Palindrome?", isPalindrome(121));   // true
  console.log("Is Palindrome?", isPalindrome(123));   // false
  console.log("Is Palindrome?", isPalindrome(12321)); // true
  