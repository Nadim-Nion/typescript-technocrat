{
    // Generic Types

    type GenericArray<T> = Array<T>;

    // const rollNumber: number[] = [3, 6, 8];
    const rollNumber: GenericArray<number> = [3, 6, 8];

    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    const mentors: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    /* type User = {
        name: string;
        age: number
    } */

    interface User {
        name: string;
        age: number
    }

    const user: GenericArray<User> = [
        {
            name: 'Nion',
            age: 26
        },
        {
            name: 'Alice',
            age: 30
        }
    ]

    // Generic Tuple
    type GenericTuple<X, Y> = [X, Y];

    // const male: [string, string] = ['Mr. X', 'Mrs. Y'];
    const male: GenericTuple<string, string> = ['Mr. X', 'Mrs. Y'];

    // const userWithId: [number, {name: string, email: string}] = [123, { name: 'Nion', email: 'nion@gmail.com' }]
    const userWithId: GenericTuple<number, { name: string, email: string }> = [123, { name: 'Nion', email: 'nion@gmail.com' }]

}