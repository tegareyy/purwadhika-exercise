import FoodQueue from "./queue";

const queue = new FoodQueue();
queue.addOrder("Burger");
queue.addOrder("Pizza");
queue.addOrder("Sushi");
queue.addOrder("Pasta");

queue.printQueue();
queue.processOrders();
