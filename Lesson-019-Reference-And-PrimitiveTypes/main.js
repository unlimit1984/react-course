const number = 5;
const num2 = number; //copy the value, not a reference

const person = {
    name: 'Max'
};

// Copy reference
// const secondPerson = person;

// Spread the person properties (real copying the object)
const secondPerson = {...person};

person.name = 'Manu';
console.log(secondPerson);
