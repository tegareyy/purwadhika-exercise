// EXERCISE 1
const excelColToNumber = (col: string): number => col.split("").reduce((sum, char) => sum * 26 + (char.charCodeAt(0) - 64), 0);

console.log(excelColToNumber("AB"));
console.log(excelColToNumber("ZY"));

// EXERCISE 2
const singleNumber = (nums: number[]): number => nums.reduce((a, b) => a ^ b, 0);

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));

// EXERCISE 3
const isAnagram = (s: string, t: string): boolean => s.length === t.length && [...s].sort().join("") === [...t].sort().join("");

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

// EXERCISE 4
const climbStairs = (n: number): number => {
  let a = 1,
    b = 1;
  while (--n) [a, b] = [b, a + b];
  return b;
};
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));
