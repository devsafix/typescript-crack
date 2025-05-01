{
  // Learning functions in TypeScript

  // Normal function definition
  function add(a: number, b: number): number {
    return a + b; // Adds two numbers and returns the result
  }

  // Correct usage: Passes two numbers as arguments
  add(1, 2); // Result: 3

  // Uncommenting the following line will cause an error because 'true' is not a number
  // add(1, true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

  // Arrow function definition
  const addArrow = (a: number, b: number = 10): number => a + b;
  // The default value for 'b' is 10 if not provided

  addArrow(1); // Result: 11 (since b defaults to 10)
  addArrow(1, 2); // Result: 3 (since b is explicitly set to 2)

  // Object with a method (function as a property of an object)
  const obj = {
    name: "John", // Regular property
    balance: 1000, // Regular property
    // Method definition: This method can access the object's properties using 'this'
    addBalance: function (balance: number): string {
      return `My new balance is ${this.balance + balance}`;
    },
  };

  // Calling the method on the object
  console.log(obj.addBalance(100)); // Result: "My new balance is 1100"

  // Uncommenting the following line will cause an error, as the method expects only one argument
  // console.log(obj.addBalance(100, 200)); // Error: Expected 1 arguments, but got 2.

  // Using map function to manipulate an array

  const arr: number[] = [1, 2, 3, 4, 5]; // An array of numbers

  // Using map to create a new array where each element is doubled
  const newArr: number[] = arr.map((item: number): number => item * 2);

  // Result: [2, 4, 6, 8, 10]
  console.log(newArr);
}
