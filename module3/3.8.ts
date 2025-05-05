{
  //
  // Polymorphism

  class Person {
    getSleep() {
      console.log("Sleeping 8 hours");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("Sleeping 6 hours");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("Sleeping 5 hours");
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1); // Sleeping 8 hours
  getSleepingHours(person2); // Sleeping 6 hours
  getSleepingHours(person3); // Sleeping 5 hours

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Square extends Shape {
    side: number;
    constructor(side: number) {
      super();
      this.side = side;
    }
    getArea(): number {
      return this.side * this.side;
    }
  }

  const getShapeArea = (shape: Shape) => {
    console.log(shape.getArea());
  };

  getShapeArea(new Circle(5)); // 78.53981633974483
  getShapeArea(new Square(5)); // 25

  //
}
