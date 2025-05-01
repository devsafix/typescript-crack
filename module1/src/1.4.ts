// basic data types

// string
let firstName: string = "John";

// number
let age: number = 30;

// boolean
let isEmployed: boolean = true;

// null
let middleName: null = null;

// undefined
let lastName: undefined = undefined;

let d; // d is of type any
d = 1; // d is now a number
d = "hello"; // d is now a string
d = true; // d is now a boolean

let t: number; // t is of type number
t = 1; // t is now a number
// t = "hello"; // Error: Type 'string' is not assignable to type 'number'

// Arrays

let names: Array<string> = ["John", "Jane", "Doe"]; // array of strings
// names.push(12); // Error: Argument of type '12' is not assignable to parameter of type 'string'.

let numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers
// numbers.push("hello"); // Error: Argument of type '"hello"' is not assignable to parameter of type 'number'.

// Tuples

let coordinates: [number, number] = [10, 20]; // tuple of two numbers
// coordinates[0] = "hello"; // Error: Type '"hello"' is not assignable to type 'number'.

let person: [string, number] = ["John", 30]; // tuple of string and number
// person[0] = 1; // Error: Type '1' is not assignable to type 'string'.
