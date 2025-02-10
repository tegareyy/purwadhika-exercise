// Write a code to display the multiplication table of a given integer
/* Example : Number → 9, Output: 9x1, 9x2, ... , 9x10 */
function multiplicationTable(num: number, rows: number): void {
  console.log(`Tabel ${num} (${rows} baris):`);
  for (let i = 1; i <= rows; i++) {
    console.log(`${num} x ${i}${rows > 10 ? " " : ""} = ${num * i}`);
  }
}
multiplicationTable(9, 10);

// Write a code to check whether a string is a palindrome or not
/* Example : ‘madam’ → palindrome */
function palindromeCheck(str: string): boolean {
  const lowerStr = str.toLowerCase();
  return lowerStr === lowerStr.split("").reverse().join("");
}
console.log(palindromeCheck("madam"));

// Write a code to convert centimeter to kilometer
/* Example : 100000 → “1 km” */
function cmToKm(cm: number): string {
  const kilometers = cm / 100000;
  return `${kilometers} km`.replace(/\.0$/, "");
}
console.log(cmToKm(100000));

// Write a code to format number as currency (IDR)
/* Example : 1000 → “Rp. 1.000,00” */
function formatToIDR(amount: number): string {
  const format = amount.toLocaleString("id-ID", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `Rp. ${format}`;
}
console.log(formatToIDR(1000));

// Write a code to remove the first occurrence of a given “search string” from a string
/* Example : string = “Hello world”, search string = “ell” → “Ho world” */
function removeOccu(text: string, search: string): string {
  const index = text.indexOf(search);
  if (index === -1) return text;
  return text.slice(0, index) + text.slice(index + search.length);
}
console.log(removeOccu("Hello World", "ell"));

// Write a code to capitalize the first letter of each word in a string
/* Example : “hello world” → “Hello World” */
function capitalWords(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalWords("hello World"));

// Write a code to swap the case of each character from string
/* Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’ */
function swapCase(str: string): string {
  return str
    .split("")
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join("");
}
console.log(swapCase("The QuiCk BrOwN Fox"));

// Write a code to find the largest of two given integers
/* Example : num1 = 42, num2 = 27 → 42 */
function findLargest(num1: number, num2: number): number {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(findLargest(42, 27));

// Write a conditional statement to sort three numbers
/* Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42 */
function sortNum(num1: number, num2: number, num3: number) {
  let a = num1,
    b = num2,
    c = num3;

  if (a > b) [a, b] = [b, a];
  if (a > c) [a, c] = [c, a];
  if (b > c) [b, c] = [c, b];

  return `${a}, ${b}, ${c}`;
}
console.log(sortNum(42, 27, 18));

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
/* Example : “hello” → 1 */
function checkDataType(input: any) {
  return typeof input === "string" ? 1 : typeof input === "number" ? 2 : 3;
}
console.log(checkDataType("hello"));

// Write a code to change every letter a into * from a string of input
/* Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y` */
function manualReplaceA(input: string) {
  let output = "";
  for (const char of input) {
    output += char.toLowerCase() === "a" ? "*" : char;
  }
  return output;
}
const original = "An apple a day keeps the doctor away";
const result = manualReplaceA(original);
console.log(result);

const product = {
  name: "kipas",
  harga: "buku",
};

//
