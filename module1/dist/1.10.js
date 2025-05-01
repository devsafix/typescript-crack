"use strict";
{
    // Assigning a valid value to the newDeveloper variable of type FrontEndDeveloper
    const newDeveloper = "junior"; // Valid
    // Creating a user object that matches the User type
    const user1 = {
        name: "fakibaz",
        age: 25,
        gender: "male", // Valid, as 'male' is a valid option for the 'gender' field
        bloodType: "A", // Valid, as 'A' is a valid option for the 'bloodType' field
    };
    // Creating a FullStackGoodDeveloper object
    const fullStackDeveloper = {
        skills: ["HTML", "CSS", "JavaScript", "Node.js"], // Skills common to both FrontEnd and BackEnd
        designation1: "FrontEndDeveloper", // Required FrontEnd designation
        designation2: "BackEndDeveloper", // Required BackEnd designation
    };
}
