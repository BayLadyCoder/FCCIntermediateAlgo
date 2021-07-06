// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return the string Bob.
// bob.getLastName() should return the string Ross.
// bob.getFullName() should return the string Bob Ross.
// bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
// bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
// bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
// bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").

var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName, lastName;

  // Get
  this.getFullName = function () {
    return firstName + " " + lastName;
  };
  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };

  // Set
  this.setFirstName = function (fName) {
    firstName = fName;
  };
  this.setLastName = function (lName) {
    lastName = lName;
  };
  this.setFullName = function (firstAndLast) {
    const name = firstAndLast.split(" ");
    firstName = name[0];
    lastName = name[1];
  };

  this.setFullName(firstAndLast);
};

var bob = new Person("Bob Ross");
bob.getFullName();
bob.setFirstName("Haskell");
console.log(bob.getFullName());
