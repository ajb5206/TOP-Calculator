// Query Selectors
const clearBtn = document.querySelector("#clearBtn");
const signBtn = document.querySelector("#signChangeBtn");
const percentBtn = document.querySelector("#percentageBtn");
const divisionBtn = document.querySelector("#divisionBtn");








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
