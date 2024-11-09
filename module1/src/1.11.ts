{
    // Ternary operator
    const age: number = 18;

    if (age >= 18) {
        console.log('Adult');
    }
    else {
        console.log('Not Adult');
    }

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    // console.log({ isAdult });


    // Nullish Coalescing Operator
    // Null or Undefined --> decision making
    const isAuthenticated = '';

    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    // console.log({ result1 }, { result2 });


    // Optional chaining

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string
        }
    };

    const user: User = {
        name: 'Nion',
        address: {
            city: 'Gazipur',
            road: 'Main Road',
            presentAddress: 'Konabari'
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'Permanent address is not available';
    console.log({ permanentAddress });
}