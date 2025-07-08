// let buttons = document.querySelectorAll("button");
// let display = document.querySelector(".display");
// for (const button of buttons){
//     button.addEventListener("click", function(){
//         if (button.innerText === "="){
//             display.innerText = eval(display.innerText);
//             console.log("evaluate");
//         }
//         else if(button.innerText === "<-"){
//             display.innerText = display.innerText.slice(0,-1)
//             }
//         else if(button.innerText === "C"){ 
//             console.log("Clear");
//             display.innerText = null;
//         }
//         else{
//             display.innerText += button.innerText;
//         }
//     });
// }
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const val = button.innerText;

        switch (val) {
            case "=":
                try {
                    display.innerText = Function('"use strict";return (' + display.innerText + ')')();
                } catch {
                    display.innerText = "Error";
                }
                break;

            case "←":
                display.innerText = display.innerText.slice(0, -1);
                break;

            case "C":
                display.innerText = "";
                break;

            default:
                display.innerText += val;
        }
    });
});
