const counter = (function () {
    let count = 2; // private variable
    return function () {
      console.log(`Current count: ${count}`);
      return count++;
    };
  })();
  
  counter(); 
  counter(); 