{
    // Object Destructuring
    const user = {
        id: 345,
        name: {
            firstName: 'Nadim',
            middleName: 'Mahmud',
            lastname: 'Nion'
        },
        contactNo: '01646277289219',
        address: 'Dhaka'
    };

    const { contactNo, name: { middleName: midName } } = user;

    // Array Destructuring
    const myFriends = ['Chandler', 'Joey', 'Ross', 'Rachel', 'Monica', 'Phoebe'];
    const [, , bestFriend, ...rest] = myFriends;
}