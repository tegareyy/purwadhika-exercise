// Exercise 0
function padNumber(num: number): string {
  return (num < 10 ? "0" : "") + num;
}

function createPattren(height: number): void {
  let num = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += padNumber(num) + " ";
      num++;
    }
    console.log(row.trim());
  }
}
createPattren(4);

// Exercise 2
function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(6);
fizzBuzz(15);

// Exercise 3
function calculateBMI(weight: number, height: number): string {
  const bmi = weight / (height * height);
  if (bmi < 18.5) return "less weight";
  if (bmi >= 18.5 && bmi <= 24.9) return "ideal";
  if (bmi >= 25.0 && bmi <= 29.9) return "overweight";
  if (bmi >= 30.0 && bmi <= 39.9) return "very overweight";
  return "obesity";
}
console.log(calculateBMI(120, 2));

// Exercise 4
function removeOdd(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}
console.log(removeOdd([1, 2, 3, 4, 5, 6, 7, 8]));

// Exercise 5
const split = (str: string) => str.split(" ");
console.log(split("Hello world"));
