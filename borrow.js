const student = {
    name: 'pandy',
    job: 'khai andey',
    treat: function (treat, tip) {

        this.salary = this.salary - treat - tip;
        return this.salary;
  
    },
    salary: 20000
}
const treat = 5000;
const tip = 50;
student.treat(treat, tip);
// console.log(student.salary);

const person ={
    name: 'shamim',
    salary: 5000
}

// call method

const person1 = student.treat.call(person ,1000 ,500 );
console.log(person1);

// apply method

const person2 = student.treat.apply(person, [1000, 500]);
console.log(person2);

// bind method

const person3 = student.treat.bind(person);
const person4 = person3(500, 100);
console.log(person4);
