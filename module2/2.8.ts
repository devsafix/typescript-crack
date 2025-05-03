{
  //
  // condition type
  type a1 = null;
  type b1 = undefined;

  type c1 = a1 extends b1 ? true : false; // false
  type c2 = b1 extends a1 ? true : false; // true

  type Shiekh = {
    bike: string;
    car: string;
    bus: string;
  };

  type CheckVehicle<T> = T extends keyof Shiekh ? true : false;
  type CheckCar = CheckVehicle<"car">; // true
  type CheckBike = CheckVehicle<"bike">; // true
  type CheckBus = CheckVehicle<"ship">; // false

  //
}
