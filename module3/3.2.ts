{
    // OOP (Inheritance)

    class Person {
        name: string;
        age: number;
        address: string

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }

        getSleep(numberOfHour: number) {
            console.log(`${this.name} will sleep for ${numberOfHour}`);
        }
    }

    class Student extends Person {

        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }


    const student1 = new Student('Nion', 26, 'Dhaka');
    // student1.getSleep(9);


    class Teacher extends Person {
        designation: string

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation
        }

        takeClass(numOfHour: number) {
            console.log(`${this.name} will take class for ${numOfHour} hours`);
        }
    }

    const teacher1 = new Teacher('Persian', 32, 'Chittagong', 'Mentor');

}