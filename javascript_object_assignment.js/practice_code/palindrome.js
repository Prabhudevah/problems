let str = "34954";
let rev = "";

for (let i = 0; i <= str.length - 1; i++) {
    rev += str[str.length - 1 - i];  
}

if (rev === str) {
    console.log("The given number is a palindrome");
} else {
    console.log("The number is not a palindrome");
}



