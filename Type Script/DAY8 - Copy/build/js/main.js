"use strict";
class FinanceManager {
    expenses;
    incomes;
    transactions = [];
    constructor(incomes, expenses) {
        this.expenses = expenses;
        this.incomes = incomes;
    }
    getTotal(data) {
        let ans = Object.values(data).reduce((a, b) => a + b, 0);
        return ans;
    }
    showExpenses() {
        console.log(`EXPENSES`);
        for (const key in this.expenses) {
            console.log(`${key} ->  ${this.expenses[key]}  `);
        }
    }
    showIncomes() {
        console.log(`INCOMES`);
        for (const key in this.incomes) {
            console.log(`${key} ->  ${this.incomes[key]}  `);
        }
    }
    get netbalance() {
        return this.getTotal(this.incomes) - this.getTotal(this.expenses);
    }
    addIncomes(id, category, amount) {
        this.incomes[category] += amount;
        this.transactions.push({
            id,
            amount,
            category,
            type: 'income'
        });
    }
    addExpenses(id, category, amount) {
        this.expenses[category] += amount;
        this.transactions.push({
            id,
            amount,
            category,
            type: 'expense'
        });
    }
    getTransactions() {
        return this.transactions;
    }
}
const user = new FinanceManager({ salary: 500000000, bonus: 5000000000, freelance: 5000000000 }, { food: 100000000, rent: 100000000, travelling: 1000000000 });
console.log(user.netbalance);
user.showExpenses();
user.showIncomes();
