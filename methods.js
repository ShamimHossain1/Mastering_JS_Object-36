const student = {
    name: 'shamim',
    age: 20,
    study: 'math',
    subject: ['english', 'physics', 'chemistry'],
    exam: function () {
        // console.log(this.name, 'is participating in an exm');
    },
    improveExm: function (subject) {
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    }
}

// student.exam();
const improveExm = student.improveExm(student.subject[1]);
// console.log(improveExm);