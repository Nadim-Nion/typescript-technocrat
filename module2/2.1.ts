{
    // Type Assertion
    let anything: any;

    anything = "Next Level Web Development";

    // anything = true;

    // (anything as string)

    anything = 222;

    // (anything as number)

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The Converted Value is ${convertedValue}`;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
    }

    // kgToGm('222');
    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("1000") as string;

    type CustomError = {
        message: string;
    }

    try {

    }
    catch (error) {
        console.log((error as CustomError).message);
    }
}