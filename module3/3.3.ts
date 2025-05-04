{
  //
  // Type guard using typeOf and in

  // typeOf
  type Alphanumeric = string | number;

  const add = (a: Alphanumeric, b: Alphanumeric): Alphanumeric => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
      return a + b;
    } else {
      throw new Error("Invalid input types");
    }
  };

  console.log(add(1, 2)); // 3
  console.log(add("Hello", "World")); // HelloWorld

  // in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`Admin user: ${user.name}, Role: ${user.role}`);
    } else {
      console.log(`Normal user: ${user.name}`);
    }
  };

  const user1: NormalUser = { name: "John" };
  const user2: AdminUser = { name: "Jane", role: "admin" };
  getUser(user1); // Normal user: John
  getUser(user2); // Admin user: Jane, Role: admin

  //
}
