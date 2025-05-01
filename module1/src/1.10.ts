{
  // union
  type FrontEndDeveloper = "fakibaz" | "junior" | "mid";
  const newDeveloper: FrontEndDeveloper = "junior"; // union type

  type FullStackDeveloper = "frontEnd" | "BackEnd";

  type Developer = FrontEndDeveloper | FullStackDeveloper; // union type

  type User = {
    name: string;
    age: number;
    gender: "male" | "female" | "other"; // union type
    bloodType: "A" | "B" | "AB" | "O"; // union type
  };

  const user1: User = {
    name: "fakibaz",
    age: 25,
    gender: "male",
    bloodType: "A",
  };

  //   intersection
  type FrontEndGoodDeveloper = {
    skills: string[];
    designation1: "FrontEndDeveloper";
  };
  type BackEndGoodDeveloper = {
    skills: string[];
    designation2: "BackEndDeveloper";
  };
  type FullStackGoodDeveloper = FrontEndGoodDeveloper & BackEndGoodDeveloper; // intersection type

  const fullStackDeveloper: FullStackGoodDeveloper = {
    skills: ["HTML", "CSS", "JavaScript", "Node.js"],
    designation1: "FrontEndDeveloper",
    designation2: "BackEndDeveloper",
  };
  //
}
