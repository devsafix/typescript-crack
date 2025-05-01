"use strict";
{
    // Defining objects using the Student type alias
    const student1 = {
        name: "John",
        age: 20,
        gender: "male",
        contactNo: "1234567890",
        address: "Cityville",
    };
    // student2 and student3 are typed using the 'Student' type alias
    const student2 = {
        name: "Doe",
        age: 20,
        gender: "male",
        address: "123 Main St", // contactNo is optional here, so it's not required
    };
    const student3 = {
        name: "Jane",
        age: 22,
        gender: "female",
        contactNo: "1234567890",
        address: "Kakkakal",
    };
    const userName = "JohnDoe"; // Using the UserName alias
    const isAdmin = true; // Using the isAdmin alias
    // Function definition using the AddFunction type alias
    const add = (x, y) => x + y; // This function adds two numbers
    console.log(add(2, 3)); // Output: 5
}
