{
  //
  // getter  and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    protected accountType: string;

    constructor(
      id: number,
      name: string,
      balance: number,
      accountType: string
    ) {
      this.id = id;
      this.name = name;
      this._balance = balance;
      this.accountType = accountType;
    }

    //   addDeposit(amount: number) {
    //     this._balance += amount;
    //   }

    // getter
    get balance() {
      return this._balance;
    }

    //   getBalance() {
    //     return this._balance;
    //   }

    // setter
    set balance(amount: number) {
      this._balance = amount;
    }
  }

  const goribManusherAccount = new BankAccount(
    1,
    "Gorib Manush",
    20,
    "Student"
  );

  //   goribManusherAccount.balance = 30; // Error: Property 'balance' is private and only accessible within class 'BankAccount'.

  //   goribManusherAccount.addDeposit(10); // OK
  //   console.log(goribManusherAccount.getBalance()); // 30

  goribManusherAccount.balance = 30; // OK
  console.log(goribManusherAccount.balance); // 30

  //
}
