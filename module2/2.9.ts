{
    // Conditional Types

    // type A1 = null;
    type A1 = number;
    // type B1 = undefined;
    type B1 = string

    type X = A1 extends null ? true : false; // conditional type

    type Y = A1 extends null ? true : B1 extends undefined ? undefined : any;

    type Rich = {
        bike: string;
        car: string;
        ship: string;
        plane: string
    };

    type Vehicle<T> = T extends keyof Rich ? true : false;

    type AvailabilityChecking = Vehicle<"bicycle">
}