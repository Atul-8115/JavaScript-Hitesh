// singleton -> objects created using constructor
// Object.create
// object literals

const mySym = Symbol("key1")


const jsuser = {
    name:"Atul",
    "full name": "Atul Kumar Pandey",
    age: 21,
    // mySym: "mySym1", should use with []
    [mySym]: "mySym1",
    location: "Lucknow",
    email: "pandeyatulkumar94@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

// jsuser.email = "pandeyatulkumar.com"
// Object.freeze(jsuser);
// jsuser.email = "atulpandey.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());