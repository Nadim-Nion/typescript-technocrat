{
    // Utility Types

    // pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">

    // omit
    type ContactInfo = Omit<Person, "name" | "age">

    // Required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    const person1: Person = {
        name: 'Nion',
        age: 26,
        contactNo: '01638294378'
    }

    person1.name = 'Nion Khan'

    type PersonReadonly = Readonly<Person>

    const person2: PersonReadonly = {
        name: 'Nion',
        age: 26,
        contactNo: '01638294378'
    }

    // person2.name = 'Nion Khan'

    // Record Type

    /* type MyObj = {
        a: string;
        b: string
    } */

    type MyObj = Record<string, string>

    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 'dd'
    }

    const emptyObj: Record<string, unknown> = {}
}