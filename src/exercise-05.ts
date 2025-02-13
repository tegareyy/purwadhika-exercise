// ------------
// EXERCISE 1
// ------------

/* 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx} */
const getSort = (arr: number[]) => {
  arr.sort((a, b) => a - b);
  const lowest = arr[0];
  const highest = arr[arr.length - 1];
  const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;

  return { lowest, highest, average };
};
console.log(getSort([53, 33, 2, 3, 531, 56, 22, 29]));

/* 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'. a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date” */
const joinKata = (arr: string[]): string => (arr.length > 1 ? arr.slice(0, -1).join(",") + ", and " + arr[arr.length - 1] : arr[0] || "");
console.log(joinKata(["apple", "banana", "cherry", "date"]));

/* 3. Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2 */
const second = (nums: number[]): number => [...new Set(nums)].sort((a, b) => a - b)[1];
console.log(second([5, 3, 1, 7, 2, 6]));

/* 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays
are of the same length. a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4] */
const sumArr = (a: number[], b: number[]): number[] => a.map((num, i) => num + b[i]);
console.log(sumArr([1, 2, 3], [3, 2, 1]));

/* 5. . Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]*/
const add = (arr: number[], newElem: number): number[] => (arr.includes(newElem) ? arr : [...arr, newElem]);
console.log(add([1, 2, 3, 4], 4));
console.log(add([1, 2, 3, 4], 7));

// ------------------
// EXERCISE 2
// ------------------

/* 1. Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3 */
const sumNumbers = (arr: any[]): number => arr.reduce((sum, num) => (typeof num === "number" ? sum + num : sum), 0);
console.log(sumNumbers(["3", 1, "string", null, false, undefined, 2]));

/* 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
a. Example : maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8, The function will return [5, 10, 24, 3, 6]*/
const inserLimit = (maxSize: number, ...nums: number[]): number[] => nums.slice(0, maxSize);
console.log(inserLimit(5, 5, 10, 24, 3, 6, 7, 8));

/* 3. Write a function that will combine 2 given array into one array. a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]  */
const combineArr = (arr1: number[], arr2: number[]): number[] => [...arr1, ...arr2];
console.log(combineArr([1, 2, 3], [4, 5, 6]));

/* 4. Write a function to find duplicate values in an array. a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] */
const find = (arr: number[]): number[] => [...new Set(arr.filter((num, i, self) => self.indexOf(num) !== i))];
console.log(find([1, 2, 2, 2, 3, 3, 4, 5, 5]));

/* 5. Write a function to find the difference in 2 given array. a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7] */
const arrayDifference = (arr1: number[], arr2: number[]): number[] => [...arr1.filter((num) => !arr2.includes(num)), ...arr2.filter((num) => !arr1.includes(num))];
console.log(arrayDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// -----------
// EXERCISE 3
// -----------

/* 1. Based on the array below write a function that will return primitive data types only. let arr = [1, [], undefined, {}, "string", {}, []];
a. The function will return [1, undefined, “string”] */
const filterPrimitif = (arr: any[]): any[] => arr.filter((item) => item !== null && (typeof item !== "object" || item === null));
console.log(filterPrimitif([1, [], undefined, {}, "string", {}, []]));

/* 2. Write a function from the below array of number that will return sum of duplicate values. let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40 */
const sumDuplicates = (arr: number[]): number => {
  return [...new Set(arr.filter((num) => arr.indexOf(num) !== arr.lastIndexOf(num)))].reduce((sum, num) => sum + num, 0);
};
console.log(sumDuplicates([10, 20, 40, 10, 50, 30, 10, 60, 10]));

/* 3. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win' */
const rps = (player: string): string => {
  const choices = ["rock", "paper", "scissors"];
  const cpu = choices[Math.floor(Math.random() * 3)];
  return player === cpu ? "Draw" : (player === "rock" && cpu === "scissors") || (player === "paper" && cpu === "rock") || (player === "scissors" && cpu === "paper") ? "Win" : "Lose";
};
console.log(rps("rock"));
