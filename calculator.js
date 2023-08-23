const outputScreen = document.getElementById("outputScreen");
const bright = document.getElementById("bright");
const dark = document.getElementById("dark");
const container = document.querySelector("container")
const icon = document.querySelectorAll("icon")
const calSymbols = document.querySelector("cal-symbols")
const fontColor = document.querySelectorAll("font-color")
const button = document.querySelectorAll("button")

function display(num) {
    outputScreen.value += num;
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

function darkMode() {
    alert("color changes")
    // container.style.backgroundColor = "black";

}

function brightMode() {
    alert("color changes")
    //     container.style.backgroundColor  = "white"
    //     icon.style.backgroundColor = "whitesmoke"
    //     icon.style.color = "black"
    //     calSymbols.style.background = "whitesmoke"
    //     button.style.background = "white"
    //     fontColor.style.color = "black" 
    //     outputScreen.style.color = "black"
    //     dark.style.opacity = "0.6"

    // container.classList.add("bright-container")
    // icon.classList.add("")
}

