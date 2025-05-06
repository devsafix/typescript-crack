## ✅ TypeScript Tasks — Full Solutions

### Task 1: Basic Data Types and First Program

```ts
// Task 1
console.log(
  "Hello World, I will complete this course successfully and become a Next level Web Developer!"
);
```

---

### Task 2: Functions, Optional, and Literal Types

```ts
// Task 2
function describeUser(
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
) {
  console.log(`Name: ${name}, Age: ${age}, Role: ${role ?? "not specified"}`);
}
```

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
  skills: ["TS", "React"],
  maritalStatus: "single",
  friends: ["Max", "Leo"],
};
```

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

type Publication = Book | Magazine;
type DetailedPublication = Book & Magazine;
```

---

### Task 5: Function Type

```ts
// Task 5
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
```

---

### Task 6: Spread and Rest Operators, Destructuring

```ts
// Task 6
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}
```

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
```

---

### Task 8: Intersection Types

```ts
// Task 8
type User = { name: string; email: string };
type Admin = { adminLevel: number };

type AdminUser = User & Admin;

function describeAdmin(user: AdminUser): string {
  return `${user.name} is an admin with level ${user.adminLevel}`;
}
```

---

### Task 9: Optional Chaining

```ts
// Task 9
function getEmployeeCity(employee: any): string | undefined {
  return employee?.address?.city;
}
```

---

### Task 10: Nullish Coalescing

```ts
// Task 10
function getDisplayName(name: string | null | undefined): string {
  return name ?? "Anonymous";
}
```

---

### Task 11: Unknown Type

```ts
// Task 11
function processData(data: unknown): string | number | undefined {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return data * data;
  }
}
```

---

### Task 12: Never Type

```ts
// Task 12
function handleError(message: string): never {
  throw new Error(message);
}
```

---

### Task 13: Generics with Functions and Interfaces

```ts
// Task 13
function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
```

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
```

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

---

### Task 16: Utility Types and Keyof Constraints

```ts
// Task 16
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

---
