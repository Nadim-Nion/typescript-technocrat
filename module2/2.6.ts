{
    // Constraints in TS
    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = "Next Level Web Development";

        return {
            ...student,
            course
        }
    }

    /* type Student = {
        id: number;
        name: string;
        email: string;
        devType?: string;
        hasWatch?: string
    } */

    const student1 = addCourseToStudent({ id: 222, name: 'Nion', email: 'nion@gmail.com', devType: 'intermediate' });

    const student2 = addCourseToStudent({ id: 333, name: 'Alice', email: 'alice@gmail.com', hasWatch: 'Apple Watch' });

    // const student3 = addCourseToStudent({ movie: 'Interception' });
    const student3 = addCourseToStudent({ id: 444, name: 'Monica', email: 'monica@gmail.com', movie: 'Interception' });
}