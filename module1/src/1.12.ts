{
  //

  // nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("not searching");
    }
  };

  searchName("John Doe"); // searching
  searchName(null); //  not searching
  searchName(""); // not searching

  // unknown type
  const getSpeedMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedValue = (value * 1000) / 3600;
      console.log(`Speed in m/s: ${convertedValue}`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedValue = (parseFloat(result) * 1000) / 3600;
      console.log(convertedValue);
    } else {
      console.log("Invalid value");
    }
  };
  getSpeedMeterPerSecond(100); // Speed in m/s: 27.77777777777778
  getSpeedMeterPerSecond("100 km/h"); // Speed in m/s: 27.77777777777778
  //
  getSpeedMeterPerSecond(null); // Invalid value

  //   never
  function throwError(message: string): never {
    throw new Error(message);
  }

  throwError("This is an error"); // This will throw an error and stop the execution of the program
}
