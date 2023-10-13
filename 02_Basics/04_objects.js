// const tinderUser = new Object() // Singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstname: "Atul",
            lastname: "Pandey"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}
// console.log(obj3);
// const obj3 = Object.assign({},obj1,obj2,obj4);

const obj3 = { ...obj1, ...obj2}
// console.log(obj3);

const useres = [
    {
        id: "atul@gmail.com",
        name: "atul"
    },
    {
        id: "atul@gmail.com",
        name: "atul"
    },
    {
        id: "atul@gmail.com",
        name: "atul"
    },
]

console.log(useres[1].name);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JS in hindi",
    courseInstructor: "Hitesh Choudhary",
    price: "999"
};

const {courseInstructor: Instructor} = course; // Destructuring
console.log(Instructor);

// JSON
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}