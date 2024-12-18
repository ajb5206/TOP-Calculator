// Query Selectors
const display = document.querySelector("#calcDisplay");
const clearBtn = document.querySelector("#clearBtn");
const signBtn = document.querySelector("#signChangeBtn");
const percentBtn = document.querySelector("#percentageBtn");
const divisionBtn = document.querySelector("#divisionBtn");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const mulitplicationBtn = document.querySelector("#multiplicationBtn");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const subtractBtn = document.querySelector("subtractionBtn");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const additionBtn = document.querySelector("#additionBtn");
const zeroBtn = document.querySelector("#zero");
const decimalBtn = document.querySelector("decimal");
const equalBtn = document.querySelector("equalBtn");








// basic functions

function add(a,b){
    return a + b;
}

// subtraction

function subtract(a, b){
    return a - b;
}

// multiply

function multiply(a, b)
{
    return a * b;
}

// divide

function divide(a, b){
    return a/b;
}

function operate (func, a, b)
{
    if (func === "add")
    {
        return add(a, b);
    } else if (func === "subtract")
    {
        return subtract(a, b);
    } else if (func === "multiply")
    {
        return multiply(a, b);
    }else if (func === "divide")
    {
        return divide(a, b);
    } else
    {
        return console.log("ERROR");
    }
}
