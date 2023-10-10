const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// let myCreateDate = new Date(2023,0,23)
let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));
const newDate = Date.now();

newDate.toLocaleString('default', {
    weekday: "long",
})