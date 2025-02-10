// Task 1: Age and Adult Status
let age = 25;
let isAdult = false;

if (age >= 18){
    isAdult = true;
}
else {
    isAdult = false;
}


// Task 2: Mathematical Operations
let x = 10;
let y = 5;

function calculate(x , y, operand){
    if (operand == "+"){
        return x + y;
    }
    else if (operand == "*"){
        return x * y;
    }
    else if (operand == "%"){
        return x % y;
    }
}
let addition = calculate(x, y, "+");          // 15
let multiplication = calculate(x, y, "*")     // 50
let modulus = calculate(x, y, "%")            // 0


// Task 3: Even or Odd Check

function checkEvenOdd(n) {
    if (n % 2 === 0){
        return "even";
    } 
    else {
        return "odd";
    }
}

let n = 10;
let numberStatus = checkEvenOdd(n);  // 'even'


// Task 4: Store Numbers 1-5 in Array
let numbersArray = [];

for (let i = 1; i <= 5; i++) {
    numbersArray.push(i);
}


// Task 5: Square Function

function square(number) {
    return number * number;
}

let num = 4;
let squaredValue = square(num);  // 16