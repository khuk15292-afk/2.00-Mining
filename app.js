// 2.00 Mining - Demo Mining System

let coins = Number(localStorage.getItem("coins")) || 0;
let energy = Number(localStorage.getItem("energy"));

if (isNaN(energy)) {
    energy = 100;
}

const maxEnergy = 100;
const miningPower = 10;


// Telegram Mini App
const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}


// Elements
const balanceElement = document.getElementById("balance");
const energyElement = document.getElementById("energy");
const mineButton = document.getElementById("mineButton");
const statusElement = document.getElementById("status");


// Update screen
function updateUI() {

    balanceElement.textContent =
        coins.toLocaleString();

    energyElement.textContent =
        `${energy} / ${maxEnergy} ⚡`;

}


// Save data
function saveData() {

    localStorage.setItem(
        "coins",
        coins
    );

    localStorage.setItem(
        "energy",
        energy
    );

}


// Mining
mineButton.addEventListener("click", () => {

    if (energy <= 0) {

        statusElement.textContent =
            "⚡ Energy শেষ! Recharge-এর জন্য অপেক্ষা করো।";

        return;
    }

    coins += miningPower;
    energy -= 1;

    statusElement.textContent =
        `⛏️ +${miningPower} coins mined!`;

    saveData();
    updateUI();


    // Telegram vibration
    if (
        tg &&
        tg.HapticFeedback
    ) {

        tg.HapticFeedback.impactOccurred(
            "medium"
        );

    }

});


// Energy recharge
setInterval(() => {

    if (energy < maxEnergy) {

        energy += 1;

        saveData();
        updateUI();

    }

}, 3000);


// Navigation
document
    .querySelectorAll(".bottom-nav button")
    .forEach((button) => {

        button.addEventListener("click", () => {

            const section =
                button.innerText;

            if (
                section.includes("Home")
            ) {
                statusElement.textContent =
                    "🏠 Welcome to 2.00 Mining";
            }

            else if (
                section.includes("Mining")
            ) {
                statusElement.textContent =
                    "⛏️ Start mining your coins!";
            }

            else if (
                section.includes("Missions")
            ) {
                statusElement.textContent =
                    "📋 Missions will be added soon.";
            }

            else if (
                section.includes("Ranking")
            ) {
                statusElement.textContent =
                    "🏆 Ranking will be added soon.";
            }

            else if (
                section.includes("Profile")
            ) {
                statusElement.textContent =
                    "👤 Profile will be added soon.";
            }

        });

    });


// Start
updateUI();
