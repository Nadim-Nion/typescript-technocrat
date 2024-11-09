{
    // Spread Operator
    // Rest Operator
    // Destructuring
    const poorUser = {
        name: 'Mr. X'
    }

    // Learn Spread Operator

    const bros1: string[] = ['Nion', 'Joe', 'Stokes'];
    const bros2: string[] = ['Donald', 'Micheal', 'Trot'];
    bros1.push(...bros2);

    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmay',
        cloud: 'Nahid'
    };

    const mentorsList = { ...mentors1, ...mentors2 };

    // Rest Operator
    const greetFriends = (friend1: string, friend2: string, friend3: string): string => {
        const result = `Hi ${friend1}, ${friend2} & ${friend3}`;
        console.log(result);
        return result;
    };

    greetFriends('Joe', 'Frank', 'Root');

    const greeting = (...friends: string[]) => {
        const result = friends.forEach((friend: string): string => {
            const output = `Hi ${friend}`;
            console.log(output);
            return output;
        })
    };

    greeting('Joe', 'Root', 'Ben', 'Stokes')
}