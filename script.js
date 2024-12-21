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
let firstNum = 0;


//clear btn
clearBtn.addEventListener("click", ()=>{
    display.textContent = "";
    numTotal = 0;
    firstNum = 0;
    operatorChoice = "";
})

//other buttons

percentBtn.addEventListener("click", () => {
    if(+(display.textContent) === firstNum)
    {
        firstNum = firstNum / 100;
        display.textContent = firstNum;
    }else
    {
        numTotal = numTotal / 100;
        display.textContent = numTotal;
    }
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
    firstNum = +(display.textContent);
    //return numTotal;
})

zeroBtn.addEventListener('click', ()=> {
    display.textContent += "0";
    firstNum = +(display.textContent);
})
oneBtn.addEventListener('click', () => {
    if(firstNum === 0)
        {
            display.textContent = "";
        }
        
        display.textContent += "1";
        firstNum = +(display.textContent);
})

twoBtn.addEventListener('click', () => {
    if(firstNum === 0)
        {
            display.textContent = "";
        }
        
        display.textContent += "2";
        firstNum = +(display.textContent);
})

threeBtn.addEventListener('click', () => {
    if(firstNum === 0)
        {
            display.textContent = "";
        }
        
        display.textContent += "3";
        firstNum = +(display.textContent);
})

fourBtn.addEventListener('click', () => {
    if(firstNum === 0)
        {
            display.textContent = "";
        }
        
        display.textContent += "4";
        firstNum = +(display.textContent);
})

fiveBtn.addEventListener('click', () => {
    if(firstNum === 0)
        {
            display.textContent = "";
        }
        
        display.textContent += "5";
        firstNum = +(display.textContent);
})

sixBtn.addEventListener('click', () => {
    if(firstNum === 0)
        {
            display.textContent = "";
        }
        
        display.textContent += "6";
        firstNum = +(display.textContent);
})

sevenBtn.addEventListener('click', () => {
    if(firstNum === 0)
        {
            display.textContent = "";
        }
        
        display.textContent += "7";
        firstNum = +(display.textContent);
})

eightBtn.addEventListener('click', () => {
    if(firstNum === 0)
        {
            display.textContent = "";
        }
        
        display.textContent += "8";
        firstNum = +(display.textContent);
})

nineBtn.addEventListener('click', () => {
    if(firstNum === 0)
    {
        display.textContent = "";
    }
    
    display.textContent += "9";
    firstNum = +(display.textContent);
})

// operators

mulitplicationBtn.addEventListener('click', () => {
    if(firstNum && numTotal)
    {
        operate(operatorChoice)
    }else if(numTotal)
        {
            operatorChoice = "multiply";
        }else{
        operatorChoice = "multiply";
        numTotal = firstNum;
        firstNum = 0;
        display.textContent = "";
    }
    operatorChoice = "multiply";
})

subtractionBtn.addEventListener('click', () => {
    
    if(firstNum && numTotal)
    {
        operate(operatorChoice)
    }else if(numTotal)
        {
            operatorChoice = "subtract";
        }else{
        operatorChoice = "subtract";
        numTotal = firstNum;
        firstNum = 0;
        display.textContent = "";
    }
    operatorChoice = "subtract";
})

divisionBtn.addEventListener('click', () => {
    
    if(firstNum && numTotal)
    {
        operate(operatorChoice)
    }else if(numTotal)
        {
            operatorChoice = "divide";
        }else{
        operatorChoice = "divide";
        numTotal = firstNum;
        firstNum = 0;
        display.textContent = "";
    }
    operatorChoice = "divide";
})

additionBtn.addEventListener('click', () => {
    
    if(firstNum && numTotal)
    {
        operate(operatorChoice)
    }else if(numTotal)
    {
        operatorChoice = "add";
    }
    else{
        operatorChoice = "add";
        numTotal = firstNum;
        firstNum = 0;
        display.textContent = "";
    }
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

function operate(func)
{
    if (func === "add")
    {
        display.textContent = add(numTotal, firstNum);
        numTotal = +(display.textContent);
        firstNum = 0;
        operatorChoice = "";
    } else if (func === "subtract")
    {
        display.textContent = subtract(numTotal, firstNum);
        numTotal = +(display.textContent);
        firstNum = 0;
        operatorChoice = "";
    } else if (func === "multiply")
    {
        display.textContent = multiply(numTotal, firstNum);
        numTotal = +(display.textContent);
        firstNum = 0;
        operatorChoice = "";
    }else if (func === "divide")
    {
        display.textContent = divide(numTotal, firstNum);
        numTotal = +(display.textContent);
        firstNum = 0;
        operatorChoice = "";
    } else
    {
        display.textContent = "ERROR";
    }
}
