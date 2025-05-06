{
  // Demonstrating the use of 'type' and 'interface' in TypeScript

  // ---------------------- Using 'type' ----------------------

  // Define a user type using 'type'
  type UserType = {
    name: string;
    age: number;
  };

  // Create an instance of UserType
  const user1: UserType = {
    name: "John",
    age: 30,
  };

  // Extend the UserType with an additional 'role' property using intersection
  type UserWithRoleType = UserType & {
    role: string;
  };

  // Create an instance of the extended type
  const userWithRole1: UserWithRoleType = {
    name: "John",
    age: 30,
    role: "admin",
  };

  // -------------------- Using 'interface' --------------------

  // Define a user interface
  interface UserInterface {
    name: string;
    age: number;
  }

  // Create an instance of UserInterface
  const user2: UserInterface = {
    name: "Doe",
    age: 30,
  };

  // Extend the UserInterface using 'extends'
  interface UserWithRoleInterface extends UserInterface {
    role: string;
  }

  // Create an instance of the extended interface
  const userWithRole2: UserWithRoleInterface = {
    name: "Doe",
    age: 30,
    role: "admin",
  };

  // ------------------ Array and Index Signatures ------------------

  // Define a number array using 'type'
  type RollNumbersType = number[];

  // Initialize an array using the type alias
  const rollNumbers1: RollNumbersType = [1, 2, 3, 4, 5];

  // Define a number array using an interface with index signature
  interface RollNumbersInterface {
    [index: number]: number;
  }

  // Initialize an array using the interface
  const rollNumbers2: RollNumbersInterface = [1, 2, 3, 4, 5];

  // ------------------ Function Types ------------------

  // Define a function type using 'type'
  type AddFunctionType = (a: number, b: number) => number;

  // Implement the function
  const addNumbers1: AddFunctionType = (a, b) => a + b;

  // Define a function type using 'interface'
  interface AddFunctionInterface {
    (a: number, b: number): number;
  }

  // Implement the function
  const addNumbers2: AddFunctionInterface = (a, b) => a + b;
}
