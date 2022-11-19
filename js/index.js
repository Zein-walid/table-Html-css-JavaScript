let btn = document.getElementById("btn");
let counterElement = document.getElementById("counter");
let counter = 30;
let doas = ["الحمد الله", "الله اكبر", "سبحان الله"];
let doasCounter = 0;
btn.textContent = doas[doasCounter];
btn.onclick = _ => {
    counterElement.textContent = counter++;
};

window.onload = () => {
    if (navigator.onLine) {
        console.log("Hurray! You're online!!!");
    } else {
        console.log(doasCounter)
        btn.onclick = _ => {
            if (counter > 33) {
                counter = 0;
                if (doasCounter > 2) {
                    doasCounter = 0;
                }
                doasCounter++;
                btn.textContent = doas[doasCounter];

            }
            counterElement.textContent = counter++;
        };
    }
}