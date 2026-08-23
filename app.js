let coins = 0;
let energy = 100;

const coinDisplay = document.createElement("h2");
coinDisplay.textContent = "🪙 Coins: 0";

const energyDisplay = document.createElement("p");
energyDisplay.textContent = "⚡ Energy: 100";

const mineButton = document.createElement("button");
mineButton.textContent = "⛏️ MINE";

mineButton.style.display = "block";
mineButton.style.margin = "30px auto";
mineButton.style.padding = "18px 40px";
mineButton.style.fontSize = "22px";
mineButton.style.borderRadius = "15px";
mineButton.style.background = "#1f8cff";
mineButton.style.color = "#fff";

document.body.appendChild(coinDisplay);
document.body.appendChild(energyDisplay);
document.body.appendChild(mineButton);

mineButton.addEventListener("click", () => {
    if (energy <= 0) {
        alert("⚡ Energy শেষ!");
        return;
    }

    coins += 10;
    energy -= 1;

    coinDisplay.textContent = `🪙 Coins: ${coins}`;
    energyDisplay.textContent = `⚡ Energy: ${energy}`;
});

setInterval(() => {
    if (energy < 100) {
        energy++;
        energyDisplay.textContent = `⚡ Energy: ${energy}`;
    }
}, 3000);
