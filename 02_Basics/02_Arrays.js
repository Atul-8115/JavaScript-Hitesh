const marvel_heros = ["thor","Ironman", "spiderman"];
const dc_heros = ["superman","flash", " batman"];

// marvel_heros.push(dc_heros) // took array as a datatype;

// console.log(marvel_heros);

// const newArr = marvel_heros.concat(dc_heros);// returns new array
// console.log(newArr);

const allNewHeros = [...marvel_heros, ...dc_heros] // Generally prefers this method
// console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);


console.log(Array.isArray("Atul"));
console.log(Array.from("Atul"));
console.log(Array.from({name: "Atul"})); // Interesting can not convert in array. Some additional information will be required.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));