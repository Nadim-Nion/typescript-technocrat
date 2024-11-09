{
    // Generic with Interface
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        };
        smartWatch: T;
        bike?: X
    }

    type SamsungWatch = {
        brand: string;
        model: string;
        display: string
    }

    const poorDeveloper: Developer<SamsungWatch> = {
        name: 'Nion',
        computer: {
            brand: 'HP',
            model: 'X-255UR',
            releaseYear: 2013
        },
        smartWatch: {
            brand: 'Samsung Watch',
            model: 'kw66',
            display: '0LED'
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartBeatTrack: boolean;
        sleepTrack: boolean
    }

    interface RoyalEnfieldBike {
        model: string;
        engineCapacity: string
    }

    const richDeveloper: Developer<AppleWatch, RoyalEnfieldBike> = {
        name: 'Alice',
        computer: {
            brand: 'MacBook',
            model: 'X-255UR',
            releaseYear: 2019
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'kw66',
            heartBeatTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'Royal Enfield',
            engineCapacity: '100cc'
        }
    }
}