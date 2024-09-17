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

///string concatenations

const name = "MacKenzie";
const myAge = 26; 
const both = name + myAge; 

console.log(`Hi! My name is ${name} and I am ${myAge} years old`);
console.log(both);
document.getElementById("demo").innerHTML =
`Hi! My name is ${name} and I am ${myAge} years old`;
