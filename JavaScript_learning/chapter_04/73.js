// Program 73: Create a class with private properties using getters and setters.
class BankAccount {
  //private property
  #balance;

  constructor(initialDeposit) {
    this.#balance = initialDeposit;
  }

  // 2. GETTER: Private balance ko dekhne ke liye
  get balance() {
    return this.#balance;
  }

  // 3. SETTER: Balance ko change karne ke liye
  set balance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
      console.log(`Success: Balance updated to $${amount}`);
    } else {
      console.log("Error: Balance cannot be negative!");
    }
  }
}

const myAccount = new BankAccount(100);

// Getter ka use  ( isme () nahi lagaya jata)
console.log("Initial Balance:", myAccount.balance);

// Setter ka use
myAccount.balance = 250;
console.log("New Balance:", myAccount.balance);

myAccount.balance = -50;
console.log("Balance after error test:", myAccount.balance);
