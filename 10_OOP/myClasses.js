// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encyptPassword() {
        return `${this.password}abc`
    }
}

const chai = new User("chai", "chai@gmailcom","123");

console.log(chai.encyptPassword());