{
  //
  // Type guard using instanceof

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound(): void {
      console.log(`${this.name} makes a sound.`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log(`${this.name} barks.`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log(`${this.name} meaws.`);
    }
  }

  // smart way te handle the animal type
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    }
    animal.makeSound();
  };

  const dog = new Dog("Buddy", "Dog");
  const cat = new Cat("Whiskers", "Cat");

  getAnimal(dog); // Buddy barks. Buddy makes a sound.
  getAnimal(cat); // Whiskers meaws. Whiskers makes a sound.

  //
}
