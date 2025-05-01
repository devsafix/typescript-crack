{
  // Type Aliases in TypeScript

  // 1. Object Type Alias
  // Define a type alias for a Student object with properties and optional contactNo
  type Student = {
    name: string; // Name of the student
    age: number; // Age of the student
    gender: string; // Gender of the student
    contactNo?: string; // Optional contact number
    address: string; // Address of the student
  };

  // Defining objects using the Student type alias
  const student1: {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  } = {
    name: "John",
    age: 20,
    gender: "male",
    contactNo: "1234567890",
    address: "Cityville",
  };

  // student2 and student3 are typed using the 'Student' type alias
  const student2: Student = {
    name: "Doe",
    age: 20,
    gender: "male",
    address: "123 Main St", // contactNo is optional here, so it's not required
  };

  const student3: Student = {
    name: "Jane",
    age: 22,
    gender: "female",
    contactNo: "1234567890",
    address: "Kakkakal",
  };

  // 2. Basic Type Aliases
  // Defining simple type aliases for primitive types
  type UserName = string; // Type alias for string
  type isAdmin = boolean; // Type alias for boolean

  const userName: UserName = "JohnDoe"; // Using the UserName alias
  const isAdmin: isAdmin = true; // Using the isAdmin alias

  // 3. Function Type Alias
  // Define a function type alias for a function that takes two numbers and returns a number
  type AddFunction = (x: number, y: number) => number;

  // Function definition using the AddFunction type alias
  const add: AddFunction = (x, y) => x + y; // This function adds two numbers

  console.log(add(2, 3)); // Output: 5
}
