
let player = {
    name: "Robi",
    chips: 0
}

let cards = [] ;
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerlEl = document.getElementById("player-el");

playerlEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber =  Math.floor( Math.random() * 13 ) + 1;

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack! You've won $50!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game! You've lost $50!"
        isAlive = false;
    }
    messageEl.textContent = message;
    credit();
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function credit() {
    let chipsEl = 50;
    let totalChipsWon = player.chips + chipsEl;
    let totalChipsLost = player.chips - chipsEl;
    if (sum === 21) {
        playerlEl.textContent = player.name + ": $" + totalChipsWon;
    } else if (sum > 21) {
        playerlEl.textContent = player.name + ": $" + totalChipsLost;
    }
    renderGame();
}

