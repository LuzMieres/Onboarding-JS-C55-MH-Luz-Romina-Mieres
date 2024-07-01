//Difficulty Level: Low
//Exercise 4
let number1 = 5;
let number2 = 4;
if (number1 > number2) {
    console.log("Num1 is greater");
} else {
    console.log("Num2 is greater");
}

//Exercise 5
if (number1 > number2) {
    console.log("Num1 is greater");
} else if (number1 == number2) {
    console.log("The numbers are the same.");
} else {
    console.log("Num2 is greater");
}

//Exercise 6
if (number1 != number2) {
    console.log("The numbers are different.");
} else {
    console.log("The numbers are the same.");
}

//Exercise 7
let date1 = "2018-9-2";
let date2 = "2023-7-5";

if (date1 > date2) {
    console.log(`The date ${date1} is greater than the date ${date2}.`);
} else if (date2 > date1) {
    console.log(`The date ${date2} is greater than the date ${date1}.`);
} else {
    console.log(`The dates are the same.`);
}

//Exercise 8
if (date1 > date2) {
    console.log(`The date ${date1} is greater than the date ${date2}.`);
} else if (date1 < date2) {
    console.log(`The date ${date1} is less than the date ${date2}.`);
} else {
    console.log(`The dates are the same.`);
}

//Exercise 9
let num1 = 5;
let num2 = 7;
let num3 = 9;
if (num1 > num2 && num1 > num3) {
    console.log(`Number ${num1} is the biggest.`);
}else if (num2 > num1 && num2 > num3) {
    console.log(`Number ${num2} is the biggest.`);
} else if (num3 > num1 && num3 > num2) {
    console.log(`Number ${num3} is the biggest.`);
} else {
    console.log(`The numbers are the same.`);
}

//Difficulty Level: Medium
//Exercise 4 
let colour = prompt("Enter a color: Red, Blue or Green.").toLowerCase();
switch (colour) {
    case "red":
        alert("Red the color of Passion!");
        break;
    case "blue":
        alert("Blue the color of the Sea!");
        break;
    case "green":
        alert("Green the color of Nature!");    
        break;
    default:
        alert("Invalid option. Please enter a color: Red, Blue or Green.")
        break;
}

//Exercise 5
let operation = prompt("Enter an operation: Add, Subtract, Multiply or Divide.").toLowerCase();
let numberUno = Number(prompt("Enter the first number from 1 to 100."));
let numberDos = Number(prompt("Enter the second number from 1 to 100."));

switch (operation) {
    case "add":
        alert(`The sum of ${numberUno} and ${numberDos} is: ${numberUno + numberDos}`);
        break;
    case "subtract":
        alert(`The subtract of ${numberUno} and ${numberDos} is: ${numberUno - numberDos}`);
        break;
    case "multiply":
        alert(`The multiply of ${numberUno} and ${numberDos} is: ${numberUno * numberDos}`); 
        break;
    case "divide":
        alert(`The division of ${numberUno} and ${numberDos} is: ${numberUno / numberDos}`);    
        break;   
    default:
        alert("Invalid operation. Enter an operation: Addition, Subtraction, Multiplication or Division.")
        break;
}

//Exercise 6
let personOne = {
    name: "Juan",
    age: 38,
    height: 1.69
}
let personTwo = {
    name: "Rosa",
    age: 38,
    height: 1.70
}

