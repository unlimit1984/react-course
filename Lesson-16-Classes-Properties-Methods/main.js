class Human {

    //ES6
    // constructor() {
    //     this.gender = 'male';
    // }

    //ES7
    gender = 'male';

    //ES6
    // printGender() {
    //     console.log(this.gender);
    // }

    //ES7
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    //ES6
    // constructor() {
    //     super();
    //     this.name = 'Max';
    //     this.gender = 'female';
    // }

    //ES7
    name = 'Max';
    gender = 'female';

    //ES6
    // printMyName() {
    //     console.log(this.name);
    // }
    //ES7
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();
