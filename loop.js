const numbers = [100, 200, 300, 400, 500, 600];
for (const number of numbers) {
    // console.log(number);
}

// 1. for of can not used with objects
const bottle = { color: 'yellow', price: '50', isCleaned: true };
const keys = Object.keys(bottle);
// console.log(keys);
for (const key of keys) {
    // console.log(key);
    // console.log(key, bottle[key]);
}

// 2. For in loop for object

for (const key in bottle) {
    const value = bottle[key];
    // console.log(key, value);
}

// advanced 

const pair = Object.entries(bottle);
// console.log(pair);
for (const [key, value] of pair) {
    // console.log(key, value);
}