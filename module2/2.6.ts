{
  {
    //
    // constraints in TypeScript
    const addCourseToStudent = <T extends { id: number; name: string }>(
      student: T
    ) => {
      const course = "NLWD";
      return { ...student, course };
    };
    const student1 = addCourseToStudent({
      id: 111,
      name: "hello",
      age: 1,
      devType: "js",
    });
    const student2 = addCourseToStudent({
      id: 222,
      name: "hello",
      age: 1,
      hasWatch: "yes",
    });
    const student3 = addCourseToStudent({
      id: 333,
      name: "hello",
      pookie: "hello",
    });

    //generic constraints with keyof
    type Vehicle = {
      bike: string;
      car: string;
      ship: string;
    };

    type Owner = "bike" | "car" | "ship";

    type Owner2 = keyof Vehicle; // "bike" | "car" | "ship"

    const person1: Owner = "bike"; // ok
    const person2: Owner2 = "ship"; // ok

    const user = {
      name: "hello",
      age: 1,
      address: "tng",
    };

    //   user['name'] = "hello" // ok

    function getProperty<T, K extends keyof T>(obj: T, key: K) {
      return obj[key];
    }

    const result1 = getProperty(user, "name"); // ok
    const result2 = getProperty(user, "age"); // ok

    //
  }
}
