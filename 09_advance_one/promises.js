const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(()=> {
        console.log('Async task is completed');
        resolve();
    },1000)
})

promiseOne.then(() => {
    console.log("Promise consumed");
})

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async task 2 completed');
        resolve();
    },1000)
}).then(() => {
    console.log('Promise 2 consumed');
})

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username: "Chai", email: "pandeyatulkumar94@gmail.com"})
    },1000);

})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve,reject) => {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({username: "Atul", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Promise either resolved or rejected'))


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})

const consumePromiseFive =  async() => {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

//  const getAllUsers = async () => {
//     try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch(error) {
//         console.log('E: ',error);
//     }
//  }


//  getAllUsers();

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => {
    return response.json()
 })
 .then((data) => {
    console.log(data);
 })
 .catch((e) => console.log(e))