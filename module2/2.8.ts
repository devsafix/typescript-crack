{
  // ------------------ Conditional Types in TypeScript ------------------

  // ----------- Example 1: Comparing null and undefined -----------

  type A1 = null;
  type B1 = undefined;

  // Conditional type check
  type C1 = A1 extends B1 ? true : false; // false
  type C2 = B1 extends A1 ? true : false; // true

  // Explanation:
  // - `null` does not extend `undefined`
  // - `undefined` is more loosely typed and can be assignable in some cases

  // ----------- Example 2: Conditional Type with keyof -----------

  // Define an object with known keys
  type Shiekh = {
    bike: string;
    car: string;
    bus: string;
  };

  // Generic type to check if a value is a key of Shiekh
  type CheckVehicle<T> = T extends keyof Shiekh ? true : false;

  // Type checks
  type CheckCar = CheckVehicle<"car">; // true
  type CheckBike = CheckVehicle<"bike">; // true
  type CheckShip = CheckVehicle<"ship">; // false (not a key in Shiekh)

  // You can use this kind of conditional typing to create safer APIs or validate inputs at compile-time
}
