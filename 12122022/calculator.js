
// Ask for the first number
const num1 = prompt ("Enter the first number ");

// Ask which operation they want
const operator = prompt('Enter operator ( either +, -, * or / )');

// Ask for the 2nd number
const num2 = prompt ("Enter the 2nd number ");

alert ("RESULT: " + Number(num1) + operator + Number(num2));

if (operator == '+') {
    console.log ("Sum: " + (Number (num1) + Number (num2)));
}
else if (operator == '-') {
    console.log ("Difference: " + (Number (num1) - Number (num2)));
}
else if (operator == '*') {
    console.log ("Product: " + (Number (num1) * Number (num2)));
}
else {
    console.log ("Quotient: " + (Number (num1) / Number (num2)));
}