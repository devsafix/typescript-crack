"use strict";
{
    // Reference Type: Object
    // Defining a user object with explicit types for each property
    const user = {
        firstName: "Dev", // first name is a string
        lastName: "Safi", // last name is a string
        age: 20, // age is a number
        email: "devsafi@gmail.com", // email is a string
    };
    // Defining another user object with more complex types
    const user2 = {
        company: "DevSafi", // 'company' must be "DevSafi"
        address: "123 Main St", // 'address' is a string, and it's readonly
        firstName: "Dev", // 'firstName' is a string
        lastName: "Safi", // 'lastName' is a string
        age: 20, // 'age' is a number
        // email is optional, so we can leave it out, or you can add it like this:
        // email: "devsafi@gmail.com"
    };
    // Attempting to modify readonly property will throw an error
    // user2.address = "Tangail"; // Error: Cannot assign to 'address' because it is a read-only property
    // Optional property example: If 'email' is provided, it will be a string, otherwise it is 'undefined'
    // You can check for the presence of the property before using it
    if (user2.email) {
        console.log(`Email: ${user2.email}`);
    }
    else {
        console.log("Email not provided");
    }
    // Literal type example: 'company' must always be "DevSafi", trying to assign anything else would cause an error
    // user2.company = "OtherCompany"; // Error: Type '"OtherCompany"' is not assignable to type '"DevSafi"'.
}
