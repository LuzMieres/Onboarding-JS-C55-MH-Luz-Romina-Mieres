//Difficulty Level: Low
//Exercise 1
let myName = "Luz";
console.log(myName);

//Exercise 2
let myLastName = "Mieres";
console.log(myLastName);

//Exercise 3
let myAge = 27;
console.log(myAge);

//Exercise 4
let myPet = "Perlita";
console.log(myPet);

//Exercise 5
let petAge = 2;
console.log(petAge);

//Exercise 6
let fullName = `${myName} ${myLastName}`;
console.log(fullName);

//Exercise 7 
let presentationText = `Hello, my name is ${myName} ${myLastName} and i am ${myAge} years old. My pet is called ${myPet} and she is ${petAge} years old.`;
console.log(presentationText);

//Difficulty Level: Medium
//Exercise 1 
let sumAges = myAge + petAge;
console.log(sumAges);

let restAges = myAge - petAge;
console.log(restAges);

let productAges = myAge * petAge;
console.log(productAges);

let divisionAges = myAge / petAge;
console.log(divisionAges);

//Exercise 2 
let student = {
    name: "Luz",
    lastName: "Mieres",
    age: 27,
    course: "Full Stack Java Developer",
    hours: 700
}

console.table(student);
console.log(student.name);
console.log(student.lastName);
console.log(student.age);
console.log(student.course);
console.log(student.hours);

//Exercise 3
let pet = {
    name: "Perlita",
    age: 2,
    color: "White",
    race: "Poodle",
    size: "Little"
}

console.table(pet);
console.log(pet.name);
console.log(pet.age);
console.log(pet.color);
console.log(pet.race);
console.log(pet.size);

//Exercise 4
let fruits = ["banana", "apple", "pear", "peach", "strawberry"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

//Difficulty Level: High
//Exercise 1
let age = Number(prompt("Enter your age:"));
let iAmAdult = age >= 18;

console.log(`I am an adult because I am ${age} years old`);

//Exercise 2
let arrayNumbers = [2, 4, 6, 8, 10 ];
console.log(arrayNumbers);
console.log(arrayNumbers[0]);
console.log(arrayNumbers[1]);
console.log(arrayNumbers[2]);
console.log(arrayNumbers[3]);
console.log(arrayNumbers[4]);

//Exercise 3
let family = [
    mon = {
        name: "Ana",
        lastName: "Gonzalez",
        age: 56
    },
    dad = {
        name: "Eusebio",
        lastName: "Mieres",
        age: 54
    },
    sister1 = {
        name: "Marina",
        lastName: "Mieres",
        age: 28
    },
    sister2 = {
        name: "Leonela",
        lastName: "Mieres",
        age: 18
    },

    brother = {
        name: "Diego",
        lastName: "Mieres",
        age: 22
    },
]

console.log(family);
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
console.log(family[4]);

//Exercise 4
let randomText = `Hello, my name is ${family[4].name}, I have an ${arrayNumbers[3]} year old nephew who loves to eat ${fruits[1]}.`
console.log(randomText);