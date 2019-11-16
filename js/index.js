const cards = [];
const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonsWrapper = document.querySelector('.btn-wrapper');
const buttons = ['Shuffle', 'Show/Hide', 'Magic'];

function createCards() {
  for (let i = 0; i < suits.length; i += 1) {
    for (let x = 1; x < 14; x += 1) {
      const cardObject = { key: suits[i], value: x };
      cards.push(cardObject);
    }
  }
}

function renderCards() {
  cards.forEach((card, i) => {
    const positionFromLeft = i * 26;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.key}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

function createButtons() {
  const startButton = document.getElementById('start-game');
  buttonsWrapper.removeChild(startButton);
  buttons.forEach((button, i) => {
    const btn = document.createElement('button');
    btn.innerText = buttons[i];
    btn.classList.add('btn', 'btn-sm', 'btn-secondary');
    btn.style.margin = '20px';
    btn.setAttribute('id', `btn${i}`);
    buttonsWrapper.append(btn);
  });
}

function shuffleCards() {
  cards.sort(() => Math.random() - 0.5);
  renderCards();
}

function showHide() {
  const myarr = cardsWrapper.querySelectorAll('div');
  myarr.forEach((card) => {
    if (card.classList.contains('hidden')) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
      cardsWrapper.classList.add('hidden');
    }
  });
}

function startGame() {
  createCards();
  renderCards();
  createButtons();
  document.getElementById('btn0').addEventListener('click', shuffleCards);
  document.getElementById('btn1').addEventListener('click', showHide);
}

document.getElementById('start-game').addEventListener('click', startGame);
