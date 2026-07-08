// Получаем элементы
const coin = document.getElementById("coin");
const coinsText = document.getElementById("coins");
const energyText = document.getElementById("energy");
const energyFill = document.getElementById("energyFill");

// Данные игрока
let coins = Number(localStorage.getItem("coins")) || 0;
let energy = Number(localStorage.getItem("energy")) || 1000;
const maxEnergy = 1000;
const clickPower = 1;

// Обновление интерфейса
function updateUI() {
    coinsText.innerText = coins;
    energyText.innerText = energy;
    energyFill.style.width = (energy / maxEnergy * 100) + "%";

    localStorage.setItem("coins", coins);
    localStorage.setItem("energy", energy);
}

// Клик по монете
coin.addEventListener("click", () => {

    if (energy <= 0) return;

    coins += clickPower;
    energy--;

    coin.style.transform = "scale(0.9)";

    setTimeout(() => {
        coin.style.transform = "scale(1)";
    }, 100);

    updateUI();
});

// Восстановление энергии
setInterval(() => {

    if (energy < maxEnergy) {
        energy++;
        updateUI();
    }

}, 1000);

// Первый запуск
updateUI();
