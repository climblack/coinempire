let coins = Number(localStorage.getItem("coins")) || 0;
let energy = Number(localStorage.getItem("energy")) || 100;

const maxEnergy = 100;

const coin = document.getElementById("coin");
const coinsText = document.getElementById("coins");
const energyText = document.getElementById("energyText");
const energyFill = document.getElementById("energyFill");

function update() {
    coinsText.textContent = coins;
    energyText.textContent = "⚡ " + energy + " / " + maxEnergy;
    energyFill.style.width = (energy / maxEnergy * 100) + "%";

    localStorage.setItem("coins", coins);
    localStorage.setItem("energy", energy);
}

coin.addEventListener("click", function(e) {

    if (energy <= 0) return;

    coins++;
    energy--;

    const plus = document.createElement("div");
    plus.className = "plus";
    plus.innerText = "+1";

    plus.style.left = e.offsetX + "px";
    plus.style.top = e.offsetY + "px";

    coin.appendChild(plus);

    setTimeout(() => {
        plus.remove();
    }, 800);

    update();
});

setInterval(() => {
    if (energy < maxEnergy) {
        energy++;
        update();
    }
}, 1000);

update();
