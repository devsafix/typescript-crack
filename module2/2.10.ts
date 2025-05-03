{
  //
  // utility types

  // Pick Type
  type Person = {
    name: string;
    age: number;
    email?: string;
    phone: string;
  };

  type Name = Pick<Person, "name">; // { name: string }
  type NameAndEmail = Pick<Person, "name" | "email">; // { name: string; email?: string; }

  // Omit Type
  type ContactInfo = Omit<Person, "name" | "age">; // { email?: string; phone: string; }

  //   Required Type
  type PersonWithRequired = Required<Person>; // { name: string; age: number; email: string; phone: string; }

  //   Partial Type
  type PersonWithOptional = Partial<Person>; // { name?: string; age?: number; email?: string; phone?: string; }

  //   Readonly Type
  type ReadonlyPerson = Readonly<Person>; // { readonly name: string; readonly age: number; readonly email?: string; readonly phone: string; }
  type ReadonlyPersonWithRequired = Required<Readonly<Person>>;
  const person: Person = {
    name: "John Doe",
    age: 30,
    email: "ssdada",
    phone: "123-456-7890",
  };

  person.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property.

  //  Record Type
  type myObj = {
    a: string;
    b: number;
  };

  const obj1: myObj = {
    a: "a",
    b: 1,
  };

  type myobj2 = Record<string, string>;

  const obj2: myobj2 = {
    a: "a",
    b: "1",
  };

  const emptyObj: Record<string, unknown> = {};
  emptyObj.a = "a"; // OK

  //
}
