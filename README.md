````markdown
# TypeScript Concepts

This repository covers various TypeScript concepts including basic types, advanced types, functions, object manipulation, and modern JavaScript features. Below you'll find examples and explanations for each of these concepts.

## Table of Contents

1. [Basic Data Types](#basic-data-types)
2. [Functions](#functions)
3. [Objects and Arrays](#objects-and-arrays)
4. [Destructuring](#destructuring)
5. [Type Alias](#type-alias)
6. [Union and Intersection Types](#union-and-intersection-types)
7. [Nullish Coalescing, Optional Chaining, and Ternary Operator](#nullish-coalescing-optional-chaining-and-ternary-operator)
8. [Nullable Types, Unknown, and Never Types](#nullable-types-unknown-and-never-types)
9. [Mapped Types](#mapped-types)
10. [Utility Types](#utility-types)
11. [Generics](#generics)
12. [Asynchronous Programming in TypeScript](#asynchronous-programming-in-typescript)
13. [Constraints in TypeScript](#constraints-in-typescript)

---

## Basic Data Types

TypeScript supports several basic data types such as:

- **string**
- **number**
- **boolean**
- **null**
- **undefined**
- **any**

### Example:

```typescript
let firstName: string = "John";
let age: number = 30;
let isEmployed: boolean = true;
let middleName: null = null;
let lastName: undefined = undefined;
```
````

---

## Functions

TypeScript allows the use of both normal functions and arrow functions. Function types can also be defined for better type safety.

### Normal Function:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

### Arrow Function with Default Parameters:

```typescript
const addArrow = (a: number, b: number = 10): number => a + b;
```

### Example with Methods inside Objects:

```typescript
const obj = {
  name: "John",
  balance: 1000,
  addBalance: function (balance: number): string {
    return `my new balance is ${this.balance + balance}`;
  },
};

console.log(obj.addBalance(100)); // my new balance is 1100
```

---

## Objects and Arrays

You can define objects and arrays in TypeScript with strict type checking.

### Arrays:

```typescript
let names: Array<string> = ["John", "Jane", "Doe"];
let numbers: number[] = [1, 2, 3, 4, 5];
```

### Tuples:

```typescript
let coordinates: [number, number] = [10, 20];
let person: [string, number] = ["John", 30];
```

---

## Destructuring

Destructuring allows you to extract values from objects or arrays into variables.

### Object Destructuring:

```typescript
const user = {
  name: "John Doe",
  age: 30,
  address: { city: "New York", zip: "10001" },
};

const {
  name,
  address: { zip },
} = user;
```

### Array Destructuring:

```typescript
const hobbies = ["reading", "traveling", "swimming"];
const [, , thirdHobby] = hobbies; // Extract the third hobby
```

---

## Type Alias

Type aliases allow you to create custom types and use them for variables, function signatures, and more.

### Example:

```typescript
type Student = {
  name: string;
  age: number;
  gender: string;
  contactNo?: string;
  address: string;
};

const student1: Student = {
  name: "John",
  age: 20,
  gender: "male",
  address: "Cityville",
};
```

---

## Union and Intersection Types

TypeScript allows you to create **union types** (values can be one of several types) and **intersection types** (combine multiple types into one).

### Union Types:

```typescript
type FrontEndDeveloper = "junior" | "mid" | "senior";
type Developer = FrontEndDeveloper | "FullStack";

const newDeveloper: Developer = "mid"; // Works
```

### Intersection Types:

```typescript
type FrontEndGoodDeveloper = {
  skills: string[];
  designation1: "FrontEndDeveloper";
};
type BackEndGoodDeveloper = {
  skills: string[];
  designation2: "BackEndDeveloper";
};

type FullStackGoodDeveloper = FrontEndGoodDeveloper & BackEndGoodDeveloper;

const fullStackDeveloper: FullStackGoodDeveloper = {
  skills: ["HTML", "CSS", "JavaScript", "Node.js"],
  designation1: "FrontEndDeveloper",
  designation2: "BackEndDeveloper",
};
```

---

## Nullish Coalescing, Optional Chaining, and Ternary Operator

### Ternary Operator:

The **ternary operator** is a shorthand for `if-else`.

```typescript
const isAdult = age >= 18 ? "You are an adult" : "You are not an adult";
```

### Nullish Coalescing (`??`):

The **nullish coalescing operator** allows you to provide default values when a variable is `null` or `undefined`.

```typescript
const result = isAuthenticated ?? "guest"; // Uses "guest" if isAuthenticated is null or undefined
```

### Optional Chaining (`?.`):

**Optional chaining** allows you to safely access nested properties without worrying about `null` or `undefined`.

```typescript
const permanentAddress =
  user?.address?.permanentAddress ?? "No permanent address";
```

---

## Nullable Types, Unknown, and Never Types

### Nullable Types:

You can explicitly define variables that accept `null`.

```typescript
const searchName = (value: string | null) => {
  if (value) {
    console.log("searching");
  } else {
    console.log("not searching");
  }
};
```

### Unknown Type:

The **`unknown` type** requires type checks before using the value.

```typescript
const getSpeedMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedValue = (value * 1000) / 3600;
    console.log(`Speed in m/s: ${convertedValue}`);
  } else {
    console.log("Invalid value");
  }
};
```

### Never Type:

The **`never` type** is used for functions that never return a value (e.g., throwing an error).

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## Mapped Types

Mapped types allow you to create new types by transforming properties of another type. For example, converting all properties of a type from `number` to `string`.

```typescript
type AreaNumber = {
  height: number;
  width: number;
};

type AreaString = {
  [K in keyof AreaNumber]: string; // mapped type
};
```

---

## Utility Types

TypeScript provides several built-in utility types that are useful for transforming types.

- `Pick<T, K>`: Selects a subset of properties from `T`.
- `Omit<T, K>`: Removes properties from `T`.
- `Required<T>`: Makes all properties of `T` required.
- `Partial<T>`: Makes all properties of `T` optional.
- `Readonly<T>`: Makes all properties of `T` readonly.
- `Record<K, T>`: Creates a type with specific keys and values.

---

## Generics

Generics allow you to create reusable types that can work with any type.

```typescript
const createArray = <T>(param: T): T[] => {
  return [param];
};

const stringArray = createArray("hello");
const numberArray = createArray(1);
```

---

## Asynchronous Programming in TypeScript

TypeScript supports asynchronous programming with `Promises` and `async/await`.

### Promises:

```typescript
const createPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Hello, World!";
    if (data) {
      resolve(data);
    } else {
      reject("No data found");
    }
  });
};
```

### Async/Await:

```typescript
const showData = async (): Promise<string> => {
  try {
    const data = await createPromise();
    return data;
  } catch (error) {
    return "Error occurred";
  }
};
```

---

## Constraints in TypeScript

Generics can be constrained to specific types using `extends`.

```typescript
const addCourseToStudent = <T extends { id: number; name: string }>(
  student: T
) => {
  const course = "NLWD";
  return { ...student, course };
};
```

---

## Conclusion

This repository contains essential TypeScript concepts that will help you build robust, type-safe applications. Make sure to explore each topic and use them to improve your codebase. Happy coding!

---

## Author

**Kawser Ferdous Safi**
