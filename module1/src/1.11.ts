{
  //
  // ternary operator || optional chaining || nullish coalescing

  const age: number = 18;

  if (age >= 18) {
    console.log("You are an adult");
  } else {
    console.log("You are not an adult");
  }

  const isAdult = age >= 18 ? "You are an adult" : "You are not an adult";
  console.log(isAdult);

  //   nullish coalescing operator
  const isAuthenticated = null;
  const isAuthenticated2 = undefined;

  const result = isAuthenticated ?? "guest";
  console.log(result); // guest
  const result2 = isAuthenticated2 ?? "un guest";
  console.log(result2); // guest

  const isAuthenticated3 = false;
  const result3 = isAuthenticated3 ?? "guest";
  console.log(result3); // false

  type User = {
    name: string;
    address: {
      city: string;
      country: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "John Doe",
    address: {
      city: "New York",
      country: "USA",
      presentAddress: "123 Main St",
      permanentAddress: undefined, // optional property
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log(permanentAddress); // No permanent address
  //
}
