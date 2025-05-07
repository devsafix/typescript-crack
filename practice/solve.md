## ✅ TypeScript Tasks — Full Solutions with Explanations and Examples

### Task 1: Basic Data Types and First Program

```ts
// Task 1
console.log(
  "Hello World, I will complete this course successfully and become a Next level Web Developer!"
);
```

> ✅ This task demonstrates how to run a simple TypeScript program using `tsc` or a bundler like Vite. No types used yet, just a motivational log!

---

### Task 2: Functions, Optional, and Literal Types

```ts
// Task 2
function describeUser(
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
): void {
  console.log(`Name: ${name}, Age: ${age}, Role: ${role ?? "not specified"}`);
}

describeUser("Alice", 25, "admin");
describeUser("Bob", 30);
```

> ✅ Covers basic function typing, optional parameters (`?`), and literal types (restricting to specific string values).

---

### Task 3: Object Types, Type Alias, & Literal Types

```ts
// Task 3
type Person = {
  name: string;
  address: string;
  hairColor: string;
  eyeColor: string;
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: string[];
  job: string;
  skills: string[];
  maritalStatus: "single" | "married";
  friends: string[];
};

const person: Person = {
  name: "John Doe",
  address: "123 Street, NY",
  hairColor: "Black",
  eyeColor: "Brown",
  income: 5000,
  expense: 2000,
  hobbies: ["reading", "coding"],
  familyMembers: ["Alice", "Bob"],
  job: "Engineer",
  skills: ["TypeScript", "React"],
  maritalStatus: "single",
  friends: ["Max", "Leo"],
};
```

> ✅ Demonstrates creating a complex custom object type with arrays and literal union types.

---

### Task 4: Union and Intersection Types

```ts
// Task 4
interface Book {
  title: string;
  author: string;
}

interface Magazine {
  issue: number;
  editor: string;
}

type Publication = Book | Magazine; // Union
type DetailedPublication = Book & Magazine; // Intersection

const pub1: Publication = { title: "TS Guide", author: "Dev" };
const pub2: DetailedPublication = {
  title: "Tech Monthly",
  author: "Editor A",
  issue: 42,
  editor: "Editor B",
};
```

> ✅ Union lets you use either type; intersection requires all fields from both.

---

### Task 5: Function Type

```ts
// Task 5
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseString("TypeScript"));
```

> ✅ A simple typed function returning a string. Good for practicing pure functions.

---

### Task 6: Spread and Rest Operators, Destructuring

```ts
// Task 6
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

const nums = [10, 20, 30];
console.log(sumAll(...nums)); // Using spread

const user = { name: "Alice", age: 25 };
const { name, age } = user; // Destructuring
```

> ✅ Shows both rest (`...args`) and spread (`...array`) usage with destructuring.

---

### Task 7: Type Assertion and Narrowing

```ts
// Task 7
function processInput(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input * input;
  }
}

const strLen = processInput("Hello");
const squared = processInput(4);
```

> ✅ Demonstrates type narrowing using `typeof`.

---

### Task 8: Intersection Types

```ts
// Task 8
type User = { name: string; email: string };
type Admin = { adminLevel: number };

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Sara",
  email: "sara@example.com",
  adminLevel: 2,
};

function describeAdmin(user: AdminUser): string {
  return `${user.name} is an admin with level ${user.adminLevel}`;
}
```

> ✅ Combines multiple types into one using intersection (`&`).

---

### Task 9: Optional Chaining

```ts
// Task 9
function getEmployeeCity(employee: any): string | undefined {
  return employee?.address?.city;
}

const emp = { name: "Sam", address: { city: "NY" } };
const city = getEmployeeCity(emp);
```

> ✅ Safe navigation through nested objects using `?.`.

---

### Task 10: Nullish Coalescing

```ts
// Task 10
function getDisplayName(name: string | null | undefined): string {
  return name ?? "Anonymous";
}

console.log(getDisplayName(undefined)); // => "Anonymous"
```

> ✅ `??` only falls back if the value is `null` or `undefined` (not `""` or `0`).

---

### Task 11: Unknown Type

```ts
// Task 11
function processData(data: unknown): string | number | undefined {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return data * 2;
  }
}
```

> ✅ `unknown` is safer than `any`, requiring type checks before use.

---

### Task 12: Never Type

```ts
// Task 12
function handleError(message: string): never {
  throw new Error(message);
}
```

> ✅ `never` is used when a function never returns (e.g., throws an error).

---

### Task 13: Generics with Functions and Interfaces

```ts
// Task 13
function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

const uniqueNums = removeDuplicates([1, 2, 2, 3, 1]);
const uniqueStrs = removeDuplicates(["a", "b", "a"]);
```

> ✅ `T` is a placeholder for any type. Generics make functions reusable for all types.

---

### Task 14: Asynchronous TypeScript and Type Aliases

```ts
// Task 14
type UserData = {
  name: string;
  age: number;
};

async function fetchUser(): Promise<UserData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alice", age: 30 });
    }, 1000);
  });
}

fetchUser().then((data) => console.log(data));
```

> ✅ Demonstrates async/await and typing a `Promise`.

---

### Task 15: Type Guards

```ts
// Task 15
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printUpperCase(value: unknown): void {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log("Not a string.");
  }
}
```

> ✅ Custom type guards narrow unknown types safely for logic.

---

### Task 16: Utility Types and Keyof Constraints

```ts
// Task 16
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const car = { brand: "Toyota", year: 2022 };
const brand = getPropertyValue(car, "brand"); // Valid
```

> ✅ `keyof` ensures keys passed to the function exist on the object.

---
