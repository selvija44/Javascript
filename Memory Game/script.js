
const cards = [
    {
        name : 'kiwi',
        value : '<i class="fa-solid fa-kiwi-bird"></i>'
    },
    {
        name : 'crow',
        value : '<i class="fa-solid fa-crow"></i>'
    },
    {
        name : 'burger',
        value : '<i class="fa-solid fa-burger"></i>'
    },
    {
        name : 'cake-candle',
        value : '<i class="fa-solid fa-cake-candles"></i>'
    },
    {
        name : 'bus',
        value : '<i class="fa-solid fa-bus"></i>'
    },
    {
        name : 'car',
        value : '<i class="fa-solid fa-car"></i>'
    },
    {
        name : 'kiwi',
        value : '<i class="fa-solid fa-kiwi-bird"></i>'
    },
    {
        name : 'crow',
        value : '<i class="fa-solid fa-crow"></i>'
    },
    {
        name : 'burger',
        value : '<i class="fa-solid fa-burger"></i>'
    },
    {
        name : 'cake-candle',
        value : '<i class="fa-solid fa-cake-candles"></i>'
    },
    {
        name : 'bus',
        value : '<i class="fa-solid fa-bus"></i>'
    },
    {
        name : 'car',
        value : '<i class="fa-solid fa-car"></i>'
    }
]

let playCards = [];
shuffleCards();
let matchedPairs = 0; 
const gameboard = document.getElementById('gameboard')
displayCard();

function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    const randomNo = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[randomNo]] = [cards[randomNo], cards[i]];
  }
}

// console.log(cards);

function displayCard(){
  cards.forEach((current,index,arr) => {
    const cardele = document.createElement('div');
    cardele.setAttribute('id',index);
    cardele.classList.add('card-back');
    cardele.classList.add('active');
    gameboard.append(cardele);
    cardele.addEventListener('click',flipCard);

  })
}
function flipCard(){
  
        if (playCards.length < 2 && this.classList.contains('active')) {
            let cardId = this.getAttribute('id');
            playCards.push(this);
            this.classList.remove('card-back');
            this.classList.remove('active');
            this.innerHTML = cards[cardId].value;
            if (playCards.length === 2){
                setTimeout(checkMatch,1000);
            }
        }
    }

function checkMatch(){
    const card1Id = playCards[0].getAttribute('id');
    const card2Id = playCards[1].getAttribute('id');
    if(cards[card1Id].name === cards[card2Id].name){
        playCards[0].style.border = 'none';
        playCards[0].style.backgroundColor = 'palevioletred';
        playCards[0].innerHTML = '';
        playCards[0].classList.remove('active');
        playCards[1].classList.remove('active');
        playCards[1].style.border = 'none';
        playCards[1].style.backgroundColor = 'palevioletred';
        playCards[1].innerHTML = "";
        matchedPairs++;
        checkGameOver();
    }
    else{
        playCards[0].innerHTML = '';
        playCards[0].classList.add('card-back');
        playCards[0].classList.add('active'); 
        playCards[1].innerHTML = '';
        playCards[1].classList.add('card-back');
        playCards[1].classList.add('active');

    }
    playCards = [];
}

function checkGameOver(){
    if(matchedPairs == cards.length/2){
        while(gameboard.firstChild){
            gameboard.removeChild(gameboard.firstChild)
        }
        gameboard.innerHTML = 'You Won';
        gameboard.classList.remove('game');
        gameboard.classList.add('won');
    }
}

