{
    // Asynchronous TypeScript
    // Basic Promise

    type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }

    const getTodo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        // console.log(data);
        return data;
    };

    getTodo();

    type Something = { something: string };

    // Promise Declaration
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            // const data: string = 'Something';
            // const data: boolean = true;
            const data: Something = { something: 'something' };
            // const data = null;
            if (data) {
                resolve(data);
            }
            else {
                reject('Failed to load');
            }
        });
    };

    // Promise Calling
    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        return data;
        // console.log(data);
    };

    showData();
}