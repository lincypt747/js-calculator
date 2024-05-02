// VARIABLES
const calcDisplay = document.getElementById("calc-display");
const calcButtons = document.getElementById("frame");
let result = 0;
let display = "";
let expression = "";

function appendDisplay(input) {
    display += input;
    calcDisplay.innerText = display;
}

function resetDisplay() {
    calcDisplay.innerHTML = "";
    expression = '';
}

function calculate() {
    expression = expression + calcDisplay.innerText;
    try {
        result = eval (expression);
        calcDisplay.innerText = Number.isInteger(result) ? result : result.toFixed(2);
    }
    catch (error)
    {
        calcDisplay.value = 'Error';
    }
    display = '';
}

calcButtons.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target.classList.contains("reset-button")) {
        resetDisplay();
    } else if (target.classList.contains("equals-button")) {
        calculate();
        expression = '';
     } else if (target.classList.contains("operation-button")) {
        calculate();
        expression += target.innerText;
     } else {
        appendDisplay(target.innerText);
    }
});