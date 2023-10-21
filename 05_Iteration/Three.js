const myObject = {
    JS: "JavaScript",
    Cpp: "C plus plus",
    rb: "Ruby",
    swift: "Swift"
}

for(const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const arr = [1,2,3,4,5];
// fromt 0 to arr.size();
for(const i in arr) {
    // console.log(arr[i]);
}

const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America")
map.set('Fr', "France")

// Map is not iterable so we can't use for in loop on map
for(const key in map) {
    console.log(key);
}