if (personOne.age > personTwo.age && personOne.height == personTwo.height){
    console.log(`${personOne.name} is older than ${personTwo.name}, but they have the same height.`);
} else if (personOne.age < personTwo.age && personOne.height == personTwo.height ) {
    console.log(`${personOne.name} is shorter than ${personTwo.name}, but they have the same height.`);
}else if (personOne.height > personTwo.height && personOne.age == personTwo.age){ 
    console.log(`${personOne.name} is higher than ${personTwo.name}, but they have the same age.`);
}else if (personOne.height < personTwo.height && personOne.age == personTwo.age){ 
    console.log(`${personOne.name} is lower than ${personTwo.name}, but they have the same age.`);
} else if (personOne.age > personTwo.age && personOne.height > personTwo.height) {
    console.log(`${personOne.name} is greater and higher than ${personTwo.name}.`);
} else if (personOne.age > personTwo.age && personOne.height < personTwo.height) {
    console.log(`${personOne.name} is greater and lower than ${personTwo.name}.`);
} else if (personOne.age < personTwo.age && personOne.height > personTwo.height) {
    console.log(`${personOne.name} is shorter and higher than ${personTwo.name}.`);
} else if (personOne.age < personTwo.age && personOne.height < personTwo.height){
    console.log(`${personOne.name} is shorter and lower than ${personTwo.name}.`);
}else {
    console.log(`${personOne.name} and ${personTwo.name} they are the same age and the same height.`);
}

//Exercise 7
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

if (age >= 18) {
    let height = prompt("Enter your height:");
  if (height >= 110) {
    let vision = prompt("Enter your vision:");
    if (vision >=8 && vision <= 10) {
        console.log("Congratulations! You are authorized to drive.")
    }else{
        console.log("Sorry, you are not qualified to drive.");
    }
  }else {
    console.log("Sorry, you are not qualified to drive.");
  }
}else {
    console.log("Sorry, you are not qualified to drive.");
}

//Exercise 8
let age1 = prompt("Enter your age:");

if (age1 >= 0 && age1 <=12 ) {
    alert(`You are an infant, because you are ${age1} years old `);
}else if (age1 >=13 && age1 <=18){
    alert(`You are an teenager, because you are ${age1} years old `);
}else if (age1 >=19 && age1 <=45){
    alert(`You are an older young man, because you are ${age1} years old `);
}else if (age1 >=45 && age1 <=100){
    alert(`You are an older person, because you are ${age1} years old `);
}else{
    alert(`Are you really that old? You are ${age1} years old! `);
}

//Exercise 9
let numberOneAndThree = Number(prompt("Enter a number from 1 to 3."));
let numberDifferent;
if (numberOneAndThree == 1) {
    numberDifferent = Number(prompt("Enter any other number."));
    alert(`The number entered is: ${numberDifferent}`);
}else if (numberOneAndThree == 2){
    numberDifferent = Number(prompt("Enter any other number."));
    alert(`Double the number entered is: ${numberDifferent * 2}`);
}else if (numberOneAndThree == 3){
    alert(`Triple the number entered is: ${numberDifferent * 3}`);
}else if (numberOneAndThree != 1 && numberOneAndThree != 2 && numberOneAndThree != 3){
    alert(`Number no valid`);
}

// Difficulty Level: High
// Exercise 1
let customerName = prompt("Enter your name:").toLowerCase();
if (customerName == "luz") {
    alert("Welcome, you can enter!");
} else {
    let passVipNormal = prompt("Do you have a VIP or Normal pass? Enter an option: VIP or Normal.").toLowerCase();
    if (passVipNormal == "vip" || passVipNormal == "normal") {
        alert("Welcome, you can enter!");
    } else {
        let hasEntry = confirm("Do you have an entrance? Press accept or cancel.");
        if (hasEntry == true) {
            let usesEntry = confirm("Do you want to use your ticket to enter? Press accept or cancel.");
            if (usesEntry == true) {
                alert("Welcome, you can enter!");
            }else {
                alert("I understand, in that case, the wish that you have a good night.");
            }
        } else {
            let buyEntry = confirm("Do you want to buy a ticket? Press accept or cancel.");
            if (buyEntry == true ) {
                let hasMoney = Number(prompt("How much money do you have? Please note that the entrance fee is $1000."));
                if (hasMoney >= 1000) {
                    alert("The sale was successful! Welcome, you can enter!");
                }else{
                    alert("Sorry, I won't be able to sell you a ticket.");
                }
            }else {
                alert("I understand, in that case, the wish that you have a good night.");
            }
        }
    }
}