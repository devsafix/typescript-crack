{
  //
  // function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("hello");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res2 = createArrayWithGeneric<string>("hello");
  const res3 = createArrayWithGeneric<number>(1);
  const res4 = createArrayWithGeneric<boolean>(true);
  const res5 = createArrayWithGeneric<{ name: string; age: number }>({
    name: "hello",
    age: 1,
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const res6 = createArrayWithTuple<string, number>("hello", 1);
  const res7 = createArrayWithTuple<number, string>(1, "hello");
  const res8 = createArrayWithTuple<boolean, boolean>(true, false);
  const res9 = createArrayWithTuple<{ name: string; age: number }, string>(
    { name: "hello", age: 1 },
    "hello"
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "NLWD";
    return { ...student, course };
  };
  const student1 = addCourseToStudent({ name: "hello", age: 1, devType: "js" });
  const student2 = addCourseToStudent({
    name: "hello",
    age: 1,
    hasWatch: "yes",
  });

  //
}
