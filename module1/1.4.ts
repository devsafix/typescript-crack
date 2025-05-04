{
  // Basic data types in TypeScript

  // string
  let firstName: string = "John"; // String type variable for the first name

  // number
  let age: number = 30; // Number type variable for age

  // boolean
  let isEmployed: boolean = true; // Boolean type indicating employment status

  // null
  let middleName: null = null; // Null type variable for middle name, currently null

  // undefined
  let lastName: undefined = undefined; // Undefined type variable for last name, currently undefined

  // any
  let d: any; // 'any' type allows the variable to hold any type of value
  d = 1; // 'd' is now a number
  d = "hello"; // 'd' is now a string
  d = true; // 'd' is now a boolean

  // number (explicit type annotation)
  let t: number; // 't' is declared as a number
  t = 1; // 't' is now a number

  // Uncommenting the following line would cause a TypeScript error
  // t = "hello"; // Error: Type 'string' is not assignable to type 'number'

  // Arrays

  // Array of strings
  let names: Array<string> = ["John", "Jane", "Doe"]; // This is an array that can only contain strings
  // names.push(12); // Error: Argument of type '12' is not assignable to parameter of type 'string'.

  // Array of numbers
  let numbers: number[] = [1, 2, 3, 4, 5]; // This is an array that can only contain numbers
  // numbers.push("hello"); // Error: Argument of type '"hello"' is not assignable to parameter of type 'number'.

  // Tuples

  // Tuple of two numbers
  let coordinates: [number, number] = [10, 20]; // Tuple with fixed types: two numbers
  // coordinates[0] = "hello"; // Error: Type '"hello"' is not assignable to type 'number'.

  // Tuple with a string and a number
  let person: [string, number] = ["John", 30]; // Tuple with a string and a number
  // person[0] = 1; // Error: Type '1' is not assignable to type 'string'.

  // Additional Valid Examples for clarity:

  // Enum (adding more type safety to the code)
  enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest",
  }

  let userRole: Role = Role.User; // userRole can only be one of the defined enum values

  // Function example with typed parameters and return value
  function greet(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`; // Return type is string
  }

  let greetingMessage: string = greet("Alice", 25); // Function call with correct types
  // greet("Alice", "twenty-five"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

  // Using Type Assertions
  let someValue: any = "This is a string";
  let stringLength: number = (someValue as string).length; // Type assertion to treat 'someValue' as a string

  console.log(stringLength); // Output: Length of the string (21 in this case)
}
