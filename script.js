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
    // numArr = [];
    operatorChoice = "";
})

//other buttons

percentBtn.addEventListener("click", () => {
    numTotal = numTotal / 100;
    display.textContent = numTotal;
    return numTotal;
})

signBtn.addEventListener("click", () => {
    numTotal = numTotal * (-1);
    display.textContent = numTotal;
    return numTotal;
})

document.addEventListener("keydown", (e) => {
    let numArr = numTotal.toString().split('');
    if(e.key === "Backspace")
    {
       numArr.pop();
       numTotal = +(numArr.join(''));
       display.textContent = numTotal;
    }
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
})
oneBtn.addEventListener('click', () => {
    display.textContent += "1";
    numTotal = +(display.textContent);
})

twoBtn.addEventListener('click', () => {
    display.textContent += "2";
    numTotal = +(display.textContent);
})

threeBtn.addEventListener('click', () => {
    display.textContent += "3";
    numTotal = +(display.textContent);
})

fourBtn.addEventListener('click', () => {
    display.textContent += "4";
    numTotal = +(display.textContent);
})

fiveBtn.addEventListener('click', () => {
    display.textContent += "5";
    numTotal = +(display.textContent);
})

sixBtn.addEventListener('click', () => {
    display.textContent += "6";
    numTotal = +(display.textContent);
})

sevenBtn.addEventListener('click', () => {
    display.textContent += "7";
    numTotal = +(display.textContent);
})

eightBtn.addEventListener('click', () => {
    display.textContent += "8";
    numTotal = +(display.textContent);
})

nineBtn.addEventListener('click', () => {
    display.textContent += "9";
    numTotal = +(display.textContent);
})

// operators

mulitplicationBtn.addEventListener('click', () => {
    firstNum = numTotal;
    display.textContent = "";
    numTotal = 0
    operatorChoice = "multiply";
})

subtractionBtn.addEventListener('click', () => {
    firstNum = numTotal;
    display.textContent = "";
    numTotal = 0;
    operatorChoice = "subtract";
})

divisionBtn.addEventListener('click', () => {
    firstNum = numTotal;
    display.textContent = "";
    numTotal = 0;
    operatorChoice = "divide";
})

additionBtn.addEventListener('click', () => {
    firstNum = numTotal;
    display.textContent = "";
    numTotal = 0;
    operatorChoice = "add";
})

equalBtn.addEventListener('click', () => {
    operate(operatorChoice);
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
        return "Maybe Infinity?";
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
        operatorChoice = "";
    } else if (func === "subtract")
    {
        display.textContent = subtract(firstNum, numTotal);
        operatorChoice = "";
    } else if (func === "multiply")
    {
        display.textContent = multiply(firstNum, numTotal);
        operatorChoice = "";
    }else if (func === "divide")
    {
        display.textContent = divide(firstNum, numTotal);
        operatorChoice = "";
    } else
    {
        display.textContent = "ERROR";
    }
}
