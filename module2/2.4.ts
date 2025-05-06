{
  // ------------------ Generics with Interfaces in TypeScript ------------------

  // Define a generic interface for a Developer
  // T = SmartWatch type, X = Bike type (optional, defaults to null)
  interface Developer<T, X = null> {
    name: string;
    computer: {
      cpu: string;
      ram: number;
    };
    smartWatch: T;
    bike?: X; // Optional property
  }

  // Define a basic smartwatch type
  type BasicSmartWatch = {
    brand: string;
    model: string;
    display: string;
  };

  // Create a Developer using a basic smartwatch, no bike included
  const juniorDeveloper: Developer<BasicSmartWatch> = {
    name: "John Doe",
    computer: {
      cpu: "Intel i7",
      ram: 16,
    },
    smartWatch: {
      brand: "Fokira",
      model: "Watch Series 0",
      display: "1.5 inch",
    },
  };

  // Define a more advanced smartwatch interface
  interface AdvancedSmartWatch {
    brand: string;
    model: string;
    display: string;
    heartTracker: boolean;
    bloodOxygen: boolean;
  }

  // Define a bike interface
  interface Motorbike {
    brand: string;
    model: string;
    cc: number;
  }

  // Create a Developer using an advanced smartwatch and a bike
  const seniorDeveloper: Developer<AdvancedSmartWatch, Motorbike> = {
    name: "KK Kawser",
    computer: {
      cpu: "Intel i7",
      ram: 16,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch Series 7",
      display: "1.5 inch",
      heartTracker: true,
      bloodOxygen: true,
    },
    bike: {
      brand: "Yamaha",
      model: "R15",
      cc: 155,
    },
  };
}
