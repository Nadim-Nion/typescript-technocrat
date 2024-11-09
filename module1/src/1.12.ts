{
    // Nullable Type
    const search = (value: string | null) => {
        if (value) {
            console.log('Searching');
        }
        else {
            console.log('There is nothing to search');
        }
    }

    search(null);

    // unknown type
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} m/s`);
        }

        else if (typeof value === 'string') {
            // const valueInNumber = value.split(' ');
            const [result, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} m/s`);
        }

        else {
            console.log('Wrong input');
        }
    };

    getSpeedInMeterPerSecond(null);


    // never type

    const throwError = (msg: string): never => {
        throw new Error(msg);
    };

    throwError('This is a custom error');
}