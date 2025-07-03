function createGreeting(name) {
    return function() {
      console.log("Hello, " + name + "!");
    };
  }
  
  // Example usage:
  const greetPrabhu = createGreeting("Prabhu");
  greetPrabhu();  // Output: Hello, Prabhu!
  