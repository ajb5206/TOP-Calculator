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
    operatorChoice = "";
})

// number buttons 


decimalBtn.addEventListener("click", () => {
    let currentDis = display.textContent;
    currentDis.split('');
    if(currentDis.includes('.'))
    {
        display.textContent += '';
    }else
    {
        display.textContent += '.';
    }
    numTotal = +(display.textContent);
    return numTotal;
})

zeroBtn.addEventListener('click', ()=> {
    display.textContent += "0";
    numTotal = +(display.textContent);
    return numTotal
})
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

equalBtn.addEventListener('click', () => {
    operate(operatorChoice, firstNum, numTotal);
})

// BASIC FUNCTIONS

function add(a, b){
    sum = a + b;
    numTotal = sum;
    return sum;
}

// subtraction

function subtract(a, b){
    sum = a - b;
    numTotal = sum;
    return sum;
}

// multiply

function multiply(a, b)
{
    sum = a * b;
    numTotal = sum
    return sum;
}

// divide

function divide(a, b){
    if(b === 0)
    {
        return "NO WAY JOSE!";
    }
    sum = a / b;
    numTotal = sum;
    return sum;
}

function operate (func)
{
    if (func === "add")
    {
        display.textContent = add(firstNum, numTotal);
    } else if (func === "subtract")
    {
        display.textContent = subtract(firstNum, numTotal);
    } else if (func === "multiply")
    {
        display.textContent = multiply(firstNum, numTotal);
    }else if (func === "divide")
    {
        display.textContent = divide(firstNum, numTotal);
    } else
    {
        display.textContent = "ERROR";
    }
}
