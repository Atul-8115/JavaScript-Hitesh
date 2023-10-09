const name = "hitesh"
const repoCount = 50

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('AtulKP-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4); //We can not negative value here 
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    Atul   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));
