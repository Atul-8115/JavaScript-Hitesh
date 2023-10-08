console.log("2" > 1); // true
console.log("02" > 1); // true
// Comparision Operator converts String to the number

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // false

/*
  The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number. treating it as 0.
That's why null >= 0 is true and null > 0 is false.
*/

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
