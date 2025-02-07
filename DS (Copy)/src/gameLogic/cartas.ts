class Card {
  number: any
  color: any
  
  constructor(color:any,number:any) {
    this.color = color;
    this.number = number;
  }
}


  class CardList {
    cards: any

    constructor() {
        this.cards = [];
    }

    addCard(card:any) {
        this.cards.push(card);
        return card
    }

    removeCard(index:any) {
        if (index >= 0 && index < this.cards.length) {
            let cartaRemovida = this.cards.splice(index, 1);
            return cartaRemovida[0];
        } else {
            return null;
        }
    }

    showCards() {
        if (this.cards.length === 0) {
            console.log("A lista de cartas está vazia.");
        } else {
            console.log("Cartas na lista:");
            this.cards.forEach((carta:any, index:any) => {
                console.log(index + ": ");
                console.log(carta) //Só é possivel imprimir um objeto quando ele é o unico elemento
            });
        }
    }

    countCards() {
        return this.cards.length;
    }
}


class Deck extends CardList {
  constructor() {
    super();
  }

  drawCard() {
    if (this.countCards() == 0){
      this.resetDeck()
    }

    let i = this.countCards();
    let j = Math.floor(Math.random() * i);
    let cartaRemovida = this.cards.splice(j, 1);
    return cartaRemovida[0];
  }

  resetDeck() {
    let n = 0
    this.cards = [];
    for (let color = 0; color <= 3; color++) {
      for (let number = 0; number <= 9; number++) {
        n = n+1
        this.addCard(new Card(color, number));
      }
    }
  }
}

export {CardList,Deck,Card};