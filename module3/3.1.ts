{
  //
  // oop - class

  class Animal {
    // public name: string;
    // public species: string;
    // private sound: string;

    constructor(
      public name: string,
      public species: string,
      private sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`${this.name} the ${this.species} says ${this.sound}`);
    }
  }

  const dog = new Animal("Rex", "dog", "woof");
  const cat = new Animal("Mittens", "cat", "meow");

  dog.makeSound(); // Rex the dog says woof
  cat.makeSound(); // Mittens the cat says meow

  //
}
