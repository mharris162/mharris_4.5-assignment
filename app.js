/// if" conditional statement (1)
const age = 21;

if (age >= 21) {
    console.log("You are good!");
} else {
    console.log("Come back when you're 21!");
}

//  "if" conditional statement (2)

const dice1 = 6;
const dice2 = 4;

if (dice1 === 6 || dice2 ===6) {
    console.log ("You got a 6!")
}
/// || means or, && means you need 2 conditions to both be true

///string cncatenations

const name = "MacKenzie";
const myAge = 26; 
const both = name + myAge; 

console.log(`Hi! My name is ${name} and I am ${myAge} years old`);
console.log(both);
document.getElementById("demo").innerHTML =
`Hi! My name is ${name} and I am ${myAge} years old`;

/// String Method- Length 
let length = name.length; 
document.getElementById("demo1").innerHTML =
`My name has ${length} letters`;


/// String Method- Slice 
let animals = "Cats, Dogs, Fish";
let some = animals.slice (0,3);
document.getElementById("demo2").innerHTML =
`I have a pet ${some}`;



function spliter(num1, num2) {
    console.log(num1 /= num2);
}

spliter(37.83, 4);

// Number Method

let bill = 9.4575
console.log(bill.toFixed(2))


/// switch statements 
const favAnimal = "Bear";
switch (favAnimal) {
    case "Cat": {
    console.log("I love cats")}
    break 
    case "Dog":{
    console.log("I love dogs");}
    break
    case "Fish": {
    console.log("I love fish");}
    break
    default:
    console.log("Try another animal")
}





