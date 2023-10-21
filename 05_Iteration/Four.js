const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// CallBack Function

// coding.forEach(function (item) {
//     console.log(item);
// })

// Arrow Function

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme);

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})