class BankAccount {
  #balance = 0;
  owner = 'Mohan';

  deposit(amount) {
    if (amount <= 0) {
      console.log('Deposit amount must be positive.');
      return;
    }
    this.#balance += amount;
    console.log(`${this.owner} deposited $${amount}.`);
  }

  #withdraw(amount) {
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

  requestWithdrawal(amount) {
    this.#withdraw(amount);
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(50);
account.requestWithdrawal(30);
console.log(`${account.owner}'s balance is $${account.getBalance()}.`);
