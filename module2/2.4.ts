{
  //

  // Generic with interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      cpu: string;
      ram: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type SmartWatch1 = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<SmartWatch1> = {
    name: "John Doe",
    computer: {
      cpu: "i7",
      ram: 16,
    },
    smartWatch: {
      brand: "Fokira",
      model: "Watch Series 0",
      display: "1.5 inch",
    },
  };

  interface SmartWatch2 {
    brand: string;
    model: string;
    display: string;
    heartTracker: boolean;
    bloodOxygen: boolean;
  }

  interface Bike {
    brand: string;
    model: string;
    cc: number;
  }

  const richDeveloper: Developer<SmartWatch2, Bike> = {
    name: "KK Kawser",
    computer: {
      cpu: "i7",
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

  //
}
