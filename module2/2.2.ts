{
  //

  // interface learning

  // when type
  type User1 = {
    name: string;
    age: number;
  };
  const user1: User1 = {
    name: "John",
    age: 30,
  };

  type UserWithRole1 = User1 & {
    role: string;
  };

  const user3: UserWithRole1 = {
    name: "John",
    age: 30,
    role: "admin",
  };

  // when interface
  interface User2 {
    name: string;
    age: number;
  }
  const user2: User2 = {
    name: "Doe",
    age: 30,
  };

  interface UserWithRole2 extends User2 {
    role: string;
  }
  const user4: UserWithRole2 = {
    name: "Doe",
    age: 30,
    role: "admin",
  };

  type Roll1 = number[];
  const roll: Roll1 = [1, 2, 3, 4, 5];

  interface Roll2 {
    [index: number]: number;
  }
  const roll2: Roll2 = [1, 2, 3, 4, 5];

  type Add = (a: number, b: number) => number;
  const add: Add = (a, b) => a + b;

  interface Add2 {
    (a: number, b: number): number;
  }
  const add2: Add2 = (a, b) => a + b;

  //
}
