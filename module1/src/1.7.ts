{
  // spread operator
  // rest operator
  // destructuring

  // spread operator
  const bros1: string[] = ["a", "b", "c"];
  const bros2: string[] = ["d", "e", "f"];

  // bros1.push(bros2); // Error: Argument of type 'string[]' is not assignable to parameter of type 'string'.

  bros1.push(...bros2); // OK: spread operator

  const mentors1 = {
    typescript: "a",
    javascript: "b",
    python: "c",
  };
  const mentors2 = {
    csharp: "d",
    java: "e",
    ruby: "f",
  };
  // mentors1.push(mentors2); // Error: Argument of type '{ csharp: string; java: string; ruby: string; }' is not assignable to parameter of type 'string'.

  const mentorList = { ...mentors1, ...mentors2 }; // OK: spread operator

  // rest operator
  const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    console.log(`Hello ${friend1}, ${friend2}, ${friend3}`);
  };

  greetFriends("a", "b", "c"); // OK: Hello a, b, c
  // greetFriends("a", "b", "c", "d"); // Error: Expected 3 arguments, but got 4.

  const greetFriendsRest = (...friends: string[]) => {
    console.log(`Hello ${friends.join(", ")}`);
    friends.forEach((friend) => {
      console.log(`Hello ${friend}`);
    });
  };
  greetFriendsRest("a", "b", "c"); // OK: Hello a, b, c
  greetFriendsRest("a", "b", "c", "d"); // OK: Hello a, b, c, d
}
