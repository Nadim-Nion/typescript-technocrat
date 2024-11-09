// Reference Type --> Object
const user: {
    firstName: string;
    middleName: string;
    lastName: string
} = {
    firstName: 'Nadim',
    middleName: 'Mahmud',
    lastName: 'Nion'
}


const anotherUser: {
    company: 'ECB'; // Literal Type
    firstName: string;
    middleName?: string; //Optional Properties
    lastName: string;
    readonly isMarried: boolean
} = {
    company: 'ECB',
    firstName: 'Joe',
    lastName: 'Root',
    isMarried: true
};

// anotherUser.isMarried = false;