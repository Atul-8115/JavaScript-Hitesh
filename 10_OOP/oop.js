const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("Atul", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
/*
    ******* Notes for ${New} keyword *******
    1 -> When we use new keyword then new empty object will be created.
    2 -> calls a constructor function
    3 -> then all the code that we wrote will be injected in this object
    4 -> finds inside the function
*/
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);