"use strict";
{
    // Object Destructuring
    // Define a user object with nested objects and arrays
    const user = {
        name: "John Doe", // String property
        age: 30, // Number property
        address: {
            city: "New York", // Nested object: city property
            zip: "10001", // Nested object: zip property
        },
        hobbies: ["reading", "traveling"], // Array property
        contactNo: "02113456789", // String property
    };
    // Destructuring assignment to extract specific properties from the object
    const { contactNo, // Extract the 'contactNo' property
    address: { zip: zips }, // Destructure 'address' object and rename 'zip' to 'zips'
     } = user;
    console.log(contactNo); // Output: 02113456789
    console.log(zips); // Output: 10001
    // Destructuring Nested Objects: You can directly access nested properties while destructuring
    const { address: { city }, } = user; // Extract 'city' directly from the 'address' object
    console.log(city); // Output: New York
    // Array Destructuring
    // Define an array of hobbies
    const hobbies = ["reading", "traveling", "swimming", "running"];
    // Destructuring the array to get the 3rd item (index 2)
    const [, , loveIt] = hobbies; // Skip first two elements and assign the third one to 'loveIt'
    console.log(loveIt); // Output: swimming
    // Destructuring the array into first and second elements, and the rest in another array
    const [first, second, ...rest] = hobbies;
    console.log(first); // Output: reading
    console.log(second); // Output: traveling
    console.log(rest); // Output: ['swimming', 'running']
    // Notes on Array Destructuring
    // You can skip elements in the array by leaving gaps (`,`), as shown in the first example (`[, , loveIt]`).
    // This allows you to pick specific elements you are interested in, while ignoring others.
}
