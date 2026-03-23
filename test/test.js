const myObject = {
  // A property
  name: "Gadget",
  
  // A method that accepts a 'user' parameter
  greet: function(user) {
    return "Hello, " + user + "! My name is " + this.name + ".";
  },
  
  // An alternative, more concise syntax for a method
  farewell(user) {
    return "Goodbye, " + user + ".";
  }
};

// Calling the method and passing an argument (e.g., a string "Alice")
console.log(myObject.greet("Alice"));

// Calling the farewell method
console.log(myObject.farewell("Bob"));
