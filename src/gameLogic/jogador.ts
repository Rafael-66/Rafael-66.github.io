import { CardList } from "./cartas.js";

class Player{
    id: any
    name: any
    hand: any

    constructor(name:any, id:any){
        this.id = id;
        this.name = name;
        this.hand = new CardList();
    }

    getPlayerId(){
        return this.id;
    }

    buyCards(Deck:any){
        let card = Deck.drawCard();
        this.hand.addCard(card);
        return card;
    }

    playCard(index:any){
         if (index < 0 || index >= this.hand.countCards()) {
            console.log(`${this.name} tentou jogar uma carta inválida!`);
            return null; 
    }
        const card = this.hand.removeCard(index); 
        return card; 
    }

    showHand() {
        this.hand.showCards();
    }
}

export{Player}