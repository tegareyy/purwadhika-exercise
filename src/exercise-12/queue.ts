class FoodQueue {
    private queue: { order: string, time: number }[] = [];

    addOrder(order: string) {
        const time = Math.floor(Math.random() * 10) + 1; // 1-10 detik
        this.queue.push({ order, time });
        console.log(`Order added: ${order}`);
    }

    printQueue() {
        console.log("Current Queue:", this.queue.map(q => q.order));
    }

    async processOrders() {
        while (this.queue.length) {
            const { order, time } = this.queue.shift()!;
            console.log(`Processing: ${order}`);
            await new Promise(res => setTimeout(res, time * 1000));
            console.log(`Queue ${order} Done in ${time} seconds`);
        }
        console.log("All orders processed!");
    }
}

export default FoodQueue;