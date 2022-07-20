"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Account = /** @class */ (function () {
    function Account(id, cust, balance) {
        this.id = id;
        this.cust = cust;
        this.balance = balance;
        this.id = id;
        this.cust = cust;
        this.balance = balance;
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, cust, balance, interest) {
        var _this = _super.call(this, id, cust, balance) || this;
        _this.id = id;
        _this.cust = cust;
        _this.balance = balance;
        _this.interest = interest;
        _this.interest = interest;
        return _this;
    }
    SavingAccount.prototype.totalBalance = function () {
        return (this.balance + (this.balance * this.interest) / 100);
    };
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, cust, balance, cash_credit) {
        var _this = _super.call(this, id, cust, balance) || this;
        _this.id = id;
        _this.cust = cust;
        _this.balance = balance;
        _this.cash_credit = cash_credit;
        _this.cash_credit = cash_credit;
        return _this;
    }
    CurrentAccount.prototype.totalBalance = function () {
        return (this.balance + this.cash_credit);
    };
    return CurrentAccount;
}(Account));
var cust1 = new SavingAccount(123, "Ram", 1000, 10);
var cust2 = new CurrentAccount(234, "Jane", 2000, 200);
console.log(cust1.totalBalance());
console.log(cust2.totalBalance());
//# sourceMappingURL=q8.js.map