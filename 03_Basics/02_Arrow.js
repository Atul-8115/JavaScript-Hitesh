const user = {
    username: "Atul",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()