// ==============================
// CoinEmpire Engine
// ==============================

// Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// Элементы
const coin = document.getElementById("coin");
const coinsText = document.getElementById("coins");
const energyText = document.getElementById("energy");
const maxEnergyText = document.getElementById("maxEnergy");
const energyFill = document.getElementById("energyFill");

const incomeText = document.getElementById("income");
const levelText = document.getElementById("level");

// Кнопки магазина
const buyClick = document.getElementById("buyClick");
const buyEnergy = document.getElementById("buyEnergy");
const buyIncome = document.getElementById("buyIncome");

// ==============================
// Данные игрока
// ==============================

let player = {

coins:Number(localStorage.getItem("coins"))||0,

energy:Number(localStorage.getItem("energy"))||1000,

maxEnergy:Number(localStorage.getItem("maxEnergy"))||1000,

clickPower:Number(localStorage.getItem("clickPower"))||1,

income:Number(localStorage.getItem("income"))||0,

level:Number(localStorage.getItem("level"))||1,

xp:Number(localStorage.getItem("xp"))||0

};

// ==============================
// Сохранение
// ==============================

function save(){

localStorage.setItem("coins",player.coins);

localStorage.setItem("energy",player.energy);

localStorage.setItem("maxEnergy",player.maxEnergy);

localStorage.setItem("clickPower",player.clickPower);

localStorage.setItem("income",player.income);

localStorage.setItem("level",player.level);

localStorage.setItem("xp",player.xp);

}

// ==============================
// Интерфейс
// ==============================

function updateUI(){

coinsText.innerHTML=Math.floor(player.coins);

energyText.innerHTML=player.energy;

maxEnergyText.innerHTML=player.maxEnergy;

incomeText.innerHTML=player.income;

levelText.innerHTML=player.level;

energyFill.style.width=(player.energy/player.maxEnergy*100)+"%";

save();

}

updateUI();
// ==============================
// Клик
// ==============================

coin.onclick=function(){

if(player.energy<=0)return;

player.energy--;

player.coins+=player.clickPower;

player.xp++;

coin.style.transform="scale(.9)";

setTimeout(()=>{

coin.style.transform="scale(1)";

},80);

// Всплывающее +монеты

let popup=document.createElement("div");

popup.className="popup";

popup.innerHTML="+"+player.clickPower;

popup.style.left=(coin.offsetLeft+80)+"px";

popup.style.top=(coin.offsetTop+80)+"px";

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},800);

// Повышение уровня

if(player.xp>=100){

player.xp=0;

player.level++;

}

updateUI();

};
// ==============================
// Автовосстановление энергии
// ==============================

setInterval(() => {

    if (player.energy < player.maxEnergy) {
        player.energy++;
        updateUI();
    }

}, 1000);

// ==============================
// Пассивный доход
// ==============================

setInterval(() => {

    if (player.income > 0) {

        player.coins += player.income / 3600;

        updateUI();

    }

}, 1000);

// ==============================
// Покупка силы клика
// ==============================

buyClick.onclick = function () {

    let price = player.clickPower * 100;

    if (player.coins < price) {

        alert("Недостаточно монет!");

        return;

    }

    player.coins -= price;

    player.clickPower++;

    buyClick.innerHTML = player.clickPower * 100;

    updateUI();

};

// ==============================
// Покупка энергии
// ==============================

buyEnergy.onclick = function () {

    let price = player.maxEnergy / 4;

    if (player.coins < price) {

        alert("Недостаточно монет!");

        return;

    }

    player.coins -= price;

    player.maxEnergy += 100;

    player.energy = player.maxEnergy;

    updateUI();

};

// ==============================
// Покупка дохода
// ==============================

buyIncome.onclick = function () {

    let price = (player.income + 10) * 50;

    if (player.coins < price) {

        alert("Недостаточно монет!");

        return;

    }

    player.coins -= price;

    player.income += 10;

    updateUI();

};
