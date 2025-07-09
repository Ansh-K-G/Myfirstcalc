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
