"use strict";
{
    // Spread operator, Rest operator, and Destructuring in TypeScript
    // Spread Operator
    // Arrays: The spread operator can be used to "unpack" the elements of an array into a new array.
    const bros1 = ["a", "b", "c"];
    const bros2 = ["d", "e", "f"];
    // Using the spread operator to combine arrays
    bros1.push(...bros2); // OK: Spread operator unpacks 'bros2' and adds each element to 'bros1'
    console.log(bros1); // Output: ["a", "b", "c", "d", "e", "f"]
    // Object: The spread operator can also be used to combine objects.
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
    // Using the spread operator to combine two objects into one
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2); // OK: Spread operator combines the properties of both objects
    console.log(mentorList);
    // Output: { typescript: 'a', javascript: 'b', python: 'c', csharp: 'd', java: 'e', ruby: 'f' }
    // Rest Operator
    // The rest operator is used to collect remaining function arguments into an array.
    const greetFriends = (friend1, friend2, friend3) => {
        console.log(`Hello ${friend1}, ${friend2}, ${friend3}`);
    };
    // Works fine with 3 arguments
    greetFriends("a", "b", "c"); // Output: Hello a, b, c
    // Uncommenting the following line will cause an error since it expects exactly 3 arguments
    // greetFriends("a", "b", "c", "d"); // Error: Expected 3 arguments, but got 4.
    // Rest operator with variable number of arguments
    const greetFriendsRest = (...friends) => {
        console.log(`Hello ${friends.join(", ")}`); // Joins the friends into a string
        friends.forEach((friend) => {
            console.log(`Hello ${friend}`); // Greets each friend individually
        });
    };
    // Works with any number of arguments
    greetFriendsRest("a", "b", "c"); // Output: Hello a, b, c
    greetFriendsRest("a", "b", "c", "d"); // Output: Hello a, b, c, d
    // Destructuring
    // Destructuring arrays: It allows you to unpack values from an array into individual variables.
    const nums = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = nums; // 'first' is 1, 'second' is 2, and 'rest' contains [3, 4, 5]
    console.log(first, second); // Output: 1 2
    console.log(rest); // Output: [3, 4, 5]
    // Destructuring objects: You can unpack values from an object into variables.
    const person = {
        name: "John",
        age: 30,
        country: "USA",
    };
    // Destructuring the object into individual variables
    const { name, age, country } = person; // 'name' is "John", 'age' is 30, 'country' is "USA"
    console.log(name, age, country); // Output: John 30 USA
    // Destructuring with Renaming: You can rename the variables when destructuring.
    const { name: personName, age: personAge } = person;
    console.log(personName, personAge); // Output: John 30
    // Destructuring with Default Values: You can set default values if the property does not exist.
    const { address = "Not Provided" } = person; // If 'address' does not exist in 'person', it defaults to "Not Provided"
    console.log(address); // Output: Not Provided
}
