{
  // object destructuring

  const user = {
    name: "John Doe",
    age: 30,
    address: {
      city: "New York",
      zip: "10001",
    },
    hobbies: ["reading", "traveling"],
    contactNo: "02113456789",
  };

  const {
    contactNo,
    address: { zip: zips },
  } = user; // destructuring assignment

  // array destructuring
  const hobbies = ["reading", "traveling", "swimming", "running"];
  const [, , loveIt] = hobbies; // destructuring assignment
  const [first, second, ...rest] = hobbies; // destructuring assignment
}
