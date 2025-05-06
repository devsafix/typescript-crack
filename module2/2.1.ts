{
  // Demonstrating type assertions and type safety in TypeScript

  // Declare a variable with 'any' type
  let flexibleValue: any;

  // Assign different types of values to it
  flexibleValue = "hello world";
  flexibleValue = 123;

  // Function to convert kilograms to grams
  // Accepts a number or a string, returns a formatted string
  const convertKgToGrams = (input: number | string): string | undefined => {
    if (typeof input === "string") {
      const numericValue = parseFloat(input); // Convert string to number
      const grams = numericValue * 1000;
      return `The value is ${grams} grams`;
    }

    if (typeof input === "number") {
      const grams = input * 1000;
      return `The value is ${grams} grams`;
    }

    // Return undefined if input is neither number nor string (extra safety)
    return undefined;
  };

  // Example usage with type assertions
  const stringResult = convertKgToGrams("2.5") as string;
  console.log(stringResult); // Output: The value is 2500 grams

  const numericResult = convertKgToGrams(3) as string;
  console.log(numericResult); // Output: The value is 3000 grams

  // Define a custom error type
  type CustomError = {
    message: string;
  };

  // Example try-catch block using type assertion on error
  try {
    // Simulate an error (uncomment to test)
    // throw { message: "Something went wrong!" };
  } catch (error) {
    // Type assertion to treat error as CustomError
    console.log((error as CustomError).message);
  }
}
