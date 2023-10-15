const user = {
    username: "Atul",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "atul"
//     console.log(this.username);
// }



// chai();

// const cahi = () => {
//     let username = "atul"
//     console.log(this);
// }
// cahi();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

const addTwo = (num1,num2) => (num1 + num2) //Implicit return
console.log(addTwo(3,4));