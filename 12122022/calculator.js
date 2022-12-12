
// Ask for the first number
const num1 = prompt ("Enter the first number ");

// Ask which operation they want
const operator = prompt('Enter operator ( either +, -, * or / )');

// Ask for the 2nd number
const num2 = prompt ("Enter the 2nd number ");

alert ("You've entered: " + Number(num1) + " " + operator + " " + Number(num2));

if (operator == '+') {
    let h1 = document.getElementById("result");
    h1.innerHTML = ("Sum: " + (Number (num1) + Number (num2)));
}
else if (operator == '-') {
    let h1 = document.getElementById("result");
    h1.innerHTML = ("Difference: " + (Number (num1) - Number (num2)));
}
else if (operator == '*') {
    let h1 = document.getElementById("result");
    h1.innerHTML = ("Product: " + (Number (num1) * Number (num2)));
}
else {
    let h1 = document.getElementById("result");
    h1.innerHTML = ("Quotient: " + (Number (num1) / Number (num2)));
}