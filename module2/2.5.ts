{
  // ------------------ Functions with Generics in TypeScript ------------------

  // Function without generics (hardcoded to string)
  const createStringArray = (param: string): string[] => {
    return [param];
  };

  const result1 = createStringArray("hello"); // ['hello']

  // ------------------ Generic Function ------------------

  // Generic version of createArray that works with any type
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  // Usage with different types
  const result2 = createArrayWithGeneric<string>("hello"); // ['hello']
  const result3 = createArrayWithGeneric<number>(1); // [1]
  const result4 = createArrayWithGeneric<boolean>(true); // [true]
  const result5 = createArrayWithGeneric<{ name: string; age: number }>({
    name: "hello",
    age: 1,
  }); // [{ name: 'hello', age: 1 }]

  // ------------------ Generic Tuple Function ------------------

  // A function that returns a tuple of two generic values
  const createTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  // Various usages of the tuple function
  const tuple1 = createTuple<string, number>("hello", 1); // ['hello', 1]
  const tuple2 = createTuple<number, string>(1, "hello"); // [1, 'hello']
  const tuple3 = createTuple<boolean, boolean>(true, false); // [true, false]
  const tuple4 = createTuple<{ name: string; age: number }, string>(
    { name: "hello", age: 1 },
    "developer"
  ); // [{ name: 'hello', age: 1 }, 'developer']

  // ------------------ Add Property Using Generics ------------------

  // Function that adds a 'course' property to a student object
  const addCourseToStudent = <T>(student: T) => {
    const course = "NLWD";
    return { ...student, course };
  };

  // Usage with different shapes of student objects
  const student1 = addCourseToStudent({
    name: "Alice",
    age: 20,
    devType: "JavaScript",
  });
  // Result: { name: 'Alice', age: 20, devType: 'JavaScript', course: 'NLWD' }

  const student2 = addCourseToStudent({
    name: "Bob",
    age: 22,
    hasWatch: "yes",
  });
  // Result: { name: 'Bob', age: 22, hasWatch: 'yes', course: 'NLWD' }
}
