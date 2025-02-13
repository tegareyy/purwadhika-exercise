// EXERCISE 1
const majorityElem = (nums: number[]): number => {
  let candidate = 0,
    count = 0;
  for (let num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }
  return candidate;
};
console.log(majorityElem([3, 2, 3]));
console.log(majorityElem([2, 2, 1, 1, 1, 2, 2]));

// EXERCISE 2
const romanToInt = (s: string): number => {
  const map: any = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return [...s].reduce((sum, c, i) => sum + (map[c] < map[s[i + 1]] ? -map[c] : map[c]), 0);
};
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

// EXERCISE 3
const generatePascal = (numRows: number): number[][] => {
  let res = [[1]];
  for (let i = 1; i < numRows; i++) res.push([1, ...res[i - 1].map((_, j) => res[i - 1][j] + (res[i - 1][j + 1] || 0))]);
  return res;
};
console.log(generatePascal(5));
console.log(generatePascal(1));

// EXERCISE 4
const maxProfit = (prices: number[]): number => {
  let minPrice = prices[0],
    maxProfit = 0;
  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
