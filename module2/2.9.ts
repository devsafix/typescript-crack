{
  // ------------------ Mapped Types in TypeScript ------------------

  // Basic Example: Mapping number array to string array
  const arrOfNumbers: number[] = [1, 2, 3, 4, 5];

  // Convert each number to a string using map
  const arrOfStrings: string[] = arrOfNumbers.map((num) => num.toString());

  // ------------------ Mapped Types with Objects ------------------

  // Original type with number values
  type AreaNumber = {
    height: number;
    width: number;
  };

  // Mapped type: transforms all properties to `string`
  type AreaString = {
    [K in keyof AreaNumber]: string;
  };

  // Resulting type:
  // type AreaString = {
  //   height: string;
  //   width: string;
  // }

  // ------------------ Generic Mapped Type ------------------

  // Reusable generic mapped type that mirrors structure of input type
  type CopyType<T> = {
    [K in keyof T]: T[K];
  };

  // Usage example
  const area1: CopyType<{
    height: string;
    width: number;
  }> = {
    height: "100", // string
    width: 50, // number
  };
}
