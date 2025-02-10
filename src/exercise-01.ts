// Write a code to find area of rectangle
/* Example : length = 5, width = 3, Output : 15 */
const length1: number = 5;
const width1: number = 3;

const area: number = length1 * width1;
const perimeter: number = 2 * (length1 + width1);
console.log(area);
console.log(perimeter);

// Write a code to find perimeter of rectangle
/* Example : length = 5, width = 3, Output : 16 */
const keliling: number = 2 * (length1 + width1);
console.log("Keliling persegi panjang adalah: " + keliling);

// Write a code to find diameter, circumference and area of a circle
/* Example : radius = 5, Output : diameter = 10, circumference = 31.4159, area = 78.539 */
const radius = 5;
const truncateArea = (Math.PI * radius ** 2 * 1000) | 0;
const area1 = (truncateArea / 1000).toFixed(3);
console.log(`diameter = ${2 * radius}, circumference = ${(2 * Math.PI * radius).toFixed(4)}, area = ${area1}`);

// Write a code to find angles of triangle if two angles are given
/* Example : a = 80, b = 65, Output : 35 */
const sudutA: number = 80;
const sudutB: number = 65;
const sudutC: number = 180 - (sudutA + sudutB);

if (sudutA + sudutB > 180) {
  console.log("Salah input, sudut tidak boleh >= 180");
} else {
  console.log(`Sudut ketiga: ${sudutC}`);
}

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days)
/* Example : 400 days → 1 year, 1 month, 5 days, Example: 366 days → 1 year, 0 month, 1 day */
const days: number = 400;
const year: number = Math.floor(days / 365);
console.log(year);

const month: number = Math.floor((days % 365) / 30);
console.log(month);

const day: number = (days % 365) % 30;
console.log(day);

// Write a code to get difference between dates in days
/* Example : date1 = 2022-01-20, date2 = 2022-01-22, Output : 2 */
const date1: string = "2022-01-20";
const date2: string = "2022-01-22";
const diffMiliDetik: number = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
const diffDays: number = Math.round(diffMiliDetik / (1000 * 60 * 60 * 24));

console.log(`Perbedaan hari: ${diffDays}`);
