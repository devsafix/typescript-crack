{
  //
  // access modifiers
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

    addDeposit(amount: number) {
      this._balance += amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(
    1,
    "Gorib Manush",
    20,
    "Student"
  );

  //   goribManusherAccount.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

  goribManusherAccount.name = "Gorib Manush 2"; // OK

  //   goribManusherAccount.balance = 30; // Error: Property 'balance' is private and only accessible within class 'BankAccount'.

  goribManusherAccount.addDeposit(10); // OK
  console.log(goribManusherAccount.getBalance()); // 30

  class StudentAccount extends BankAccount {
    test() {
      this.accountType = "Student"; // OK
    }
  }

  //
}
