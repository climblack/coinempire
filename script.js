let autoIncome = 0;
let autoPrice = 250;
let coins = 0;
let energy = 100;
const maxEnergy = 100;

const coin = document.getElementById("coin");
const coinsText = document.getElementById("coins");
const energyText = document.getElementById("energy");

coin.addEventListener("click", (e) => {

    if (energy <= 0) return;

    coins++;
    energy--;

    coinsText.innerText = coins;
    energyText.innerText = energy;

    // Вибрация
    if (navigator.vibrate) navigator.vibrate(20);

    // Анимация монеты
    coin.style.transform = "scale(.9)";
    setTimeout(() => {
        coin.style.transform = "scale(1)";
    }, 100);

    // +1
    const plus = document.createElement("div");
    plus.className = "plus";
    plus.innerText = "+1";

    plus.style.left = e.pageX + "px";
    plus.style.top = e.pageY + "px";

    document.body.appendChild(plus);

    setTimeout(() => plus.remove(), 1000);
});

// Восстановление энергии
setInterval(() => {
    if (energy < maxEnergy) {
        energy++;
        energyText.innerText = energy;
    }
}, 1000);
function saveGame() {
    localStorage.setItem("coinEmpire", JSON.stringify({
        coins,
        energy,
        clickPower,
        clickPrice
    }));
}
const save = JSON.parse(localStorage.getItem("coinEmpire"));

if (save) {
    coins = save.coins;
    energy = save.energy;
    clickPower = save.clickPower;
    clickPrice = save.clickPrice;

    coinsText.innerText = coins;
    energyText.innerText = energy;
    clickPriceText.innerText = clickPrice;
}
saveGame();
coins += clickPower;
energy--;

coinsText.innerText = coins;
energyText.innerText = energy;

saveGame();
coins -= clickPrice;
clickPower++;
clickPrice = Math.floor(clickPrice * 1.7);

coinsText.innerText = coins;
clickPriceText.innerText = clickPrice;

saveGame();
