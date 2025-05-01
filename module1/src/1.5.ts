{
  // reference type --> Object

  const user: {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
  } = {
    firstName: "Dev",
    lastName: "Safi",
    age: 20,
    email: "devsafi@gmail.com",
  };

  const user2: {
    company: "DevSafi"; // literal type
    readonly address: string; // readonly type
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // optional type
  } = {
    company: "DevSafi",
    address: "123 Main St",
    firstName: "Dev",
    lastName: "Safi",
    age: 20,
  };

  // user2.address = "tangail"; // Error: Cannot assign to 'address' because it is a read-only property.
}
