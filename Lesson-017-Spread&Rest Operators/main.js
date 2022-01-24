//Spread-operator
const newArray = [...oldArray, 1, 2];
const newObject = {...oldObject, newProp: 5}; //newProp overrides existing newProp in oldObject

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
// const newNumbers = [numbers, 4, 5]; //try that
console.log(newNumbers);

//Rest oeprator

function sortArgs(...args){
    return args.sort();
}

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);

const filter = (...args) => { //merge elements to array
    return args.filter(el => el === 1);
};

console.log(filter(1,2,3));
