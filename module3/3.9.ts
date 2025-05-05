{
  //
  // Abstractions

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   const vehicle1: Vehicle1 = {
  //     name: "Car",
  //     model: "Toyota",
  //   };

  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("Engine started");
    }
    stopEngine(): void {
      console.log("Engine stopped");
    }
    move(): void {
      console.log("Car is moving");
    }
    test(): void {
      console.log("Test method");
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.move();
  toyotaCar.test();

  // abstract class
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    // common method
    test(): void {
      console.log("Test method from Vehicle2");
    }
  }

  class Honda extends Vehicle2 {
    startEngine(): void {
      console.log("Honda engine started");
    }
    stopEngine(): void {
      console.log("Honda engine stopped");
    }
    move(): void {
      console.log("Honda is moving");
    }
  }

  const hondaCar = new Honda();
  hondaCar.startEngine();
  hondaCar.stopEngine();
  hondaCar.move();
  hondaCar.test(); // This will work because test() is defined in the abstract class Vehicle2

  //
}
