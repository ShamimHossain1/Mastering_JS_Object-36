// do not use this method to compare object or array
const number1 = { a: 2 };
const number2 = { a: 2 };
const number1String = JSON.stringify(number1);
const number2String = JSON.stringify(number2);

// console.log(number1String, number2String);

if (number1String === number2String) {
    // console.log('same');
}
else {
    // console.log('Different')
}

function compareObject(number1, number2) {
    const number1Keys = Object.keys(number1);
    const number2Keys = Object.keys(number2);
    if (number1Keys.length === number2Keys.length) {
        for (const key of number1Keys) {
            // console.log(key);
            if (number1[key] !== number2[key]) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

const compare = compareObject(number1, number2);
console.log(compare);