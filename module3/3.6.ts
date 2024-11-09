{
    // getter and setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        /* addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance;
        } */

        // Setter
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // Getter
        get balance() {
            return this._balance;
        }
    }

    const poorPersonAccount = new BankAccount(123, 'Alice', 20);
    // poorPersonAccount.balance = 0;
    // poorPersonAccount.addDeposit(100);
    // poorPersonAccount.id = 124;
    // const balance = poorPersonAccount.getBalance();

    poorPersonAccount.deposit = 80;

    const balance = poorPersonAccount.balance;
    console.log(balance);
}