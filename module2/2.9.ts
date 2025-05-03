{
  //
  // mapped types

  const arrOfNumbers: number[] = [1, 2, 3, 4, 5];
  // const arrOfStrings: string[] = ['a', 'b', 'c', 'd', 'e'];
  // const arrOfBooleans: boolean[] = [true, false, true, false, true];

  const arrOfStrings: string[] = arrOfNumbers.map((num) => num.toString());

  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  type AreaString = {
    [K in keyof AreaNumber]: string; // mapped type
  };

  type AreaString2<T> = {
    [K in keyof T]: T[K];
  };
  const area1: AreaString2<{
    height: string;
    width: number;
  }> = {
    height: "100",
    width: 50,
  };

  //
}
