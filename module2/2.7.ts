{
    // Generic Constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship"; // manually

    type Owner2 = keyof Vehicle;
    const person: Owner2 = "bike"


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: 'Nion',
        age: 26,
        address: 'Dhaka'
    }

    const movie = {
        movieName: 'Inception',
        releaseYear: 2010
    }

    const result1 = getPropertyValue(user, "name");



}