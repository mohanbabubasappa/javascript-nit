class BankAccount {
    constructor(balance = 0) { this.balance = balance }
    deposit(amount) { this.balance += amount }
    withdraw(amount) { if (amount <= this.balance) this.balance -= amount; else console.log("Insufficient balance") }
    displayBalance() { console.log("Balance:", this.balance) }
}
const account = new BankAccount(1000)
account.deposit(500); account.withdraw(300); account.displayBalance()
