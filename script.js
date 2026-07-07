let coins = 0;
let energy = 100;

const coin = document.getElementById("coin");
const coinsText = document.getElementById("coins");
const energyText = document.getElementById("energy");

coin.onclick = () => {

    if(energy <= 0) return;

    coins++;
    energy--;

    coinsText.innerText = coins;
    energyText.innerText = energy;
}
