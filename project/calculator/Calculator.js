const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value); // b/c eval() is a dangerous code. and not a good practice to use in real life applications
        // eval() is a method that calculates stuff for us
    } catch (error) {
        display.value = "Error";
    }
}