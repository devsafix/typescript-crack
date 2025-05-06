{
  // --------------------- Generic Types in TypeScript ---------------------

  // Standard ways of defining arrays
  const rollNumbers: number[] = [1, 2, 3, 4, 5];
  const rollNumbersAlt: Array<number> = [1, 2, 3, 4, 5];

  const mentorNames: string[] = ["John", "Jane", "Jim", "Jack", "Jill"];
  const mentorNamesAlt: Array<string> = ["John", "Jane", "Jim", "Jack", "Jill"];

  const booleanFlags: boolean[] = [true, false, true, false, true];
  const booleanFlagsAlt: Array<boolean> = [true, false, true, false, true];

  // --------------------- Generic Array Type Alias ---------------------

  // Define a reusable generic type for arrays
  type GenericArray<T> = Array<T>;

  // Use generic type alias for various arrays
  const rollNumbersGeneric: GenericArray<number> = [1, 2, 3, 4, 5];
  const mentorNamesGeneric: GenericArray<string> = [
    "John",
    "Jane",
    "Jim",
    "Jack",
    "Jill",
  ];
  const booleanFlagsGeneric: GenericArray<boolean> = [
    true,
    false,
    true,
    false,
    true,
  ];

  // Using a generic array to hold objects with custom types
  const users: GenericArray<{ name: string; age: number | string }> = [
    { name: "John", age: 25 },
    { name: "Jane", age: "30" },
  ];

  // --------------------- Generic Tuples ---------------------

  // Define a reusable generic tuple type
  type GenericTuple<X, Y> = [X, Y];

  // Tuple with two strings
  const fullName: GenericTuple<string, string> = ["John", "Doe"];

  // Tuple with a number and an object
  const userWithId: GenericTuple<number, { name: string; age: number }> = [
    1234,
    { name: "John", age: 25 },
  ];
}
