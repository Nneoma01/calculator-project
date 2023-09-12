const outputScreen = document.getElementById("outputScreen");
// const percent =  document.getElementById("percent");
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const mainDOM= document.getElementById("main-div")
const button = document.querySelectorAll("button")
// const specialCharacters = ["%", "+", "/", "*", "="];
// const lastValue = button.value(button.value.length-1);
// let output = "";
// display.value = output;


function display(value) {
    const operators = ["*", "/", "-", "+", ".", "%"];
    // const operator = ["*", "/", "+", ".", "%"];
    const lastValue = outputScreen.value[outputScreen.value.length-1];

    if (operators.includes(lastValue)) {
        if (lastValue == "*" || lastValue == "/"){
            if (value == "-"){
                outputScreen.value += value; 
                return
            }
        }
        
        if(operators.includes(value)){
           console.log("double operator")
          return
        }
    }

    if (outputScreen.value.length === 1 && lastValue == "0"){
        if (value == "."){
           outputScreen.value += value;
           return
        }   
    
        // outputScreen.value = parseFloat(outputScreen.value += value); 

        if (value == "." && outputScreen.value.includes(".")){
            outputScreen.value = parseFloat(outputScreen.value += value); 
            return
        }
       
    }
    // function appendToInput(value) {
    //     // Check if the input already contains a decimal point
    //     if (value === '.' && outputScreen.value.includes('.')) {
    //         // If it does, do nothing
    //         return;
    //     }
    // }

    

    outputScreen.value += value;

}

// function appendToInput(value) {
//     // Check if the input already contains a decimal point
//     if (value === '.' && outputScreen.value.includes('.')) {
//         // If it does, do nothing
//         return;
//     }

//     outputScreen.value += value;
// }

// function validateVal(num){
//     // alert("helllo")
//     const operators = ["*", "/", "-", "+", ".", "%"];
//     const operator = ["*", "/", "+", ".", "%"];
//     const lastValue = outputScreen.value[outputScreen.value.length-1];

//     // if (button.innerHTML == "." && lastValue == "."){
//     //     return false;
//     // }

//    if (operators.includes(lastValue)) {
//      if(operators.includes(num)){
//         console.log("double operator")
//        return false
//      }
//    }
   
//     // const isValDisAllowed = strictValues.includes(num)
    
    // if (isValDisAllowed){ 
    //     return
    // }

//     if (lastValue === operators){
//         if (typeof num !== "number"){
//             return
//         }
//     }

//     if (outputScreen.value.length < 0){
//         if (button.innerHTML === operator){
//              return
//         }          
//     }
// }    

//     if (strictValues.includes(num)){
//         if(strictValues.includes(lastValue)){
//             return false;
//         }else{
//             return true;
//         }
//     }
//     return true;
// }

 

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