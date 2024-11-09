{
    // Learning Function
    /* 
    There are two types of function
    1. Traditional Function
    2. Arrow Function
    */

    function add(num1: number, num2: number = 10): number {
        return num1 + num2;
    };

    add(2, 3);


    const addArrow = (num1: number, num2: number): number => num1 + num2;


    // If a function is declared inside an object is called method
    const poorUser = {
        name: 'Nion',
        balance: 0,
        addBalance(balance: number): number {
            return this.balance + balance;
        }
    };

    const array = [1, 5, 10];
    const newArray: number[] = array.map((element: number): number => element * element);
}