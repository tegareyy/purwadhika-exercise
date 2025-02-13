// ------------
// EXERCISE 1
// ------------
const calcStudents = (s: { score: number }[]) => {
  const scores = s.map((x) => x.score);
  return { max: Math.max(...scores), min: Math.min(...scores), avg: scores.reduce((a, b) => a + b) / s.length };
};
console.log(calcStudents([{ score: 85 }, { score: 92 }, { score: 78 }]));

const processStudents = (students: { name: string; email: string; age: Date; score: number }[]) => {
  const scores = students.map((s) => s.score);
  return { highest: Math.max(...scores), lowest: Math.min(...scores), average: scores.reduce((a, b) => a + b) / students.length };
};
console.log(
  processStudents([
    { name: "tukul", email: "tuk@mail.com", age: new Date(2000, 5, 15), score: 85 },
    { name: "gama", email: "gam@mail.com", age: new Date(2003, 2, 10), score: 60 },
  ])
);

// -----------
// EXERCISE 2
// -----------
class Product {
  constructor(public name: string, public price: number) {}
}

class Transaction {
  private cart: { product: Product; qty: number }[] = [];
  private total: number = 0;

  addToCart(product: Product, qty: number) {
    this.cart.push({ product, qty });
    this.total += product.price * qty;
  }

  showTotal() {
    return this.total;
  }

  checkout() {
    return { total: this.total, products: this.cart };
  }
}
const pro1 = new Product("Laptop", 1500);
const pro2 = new Product("Mouse", 50);

const tra = new Transaction();
tra.addToCart(pro1, 1);
tra.addToCart(pro2, 2);

console.log(tra.showTotal());
console.log(tra.checkout());
