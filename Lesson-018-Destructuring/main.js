//Array destructuring
[a, b] = ['Hello', 'Max'];
console.log(a);
console.log(b);

const numbers = [1,2,3];
[num1, num2] = numbers;
console.log(num1);
console.log(num2);
[num1, , num3] = numbers;
console.log(num1);
console.log(num3);

//Object destructuring
const { name } = {name: 'Max', age: 28};
console.log(name);
console.log(age);
