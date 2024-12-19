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
const subtractionBtn = document.querySelector("#subtractionBtn");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const additionBtn = document.querySelector("#additionBtn");
const zeroBtn = document.querySelector("#zero");
const decimalBtn = document.querySelector("#decimal");
const equalBtn = document.querySelector("#equalBtn");

let numTotal = 0;
let operatorChoice;
let firstNum;

//clear btn
clearBtn.addEventListener("click", ()=>{
    display.textContent = "";
    numTotal = 0;
    return numTotal;
})

// number buttons 
oneBtn.addEventListener('click', () => {
    display.textContent += "1";
    numTotal = +(display.textContent);
    //console.log(numTotal);
    return numTotal;
})

twoBtn.addEventListener('click', () => {
    display.textContent += "2";
    numTotal = +(display.textContent);
    //console.log(numTotal);
    return numTotal;
})

threeBtn.addEventListener('click', () => {
    display.textContent += "3";
    numTotal = +(display.textContent);
    //console.log(numTotal);
    return numTotal;
})

fourBtn.addEventListener('click', () => {
    display.textContent += "4";
    numTotal = +(display.textContent);
    //console.log(numTotal);
    return numTotal;
})

fiveBtn.addEventListener('click', () => {
    display.textContent += "5";
    numTotal = +(display.textContent);
    //console.log(numTotal);
    return numTotal;
})

sixBtn.addEventListener('click', () => {
    display.textContent += "6";
    numTotal = +(display.textContent);
    //console.log(numTotal);
    return numTotal;
})

sevenBtn.addEventListener('click', () => {
    display.textContent += "7";
    numTotal = +(display.textContent);
    //console.log(numTotal);
    return numTotal;
})

eightBtn.addEventListener('click', () => {
    display.textContent += "8";
    numTotal = +(display.textContent);
    //console.log(numTotal);
    return numTotal;
})

nineBtn.addEventListener('click', () => {
    display.textContent += "9";
    numTotal = +(display.textContent);
    return numTotal;
})

// operators

mulitplicationBtn.addEventListener('click', () => {
    firstNum = numTotal;
    display.textContent = "";
    numTotal = 0
    operatorChoice = "multiply";
    return "multiply"
})

subtractionBtn.addEventListener('click', () => {
    firstNum = numTotal;
    display.textContent = "";
    numTotal = 0;
    operatorChoice = "subtract";
    return "subtract";
})

divisionBtn.addEventListener('click', () => {
    firstNum = numTotal;
    display.textContent = "";
    numTotal = 0;
    operatorChoice = "divide";
    return "divide"
})

additionBtn.addEventListener('click', () => {
    firstNum = numTotal;
    display.textContent = "";
    numTotal = 0;
    operatorChoice = "add";
    return "add"
})

equalBtn.addEventListener('click', (str, num) => {
    operate(operatorChoice, firstNum, numTotal);
})

// BASIC FUNCTIONS

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
    console.log(a* b);
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
