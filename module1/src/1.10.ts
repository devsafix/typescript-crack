{
  // Union Types

  // Union type for FrontEndDeveloper: can be "fakibaz", "junior", or "mid"
  type FrontEndDeveloper = "fakibaz" | "junior" | "mid";

  // Assigning a valid value to the newDeveloper variable of type FrontEndDeveloper
  const newDeveloper: FrontEndDeveloper = "junior"; // Valid

  // Union type for FullStackDeveloper: can be either "frontEnd" or "BackEnd"
  type FullStackDeveloper = "frontEnd" | "BackEnd";

  // Union of multiple types: Developer can be either FrontEndDeveloper or FullStackDeveloper
  type Developer = FrontEndDeveloper | FullStackDeveloper;

  // User type with union types for gender and bloodType
  type User = {
    name: string; // Name of the user (string)
    age: number; // Age of the user (number)
    gender: "male" | "female" | "other"; // Union type for gender
    bloodType: "A" | "B" | "AB" | "O"; // Union type for bloodType
  };

  // Creating a user object that matches the User type
  const user1: User = {
    name: "fakibaz",
    age: 25,
    gender: "male", // Valid, as 'male' is a valid option for the 'gender' field
    bloodType: "A", // Valid, as 'A' is a valid option for the 'bloodType' field
  };

  // Intersection Types

  // FrontEndGoodDeveloper type, specifying skills and a FrontEndDeveloper designation
  type FrontEndGoodDeveloper = {
    skills: string[]; // Skills in an array of strings
    designation1: "FrontEndDeveloper"; // Fixed string "FrontEndDeveloper"
  };

  // BackEndGoodDeveloper type, specifying skills and a BackEndDeveloper designation
  type BackEndGoodDeveloper = {
    skills: string[]; // Skills in an array of strings
    designation2: "BackEndDeveloper"; // Fixed string "BackEndDeveloper"
  };

  // FullStackGoodDeveloper type: intersection of both FrontEndGoodDeveloper and BackEndGoodDeveloper
  type FullStackGoodDeveloper = FrontEndGoodDeveloper & BackEndGoodDeveloper;

  // Creating a FullStackGoodDeveloper object
  const fullStackDeveloper: FullStackGoodDeveloper = {
    skills: ["HTML", "CSS", "JavaScript", "Node.js"], // Skills common to both FrontEnd and BackEnd
    designation1: "FrontEndDeveloper", // Required FrontEnd designation
    designation2: "BackEndDeveloper", // Required BackEnd designation
  };
}
