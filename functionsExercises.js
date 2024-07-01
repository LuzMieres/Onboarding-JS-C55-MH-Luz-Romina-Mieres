//Difficulty Level: Low
//Exercise 1
function add1() {
    console.log(100 * 20);
}

//Exercise 2
add1();

//Exercise 3
function add3(num1, num2) {
    num1 * num2;
}
console.log(add3(100,20))

//Exercise 4
function add4(number1, number2) {
    number1 * number2;
}
// console.log(`The result is: ${add4(100,20)}`);

//Exercise 5
function add5(number1, number2) {
    let result = number1 * number2;
    return result;
}
console.log(`The result is: ${add5(100,50)}`);

//Exercise 6
let add6 = function (number1, number2) {
    let result = number1 * number2;
    return result;
}
console.log(`The result is: ${add6(100,60)}`);

//Difficulty Level: Medium
//Exercise 1 
function greeting(name) {
    let greetingName = console.log(`Hi ${name}. How are you?`);
    return greetingName;
}
greeting("Luz");

//Exercise 2
let multiply = function(num1, num2) {
    let result = num1 * num2;
    return result;
}
console.log(multiply(10,20));
console.log(multiply(50,20));
console.log(multiply(60,10));
console.log(multiply(10,30));

//exercise 3
function area(base, height) {
    let calculateArea = base * height / 2;
    return calculateArea;
}
console.log(`The area of the triangle is: ${area(100,300)}`);

//Exercise 4
function perimeter(num1, num2, num3) {
    calculatePerimeter = num1 + num2 + num3;
    return calculatePerimeter;
}
console.log(`The perimeter of the triangle is: ${perimeter(100,300,200)}`);

//Exercise 5
function buyWithDiscount(price, amount) {
   let totalPurchase = price * amount; 
    if (amount >= 20) { 
        let discount = totalPurchase * 20 / 100;
        console.log(`The total with the 20% discount is: $${totalPurchase - discount}`);

    }else if (amount >= 10) {
        let discount = totalPurchase * 10 / 100;
        console.log(`The total with the 10% discount is: $${totalPurchase - discount}`);
    } else {
        let totalPurchese = price * amount;
        console.log(`The total purchase price is: ${totalPurchese}`);
    }
    return totalPurchase;
}
buyWithDiscount(9,19);

//Exercise 6
function isAnAdult(age) {
    if (age >= 18) {
        console.log("You are an adult!")
    }else {
        console.log("You are not an adult!")
    }
    return isAnAdult;
}
isAnAdult(0);

//Difficulty Level: High
//Exercise 1
function calculateAnnualTax(annualIncome) {

    let income;
    if (annualIncome > 20000) {
      income = console.log(`Your annual income is: $${annualIncome}. \nYou must pay 20% tax on your total income, which is: $${annualIncome * 20 / 100}`);
    }else if (annualIncome > 10000 && annualIncome <= 20000) {
        income = console.log(`Your annual income is: $${annualIncome}. \nYou must pay 15% tax on your total income, which is: $${annualIncome * 15 / 100}`);
    } else {
        income = console.log(`Your annual income is: $${annualIncome}.\n You must pay 10% tax on your total income, which is: $${annualIncome * 10 / 100}`);
    }
    return income;
}


calculateAnnualTax(9000);

//Exercise 2
function weekday(number) {
    switch (number) {
        case 1:
            console.log("It's a business day.");
            break;
        case 2:
            console.log("It's a business day.");
            break;
        case 3:
            console.log("It's a business day.");
            break; 
        case 4:
            console.log("It's a business day."); 
            break;   
        case 5:
            console.log("It's a business day.");
            break;
        case 6:
            console.log("It's weekend.");
            break;
        case 7:
            console.log("It's weekend."); 
            break;                  
    
        default:
            console.log("That number is not allowed.")
            break;
    }
    return weekday;
}
weekday(8);

//Exercise 3
function getInformation(name, lastName, age) {
    name = prompt("Enter your name:");
    if (name != "") {
        lastName = prompt("Enter your lastName:");
        if (lastName != "") {
            age = Number(prompt("Enter your age:"));
            if (age != 0) {
               let personalInformation = {
                   name: name,
                   lastName: lastName,
                   age: age,
               }
               return personalInformation;
                
            }else {
                console.log("The age cannot be empty.");
            }
        }else {
            console.log("The lastName cannot be empty.");
        }
    }else {
        console.log("The name cannot be empty.");
    }
}
console.log(getInformation());

//Exercise 4
function greet(name) {
    return `Hello, mi name is ${name}`;
}

function calculateAge(currentYear, yearOfBirth) {
    return currentYear - yearOfBirth;

}

function introduceOneself() {
    let name = prompt("Enter your name:");
    let currentYear = prompt("Enter the currentYear: ");
    let yearOfBirth = prompt("Enter your Year of Birth:");
    alert(`${greet(name)} and i am ${calculateAge(currentYear, yearOfBirth)} years old.`);
}
introduceOneself()

