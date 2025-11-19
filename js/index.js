// console.log("Завдання 1");

// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// function countItems(array, condition){
// let count = 0
// for(const element of array){
// if(condition(element)){
// count +=1
// }
// }
// return count
// }

// const isEven = num => num % 2 === 0;
// const isLarge = num => num > 10;
// const isShort = word => word.length <= 3;


// console.log('Парних чисел:', countItems(numbers, isEven));
// console.log('Чисел більше 10:', countItems(numbers, isLarge));
// console.log('Коротких слів:', countItems(words, isShort));

// console.log("Завдання 2");

// function calculator (callback, a, b){
//     return callback(a,b)
// }

// function add (a, b){
//     return `result add number ${a} + ${b} = ${a + b}` 
// }

// function minus (a, b){
//     return `result minus number ${a} - ${b} = ${a - b}` 
// }

// function multiply (a, b){
//     return `result multiply number ${a} * ${b} = ${a * b}` 
// }

// function divide (a, b){
//     return `result divide number ${a} / ${b} = ${a / b}` 
// }

// console.log(calculator(add,3,5));
// console.log(calculator(minus,3,5));
// console.log(calculator(multiply,3,5));
// console.log(calculator(divide,3,5));
// console.log(calculator(divide,3,0));

console.log("Завдання 3");


const words = ["hello", "test", "random", "word", "???"]
function repeatMessage(times, messageCreator){
    for(let i = 0; i < times; i += 1){
        console.log(messageCreator(i));
    }
}
repeatMessage(5, randomSelector);

function randomSelector() {
    const randomWord = Math.floor(Math.random() * words.length);
    return words[randomWord];
    
}


