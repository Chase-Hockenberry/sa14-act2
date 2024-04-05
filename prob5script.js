const animatedDiv = document.getElementById("animatedDiv");
const controlButton = document.getElementById("controlButton");

let isMoved = false;

controlButton.addEventListener("click", function() {
    if (!isMoved) {
        animatedDiv.style.transform = "translate(-50%, -50%) translateX(200px)";
        isMoved = true;
    } else {
        animatedDiv.style.transform = "translate(-50%, -50%)";
        isMoved = false;
    }
});
