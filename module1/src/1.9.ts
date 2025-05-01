{
  //
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  } = {
    name: "John",
    age: 20,
    gender: "male",
    contactNo: "1234567890",
    address: "Cityville",
  };

  const student2: Student = {
    name: "Doe",
    age: 20,
    gender: "male",
    address: "123 Main St",
  }; // type alias

  const student3: Student = {
    name: "Jane",
    age: 22,
    gender: "female",
    contactNo: "1234567890",
    address: "kakkakal",
  }; // type alias

  type UserName = string; // type alias
  type isAdmin = boolean; // type alias
  const userName: UserName = "JohnDoe"; // type alias
  const isAdmin: isAdmin = true; // type alias

  // function type alias
  type AddFunction = (x: number, y: number) => number; // function type alias

  const add: AddFunction = (x, y) => x + y; // function type alias

  //
}
