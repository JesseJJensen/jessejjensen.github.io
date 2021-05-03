document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fish',
      img: 'images/fish.png'
    },
    {
      name: 'crab',
      img: 'images/crab.png'
    },
    {
      name: 'elephant',
      img: 'images/elephant.png'
    },
    {
      name: 'dino',
      img: 'images/dino.png'
    },
    {
      name: 'bug',
      img: 'images/bug.png'
    },
    {
      name: 'tiger',
      img: 'images/tiger.png'
    },
    {
      name: 'fish',
      img: 'images/fish.png'
    },
    {
      name: 'crab',
      img: 'images/crab.png'
    },
    {
      name: 'elephant',
      img: 'images/elephant.png'
    },
    {
      name: 'dino',
      img: 'images/dino.png'
    },
    {
      name: 'bug',
      img: 'images/bug.png'
    },
    {
      name: 'duck',
      img: 'images/duck.png'
    },
    {
      name: 'rino',
      img: 'images/rino.png'
    },
    {
      name: 'tiger',
      img: 'images/tiger.png'
    },
    {
      name: 'duck',
      img: 'images/duck.png'
    },
    {
      name: 'rino',
      img: 'images/rino.png'
    },

  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/q.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/q.png')
      cards[optionTwoId].setAttribute('src', 'images/q.png')
      alert('this is the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/q.png')
      cards[optionTwoId].setAttribute('src', 'images/q.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'You matched them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
