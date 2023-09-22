const outputScreen = document.getElementById("outputScreen");;
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const mainDOM= document.getElementById("main-div")
const button = document.querySelectorAll("button")


function display(value) {
    const operators = ["*", "/", "-", "+", ".", "%"];
    const lastValue = outputScreen.value[outputScreen.value.length-1];

    if (operators.includes(lastValue)) {
        if (lastValue == "*" || lastValue == "/"){
            if (value == "-"){
                outputScreen.value += value; 
            } else if (value == "+" || value == "*" || value == "/"){
                outputScreen.value = outputScreen.value.replace(lastValue, value);
            }
        }

        if (lastValue == "+" || lastValue == "-") {
            if (value == "+" || value == "*" || value == "/" || value == "-"){
                outputScreen.value = outputScreen.value.replace(lastValue, value);
            }
        }

        if(operators.includes(value)){
           console.log("double operator")
           return
        }
    }

    if (outputScreen.value.length === 1 && lastValue == "0"){
        if (value == "." || value == "+" ||  value == "-" || value == "*" || value == "/"){
           outputScreen.value += value;
           return
        }   
        outputScreen.value = parseFloat(outputScreen.value += value); 
        return 
    }

    if (outputScreen.value.includes(".") && outputScreen.value.length > 1){
        if (outputScreen.value.includes("+")|| outputScreen.value.includes("-")|| outputScreen.value.includes("*")||  outputScreen.value.includes("/") && value == "."){
            outputScreen.value += value;
            return
        }else if (value == "."){
            return
        }    
    }
    outputScreen.value += value;
}
 

function Calculate() {
    outputScreen.value = eval(outputScreen.value);
}

function Percentage() {
    const percent = eval(button.value / 100);
    return percent;
}

function Clear() {
    outputScreen.value = "0";
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