const myArr = [1,2,3,4,5];
console.log(myArr);

myArr.unshift(7);
console.log(myArr);
myArr.shift();
console.log(myArr);

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();

console.log(myArr);//Object
console.log(newArr);//String

console.log("A ", myArr);

const myn1 = myArr.slice(1,3); // Does not manipulates the original array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // Manipulates the original array
console.log(myn2);
console.log("C ",myArr);