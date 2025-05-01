"use strict";
{
    // Nullable Types in TypeScript
    // Function accepting a string or null
    const searchName = (value) => {
        // Checking if the value is truthy (not null, undefined, or empty string)
        if (value) {
            console.log("searching");
        }
        else {
            console.log("not searching");
        }
    };
    searchName("John Doe"); // Output: searching (because it's a non-empty string)
    searchName(null); // Output: not searching (because it's null)
    searchName(""); // Output: not searching (because it's an empty string)
    // -----------------------------------
    // Unknown Type in TypeScript
    // Function that accepts an unknown type and processes it based on its type
    const getSpeedMeterPerSecond = (value) => {
        // First, check if the value is a number
        if (typeof value === "number") {
            const convertedValue = (value * 1000) / 3600; // Converting km/h to m/s
            console.log(`Speed in m/s: ${convertedValue}`);
        }
        // If it's a string, parse the value
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedValue = (parseFloat(result) * 1000) / 3600; // Converting km/h to m/s
            console.log(`Speed in m/s: ${convertedValue}`);
        }
        // If it's neither a string nor a number, it's an invalid value
        else {
            console.log("Invalid value");
        }
    };
    // Valid cases
    getSpeedMeterPerSecond(100); // Output: Speed in m/s: 27.77777777777778
    getSpeedMeterPerSecond("100 km/h"); // Output: Speed in m/s: 27.77777777777778
    // Invalid case (because null is neither a string nor a number)
    getSpeedMeterPerSecond(null); // Output: Invalid value
    // -----------------------------------
    // Never Type in TypeScript
    // Function that throws an error and never returns
    function throwError(message) {
        throw new Error(message); // The function does not return; it throws an error
    }
    // This will throw an error and stop the execution of the program
    throwError("This is an error"); // Uncaught Error: This is an error
}
