// const button = document.querySelectorAll("button")
// const calAnswer = document.querySelector(".cal-answer")


// const displayValue = (value) => {
//     if (value === "AC") {
//       calAnswer.style.display = "AC";
//     } else {
//       calAnswer.style.display = value;
//     }
//   }
  
//   button.forEach(button => {
//     button.addEventListener("click", e => {
//       const value = button.getAttribute("value")
//       displayValue(value)
//     })
//   })

const outputScreen = document.getElementById("output-screen");

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
    outputScreen.value = outputScreen.value.slice()
}

