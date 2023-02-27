// 1. create object using object literals

const player = {};
player.name = 'sakib al hasan';
player.status = 'all rounder';
player.bat = function () {
    // console.log('hello');
}
// console.log(player);
player.bat();

const student = {
    name: 'pandy',
    job: 'khai andey',
    bal: function () {
        // console.log('throw ball');
    },
    salary: '10k'
}

// 2.object constructor
const person = new Object();
// console.log(person);

// 3. object create method
// const item = Object.create(null);
const item = Object.create(student);
// console.log(item.name);

// 4. class
class Person {
    name = 'abul';
    address = 'sodor ghat';
    constructor(age) {
        this.age = age;
    }

}

const person1 = new Person(34);
// console.log(person1);

// 5. Function

function Car(model, price) {
    this.model = model;
    this.price = price;
}

const tesla = new Car('elon', 50000);
console.log(tesla);
