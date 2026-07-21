class BankAccount {
  #balance;

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log('Deposit amount must be positive.');
      return;
    }
    this.#balance += amount;
    console.log(`${this.owner} deposited $${amount}.`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log('Withdrawal amount must be positive.');
      return;
    }
    if (amount > this.#balance) {
      console.log('Insufficient funds.');
      return;
    }
    this.#balance -= amount;
    console.log(`${this.owner} withdrew $${amount}.`);
  }

  getBalance() {
    return this.#balance;
  }

  }

const account = new BankAccount('Mohan', 100);
account.deposit(50);
account.withdraw(30);
console.log(`${account.owner}'s balance is $${account.getBalance()}.`);
