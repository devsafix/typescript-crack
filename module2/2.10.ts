{
  // ------------------ Utility Types in TypeScript ------------------

  // Define a base Person type
  type Person = {
    name: string;
    age: number;
    email?: string;
    phone: string;
  };

  // ------------------ 1. Pick ------------------
  // Extract specific keys from a type

  type NameOnly = Pick<Person, "name">;
  // Result: { name: string }

  type NameAndEmail = Pick<Person, "name" | "email">;
  // Result: { name: string; email?: string }

  // ------------------ 2. Omit ------------------
  // Remove specific keys from a type

  type ContactInfo = Omit<Person, "name" | "age">;
  // Result: { email?: string; phone: string }

  // ------------------ 3. Required ------------------
  // Makes all properties required (no optional `?`)

  type PersonWithRequired = Required<Person>;
  // Result: { name: string; age: number; email: string; phone: string }

  // ------------------ 4. Partial ------------------
  // Makes all properties optional

  type PersonWithOptional = Partial<Person>;
  // Result: { name?: string; age?: number; email?: string; phone?: string }

  // ------------------ 5. Readonly ------------------
  // Makes all properties readonly

  type ReadonlyPerson = Readonly<Person>;
  // Result: { readonly name: string; readonly age: number; readonly email?: string; readonly phone: string }

  type ReadonlyPersonWithRequired = Required<Readonly<Person>>;
  // All properties are readonly and required

  // ------------------ 6. Record ------------------
  // Creates an object type with specific keys and value types

  // Example: fixed keys with known types
  type MyObject = {
    a: string;
    b: number;
  };

  const obj1: MyObject = {
    a: "a",
    b: 1,
  };

  // Example: dynamic string keys, all values must be strings
  type MyObject2 = Record<string, string>;

  const obj2: MyObject2 = {
    a: "alpha",
    b: "beta",
    c: "gamma",
  };

  // Example: values of unknown type (safe for flexible structures)
  const emptyObj: Record<string, unknown> = {};
  emptyObj.a = "any value"; // OK
  emptyObj.b = 123; // OK

  // ------------------ Example Usage ------------------

  // Valid Person
  const person: Person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    phone: "123-456-7890",
  };

  // Trying to mutate a ReadonlyPerson would cause an error:
  // const readonlyPerson: ReadonlyPerson = person;
  // readonlyPerson.name = "Jane"; ❌ Error (uncomment to see error)
}
