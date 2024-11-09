{

    // Interface
    type User1 = {
        name: string;
        age: number
    }

    interface User2 {
        name: string;
        age: number
    }

    type RollNumber = string;

    type UserWithRole1 = User1 & { role: string };

    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user1: UserWithRole1 = {
        name: 'Nion',
        age: 26,
        role: 'Unemployed'
    }

    const user2: UserWithRole2 = {
        name: 'Nion',
        age: 26,
        role: 'Unemployed'
    }


    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number
    }

    const rollNumber: Roll2 = [1, 2, 3];

    type Add1 = (num1: number, num2: number) => number;

    interface Add {
        (num1: number, num2: number): number
    }

    const add: Add1 = (num1, num2) => num1 + num2;

}