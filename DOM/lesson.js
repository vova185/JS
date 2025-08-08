// function myReduce(array, func, initialValue) {
//     let accumulator = initialValue;
//     for (let i = 0; i < array.length; i ++) {
//         accumulator = func(accumulator, array[i]);
//     }
//     return accumulator;
// }
//  const sum = myReduce([1, 2, 3, 4, 5], (accumulator, currentValue) => accumulator + currentValue, 0);
//  console.log(sum);

// function myMap(array, funcTrans) {
//     const result = [];
//     for (let i = 0; i < array.length; i ++) {
//         result.push(funcTrans(array[i]));
//     }
//     return result;
// }
// const numbers = [11, 32, 43, 54, 85];
//     const squares = myMap(numbers, num => num * num);
//     console.log(squares); // [1, 4, 9, 16, 25]

// function filterArray(arr, funcPredikat) {
//     newArr = [];
//     for (let i = 0; i < arr.length; i ++) {
//         if (funcPredikat(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// function isPositive(num) {
//         return num > 0;
//     }

//     let nums = [-1, 2, -3, 4, -5];
//     let positiveNums = filterArray(nums, isPositive);

//     console.log(positiveNums);

// const numbers = [5, 2, 8, 4, 1];

// const maxNumber = numbers.reduce((accumulator, currentValue) => {
//     return (currentValue > accumulator) ? currentValue : accumulator;
//     }, -Infinity);
    
// console.log(maxNumber); 


// const filterLongStrings = strings => strings.filter(string => string.length > 5);
// const strings = ['apple', 'banana', 'pear', 'orange', 'grapefruit'];
// const longStrings = filterLongStrings(strings);
// console.log(longStrings); 

// const doubleNumbers = numbers => numbers.map(num => num * 2);
// const numbers = [2, 4, 6, 8];
// const doubled = doubleNumbers(numbers);
// console.log(doubled);

// const arr = ["apple", "banana", "cherry", "date", "elderberry"]
// const together = arr.reduce((accumulator, currentValue) =>
// accumulator + ', ' + currentValue);
// console.log(together);

// const users = [
//     {name: 'Yan', age: 43},
//     {name: 'Val', age: 87},
//     {name: 'Gi', age: 35}
// ]
// const middleAge = users.reduce((acc, user) => {
//     return {sum: acc.sum + user.age, count: acc.count + 1 };
// }, { sum: 0, count: 0});
//     console.log(middleAge.sum / middleAge.count);

// const person = {
//     name: 'John',
//     age: 30,
//     sayHi() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }
// const newPerson = {
//     name: 'Jane',
//     age: 25
// }
// person.sayHi.apply(newPerson); 

// function multiply(x, y) {
//     return x * y;
// }
// const doubleNumber = multiply.bind(null, 2);
// console.log(doubleNumber(5));

// const calculator = {
//     add(a, b) {
//         return a + b
//     },
//     subtract(a, b) {
//         return a - b
//     }
// }
// const numbers = {
//     x: 3,
//     y: 45
// }
// console.log(calculator.add.call(numbers, numbers.x, numbers.y));
// console.log(calculator.subtract.call(numbers, numbers.x, numbers.y));
    
// const numbers = [32, 76, 78, 43, 45];
// const getmMinNumber = Math.min.apply(null, numbers);
// console.log(getmMinNumber)

const person = {
    firstName: 'John',
    lastName: 'Halin'
};
function greeting(name) {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
}
greeting.apply(person, ['John']);