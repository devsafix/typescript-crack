{
  //
  // type generics

  const rollNumbers: number[] = [1, 2, 3, 4, 5];
  const rollNumbers2: Array<number> = [1, 2, 3, 4, 5];

  const mentors: string[] = ["John", "Jane", "Jim", "Jack", "Jill"];
  const mentors2: Array<string> = ["John", "Jane", "Jim", "Jack", "Jill"];

  const boolArr: boolean[] = [true, false, true, false, true];
  const boolArr2: Array<boolean> = [true, false, true, false, true];

  type GenericArray<T> = Array<T>;
  const rollNumbers3: GenericArray<number> = [1, 2, 3, 4, 5];
  const mentors3: GenericArray<string> = [
    "John",
    "Jane",
    "Jim",
    "Jack",
    "Jill",
  ];
  const boolArr3: GenericArray<boolean> = [true, false, true, false, true];

  const user: GenericArray<{
    name: string;
    age: number | string;
  }> = [
    {
      name: "John",
      age: 25,
    },
    {
      name: "Jane",
      age: "30",
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["john", "doe"];

  const userWithId: GenericTuple<number, { name: string; age: number }> = [
    1234,
    { name: "John", age: 25 },
  ];

  //
}
