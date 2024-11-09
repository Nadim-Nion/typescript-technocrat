{
    // Type Alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string
    }

    const student1: Student = {
        name: 'Nion',
        age: 26,
        gender: 'Male',
        contactNo: '0164627289',
        address: 'Dhaka'
    };


    const student2: Student = {
        name: 'Shuvo',
        age: 18,
        gender: 'Male',
        address: 'Gazipur'
    }

    const student3: Student = {
        name: 'Mim',
        age: 18,
        gender: 'Female',
        address: 'Gazipur'
    }

    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = 'Nion';
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;
}