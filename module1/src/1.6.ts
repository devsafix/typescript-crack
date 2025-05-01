// learning function

// Normal function
// Arrow function

function add(a: number, b: number): number {
  return a + b;
}

// add(1, true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

add(1, 2); // 3

const addArrow = (a: number, b: number = 10): number => a + b;

addArrow(1); // 11
addArrow(1, 2); // 3

// object --> function = method

const obj = {
  name: "John",
  balance: 1000,
  // method
  addBalance: function (balance: number): string {
    return `my new balance is ${this.balance + balance}`;
  },
};

console.log(obj.addBalance(100)); // my new balance is 1100
// console.log(obj.addBalance(100, 200)); // Error: Expected 1 arguments, but got 2.

const arr: number[] = [1, 2, 3, 4, 5];

const newArr: number[] = arr.map((item: number): number => item * 2); // [2, 4, 6, 8, 10]
