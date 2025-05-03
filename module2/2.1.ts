{
  //
  // Type assertions
  let anything: any;

  anything = "hello world";
  anything = 123;

  // (anything as string).
  // (anything as number).

  const kgToGm = (value: number | string): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The value is ${convertedValue} grams`;
    }
    if (typeof value === "number") {
      const convertedValue = value * 1000;
      return `The value is ${convertedValue} grams`;
    }
  };
  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm(1000) as string;

  type CustomError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
