class Payment { pay(amount) { console.log(`Paid ${amount}`) } }
class CardPayment extends Payment { pay(amount) { console.log(`Card payment: ${amount}`) } }
class CashPayment extends Payment { pay(amount) { console.log(`Cash payment: ${amount}`) } }
class UpiPayment extends Payment { pay(amount) { console.log(`UPI payment: ${amount}`) } }
for (const payment of [new CardPayment(), new CashPayment(), new UpiPayment()]) payment.pay(500)
