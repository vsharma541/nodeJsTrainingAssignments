class Account {
    constructor(public id: number, public cust: string, public balance: number) {
        this.id = id;
        this.cust = cust;
        this.balance = balance;
    }
}
class SavingAccount extends Account {
    constructor(public id: number, public cust: string, public balance: number, public interest: number) {
        super(id, cust, balance);
        this.interest = interest;
    }
    totalBalance(): number {
        return (this.balance + (this.balance * this.interest)/100);
    }
}
class CurrentAccount extends Account {
    constructor(public id: number, public cust: string, public balance: number, public cash_credit: number) {
        super(id, cust, balance);
        this.cash_credit = cash_credit;
    }
    totalBalance(): number {
        return (this.balance + this.cash_credit);
    }
}
let cust1 = new SavingAccount(123, "Ram", 1000, 10);
let cust2 = new CurrentAccount(234, "Jane", 2000, 200);
console.log(cust1.totalBalance());
console.log(cust2.totalBalance());

export {}