{
    // Type guard using instanceof
    class Animal {
        name: string;
        species: string

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        };

        makeSound() {
            console.log('I am making a sound');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        };

        makeBarking() {
            console.log('I am barking');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        };

        makeMewing() {
            console.log('I am mewing');
        }
    }

    const dog = new Dog('German Shepard', 'Dog');
    const cat = new Cat('Persian Cat', 'Cat');

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }


    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBarking();
        }
        else if (isCat(animal)) {
            animal.makeMewing();
        }
        else {
            animal.makeSound()
        }
    }

    getAnimal(dog);




}