{
    // Function with Generics

    const createArray = (param: string): string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const result1 = createArray('Bangladesh');
    const resultGeneric = createArrayWithGeneric<string>('India');

    type User = {
        id: number;
        name: string
    }

    const resultGenericObj = createArrayWithGeneric<User>({ id: 222, name: 'Nion' });



    // Tuple

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }

    const result2 = createArrayWithTuple<string, number>('Bangladesh', 1971);
    const resultGeneric2 = createArrayWithTuple<string, { yearOfIndependence: number }>('India', { yearOfIndependence: 1947 });


    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development";

        return {
            ...student,
            course
        }
    }

    type Student = {
        name: string;
        email: string;
        devType?: string;
        hasWatch?: string
    }

    const student1 = addCourseToStudent<Student>({ name: 'Nion', email: 'nion@gmail.com', devType: 'intermediate' });

    const student2 = addCourseToStudent<Student>({ name: 'Alice', email: 'alice@gmail.com', hasWatch: 'Apple Watch' })

}