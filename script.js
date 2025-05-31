const operationDisplay = document.getElementById("operation")
const resultDisplay = document.getElementById("result")

const buttons = document.querySelectorAll("button")

let currentInput = ""
let operation = ""

buttons.forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button))
});

function handleButtonClick(button) {
    const value = button.textContent

    if (button.classList.contains("number")) {
        currentInput += value
        resultDisplay.textContent = currentInput
    } else if (button.classList.contains("operator")) {
        operation += currentInput + " " + value
        currentInput = " "
        operationDisplay.textContent = operation
    } else if (button.classList.contains("equals")) {
        operation += " " + currentInput
        resultDisplay.textContent = eval(operation)
        operationDisplay.textContent = operation
        operation = " "
        currentInput = " "
    } else if (button.classList.contains("clear")) {
        resultDisplay.textContent = "0"
        operationDisplay.textContent = " "
        operation = " "
        currentInput = " "
    }
}