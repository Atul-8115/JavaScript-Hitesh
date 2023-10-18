const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("default match");
        break;
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}