{
    // Statics
    class Counter {
        static count: number = 0;

        static increase() {
            return (Counter.count = Counter.count + 1);
        }

        static decrease() {
            return (Counter.count = Counter.count - 1);
        }
    }

    /* const instance1 = new Counter();
    console.log(instance1.increase()); */
    console.log(Counter.increase());

    /*  const instance2 = new Counter();
     console.log(instance2.increase()); */
    console.log(Counter.increase());
}