{
    // Type Guard

    // TypeGuard using typeof
    type Alphaneumaric = string | number;

    const add = (param1: Alphaneumaric, param2: Alphaneumaric): Alphaneumaric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }

    };

    const result1 = add(2, 3);
    const result2 = add('2', '3');
    console.log(result1, result2);


    // Type guard using in
    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: string
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} & my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: 'Nion',
    }

    const adminUser: AdminUser = {
        name: 'Donald Trump',
        role: 'Admin'
    }

    getUser(normalUser);
    getUser(adminUser);
}