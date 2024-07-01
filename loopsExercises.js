//Difficulty Level: Low
//Exercise 6
let number1To100 = Number(prompt("Enter a number from 1 to 100: "));
for (let i = number1To100; i >= 0; i--) {
   console.log(i);
}

//Exercise 7
let numberToMultiply = Number(prompt("Enter a number from 1 to 10: "));
for (let i = 1; i <= 10 ; i++) {
    console.log(`${i} x ${numberToMultiply} = ${i * numberToMultiply}`);
} 

//Exercise 8
let numberToSum;
let result = 0;
while (numberToSum != 0) {
    numberToSum = Number(prompt("Enter the numbers to add and at the end enter 0: "));
    result += numberToSum; 
}
console.log("----------While----------")
console.log(`The sum of the numbers entered is: ${result}`);

//Exercise 9
let result2 = 0;
let numberToSum2 = 1;
do {
    numberToSum2 = Number(prompt("Enter the numbers to add and at the end enter 0: "));
    result2 += numberToSum2;
} while (numberToSum2 != 0);
console.log("----------Do while----------");
console.log(`The sum of the numbers entered is: ${result2}`);

//Exercise 10
let persona = {
    name: "Luz",
    lastName: "Mieres",
    age: 27,
    origin: "Argentina",
    studies: "Secundarios"
}
for (const key in persona) {
    console.log(key);
}

//Exercise 11
for (const key in persona) {
    console.log(`${persona[key]}`);
}

// Difficulty Level: Medium
// Exercise 1
let numberSecret = result;
let attempts = 0;
let enterYourPassword;
while (enterYourPassword != numberSecret) {
    enterYourPassword = Number(prompt("Enter your password to log in: "));
    attempts += 1;
}
console.log(`You're right! The number secret was ${numberSecret} and you have made ${attempts} attempts.`);
alert( `You're right! The number secret was ${numberSecret} and you have made ${attempts} attempts.`);

//Exercise 2
let numberDivisors = Number(prompt("Enter a number: "));
for (let i = 1; i <= numberDivisors; i++) {
   if (numberDivisors % i == 0) {
       console.log(`The number entered is ${numberDivisors} y su divisor is ${i}`)
    }

}

//Exercise 3
function ringBell() {
    return "Ding Dong, ";
}
let numberDingDong = Number(prompt("Enter a number: "));
let result3 = ""
for (let i = 1; i <= numberDingDong; i++) {
    result3 += ringBell();
}
console.log(result);

//Exercise 4
let dateLimit = "1997-8-3";
let datesArray = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"];
let olderDates = [];
for (const date of datesArray) {
    if (date > dateLimit) {
        olderDates.push(date);
    }
    
}
console.log(`Dates ${olderDates} are greater than date ${dateLimit} `);

//Exercise 5
let coloursArray = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];
for (const colour of coloursArray) {
        console.log(colour);
}
console.log("-----------------------");
//Exercise 6
function colouring() {
    let coloursArray = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];
    for (const colour of coloursArray) {    
        console.log(colour);
    }

}
colouring();

//Exercise 7
let numberArray = [5, 7, 1, 3, 50];
for (const number of numberArray) {
    console.log(`The number is ${number} and its double is ${number * 2}`);
}
    
//Exercise 8
let family = [
    {
        name: "María",
        lastName: "Lopez",
        age: 40,
        member: "mother"
    },
    {
        name: "Juan",
        lastName: "Pérez",
        age: 38,
        member: "father"
    },
    {
        name: "Romina",
        lastName: "Pérez",
        age: 13,
        member: "daughter"
    },
    {
        name: "Tomás",
        lastName: "Pérez",
        age: 10,
        member: "son"
    }
]

function presentation() {
    for (const member of family) {
        console.log(`Hello, I am ${member.name} ${member.lastName} (${member.member}) and I am ${member.age} years old.`);
    }
}
presentation();

//Difficulty Level: High
//Exercise 1
let addEvenNumbers = 0;
let addOddNumbers = 0
let numbers;
while (numbers !== 0) {
    numbers = Number(prompt("Enter numbers and at the end enter 0: "));
    if (numbers % 2 === 0) {
        addEvenNumbers += numbers;
    }else if(numbers % 2 !==0){
        addOddNumbers += numbers;
    }    
}
console.log(`The sum of the odd numbers is: ${addOddNumbers}`);
console.log(`The sum of the even numbers is: ${addEvenNumbers}`);

//Exercise 2
let arrayGreaterNumbers = [4,2,6,10,3,20,18,34,28,30];
let numberGreater = arrayGreaterNumbers[0];
for (let i = 0; i < arrayGreaterNumbers.length; i++) {
    if (numberGreater < arrayGreaterNumbers[i]) {
        numberGreater = arrayGreaterNumbers[i];
    }
}
console.log(`The largest number in the array is ${numberGreater}`);

