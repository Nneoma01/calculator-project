const outputScreen = document.getElementById("outputScreen");
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const mainDOM= document.getElementById("main-div")
const buttons = document.querySelectorAll("button")
const specialCharacters = ["%", "+", "/", "*", "="];
let output = "";
display.value = output;


function display(num) {
    outputScreen.value += num;
    if (output === "" && specialCharacters.includes(num)){
        return output += num;
    }
}

function Calculate() {
    outputScreen.value = eval(outputScreen.value);
}

function Clear() {
    outputScreen.value = "";
}

function Delete() {
    outputScreen.value = outputScreen.value.slice(0,-1);
}

function enableDarkMode() {
    mainDOM.classList.replace('light', 'dark');  
}  

function enableLightMode() {
    mainDOM.classList.replace('dark', 'light');
}


