// Write a code to check whether the number is odd or even
/* Example: 25 → odd number, 2 → even number */
const number = 25;
if (number % 2 === 0) {
  console.log(`${number} -> Even number`);
} else {
  console.log(`${number} -> Odd number`);
}

console.log(number);

// Write a code to check whether the number is prime number or not
/* Example: 7 → 7 is a prime number, Example: 6 → 6 is not a prime number */
function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

const numbCheck = [7, 6, 2, 1, 9];
numbCheck.forEach((num) => {
  console.log(`${num} → ${isPrime(num) ? "is a prime" : "is not a prime"}`);
});

// Write a code to find the sum of the numbers 1 to N
/* Example: 5 → 1 + 2 + 3 + 4 + 5 = 15, Example: 3 → 1 + 2 + 3 = 6 */
function nLoop(n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(nLoop(5));
console.log(nLoop(3));

// Write a code to find factorial of a number
/* Example: 4! → 4 x 3 x 2 x 1 = 24, Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720 */
function factorial(n: number): number {
  if (n < 0) throw new Error("Negative not allowed");
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(1));

// Write a code to print the first N fibonacci numbers
/* Example: 15 → 610 */
function fibonacci(n: number): number {
  if (n <= 0) throw new Error("Input harus bilangan positif");
  if (n === 1 || n === 2) return 1;

  let prev = 1,
    current = 1;
  for (let i = 3; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  return current;
}
console.log(fibonacci(15));
