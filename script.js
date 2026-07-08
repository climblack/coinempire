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
