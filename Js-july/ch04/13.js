// Program 73: Create a class with private properties using getters and setters.
class data {
  #balance;
  constructor(intial) {
    this.#balance = intial;
  }

  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    if (amount >= 0) {
      this.#balance += amount;
      console.log(`Success: Balance updated to $${amount}`);
    } else {
      console.log("Error: Balance cannot be negative!");
    }
  }
}

const account = new data(1000);
console.log("Initial Balance : ", account.balance);

account.balance = -5000;
console.log("New Balance:", account.balance);
