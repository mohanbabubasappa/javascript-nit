class Account {
    #balance = 0
    deposit(amount) { if (amount > 0) this.#balance += amount }
    withdraw(amount) { if (amount > 0 && amount <= this.#balance) this.#balance -= amount }
    getBalance() { return this.#balance }
}
const account = new Account(); account.deposit(1000); account.withdraw(250); console.log(account.getBalance())
