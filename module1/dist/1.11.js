"use strict";
var _a, _b;
{
    // Ternary Operator, Optional Chaining, and Nullish Coalescing
    // 1. Ternary Operator: a shorthand for if-else statements
    const age = 18;
    // Using an if-else statement to check if the user is an adult
    if (age >= 18) {
        console.log("You are an adult");
    }
    else {
        console.log("You are not an adult");
    }
    // Using a ternary operator to achieve the same result
    const isAdult = age >= 18 ? "You are an adult" : "You are not an adult";
    console.log(isAdult); // Output: You are an adult
    // 2. Nullish Coalescing Operator (??): Returns the right-hand operand when the left-hand operand is null or undefined
    const isAuthenticated = null; // This can be null or undefined
    const isAuthenticated2 = undefined;
    // If 'isAuthenticated' is null or undefined, fallback to "guest"
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "guest";
    console.log(result); // Output: guest
    // Similarly for 'isAuthenticated2'
    const result2 = isAuthenticated2 !== null && isAuthenticated2 !== void 0 ? isAuthenticated2 : "un guest";
    console.log(result2); // Output: un guest
    // For non-nullable values like 'false', the nullish coalescing operator does not apply
    const isAuthenticated3 = false; // Explicitly 'false' (not null or undefined)
    const result3 = isAuthenticated3 !== null && isAuthenticated3 !== void 0 ? isAuthenticated3 : "guest";
    console.log(result3); // Output: false
    // Example user object with an optional 'permanentAddress'
    const user = {
        name: "John Doe",
        address: {
            city: "New York",
            country: "USA",
            presentAddress: "123 Main St",
            permanentAddress: undefined, // optional property, can be null or undefined
        },
    };
    // Using optional chaining to safely access 'permanentAddress'
    // If 'permanentAddress' is undefined or null, it returns the fallback value 'No permanent address'
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanent address";
    console.log(permanentAddress); // Output: No permanent address
}
