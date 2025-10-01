const javaButton = document.getElementById("javaButton");
const javaProg = document.getElementById("javaProg");
const javaDiamonds = document.getElementById("javaDiamonds");

let timerID = null;
let remainingSeconds = 15;

javaButton.addEventListener("click", function() {
    if(timerID != null) return;

    let totalSteps = 150;
    let currentStep = 0;

    timerID = setInterval(function() {
        currentStep++;
        javaProg.value = (currentStep / totalSteps) * 100;

        if(currentStep >= totalSteps) {
            clearInterval(timerID);
            timerID = null;
            javaDiamonds.innerHTML += "💎";
        }
    }, 100)
})