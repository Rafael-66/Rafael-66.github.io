import { Deck } from "./cartas.js";
import { Player } from "./jogador.js"

class CardGame {
    PlayerList: any
    Winners: any
    Deck: any
    Turn: any
    RecentCard: any
    end: any
    orientation: any
    buy2Next: any

    constructor() {
        this.PlayerList = [];
        this.Winners = [];
        this.Deck = new Deck();
        this.Turn = 0;
        this.RecentCard = 0;
        this.end = 0;
        this.orientation = 1;
        this.buy2Next = 0;
    }

    startGame(PInput:any,SCards:any,P1Name:any) {
        let PCount = PInput
        PCount = Math.max(2,PCount)
        PCount = Math.min(100,PCount)

        this.Turn = 1000000*PCount;
        this.RecentCard = 0;
        this.Deck.resetDeck();
        this.PlayerList = [];
        this.Winners = [];
        this.end = 0;
        this.orientation = 1;
        this.buy2Next = 0;

        this.PlayerList.push(new Player(P1Name,0));

        for (let i = 1; i < PCount; i++) {
            this.PlayerList.push(new Player("Bot"+i,i));
        }

        for (let i = 0; i < PCount; i++) {
            for (let j = 0; j < SCards; j++) {
                this.PlayerList[i].buyCards(this.Deck);
            }
        }
        
        console.log("test")

        for (let i = 0; i < PCount; i++) {
            console.log(this.PlayerList[i].hand);
        }

        console.log(this.Turn)
    }

    getPlayerTurn() {
        console.log(this.Turn % this.PlayerList.length)
        return this.Turn % this.PlayerList.length
    }
    
    test(){
        for (let i = 0; i < 4; i++) {
            console.log(this.PlayerList[i].hand);
        }
    }
    
    validateCards(p:any) {
        let validC: any[] = [];

        if (this.RecentCard == 0){
            for (let i = 0; i < p.hand.countCards(); i++) {
                validC.push(i);
            }
            return validC;
        }

        for (let i = 0; i < p.hand.countCards(); i++) {
            let c = p.hand.cards[i];

            if (c.color == this.RecentCard.color || c.number == this.RecentCard.number){
                validC.push(i);
            }
        }
        return validC;
    }

    enemyAiSimple(p:any,updPCard:any,updMsg:any) {
        let vc = this.validateCards(p);
        
        if (vc.length == 0) {
            p.buyCards(this.Deck);
            updMsg(p.name + " comprou uma carta!")
            return;
        }

        let i = Math.floor(Math.random() * vc.length);
        let j = vc[i];
        let c = p.playCard(j);
        this.RecentCard = c;
        updPCard()
        updMsg("")
        this.cardEffect(c.number,updMsg)
    }

    nextTurn(func1:any,func2:any,func3:any,func4:any) {
        if (this.end == 1){return}

        this.Turn = this.Turn +this.orientation
        let t = this.getPlayerTurn();
        let p = this.PlayerList[t];

        if (this.buy2Next == 1){
            p.buyCards(this.Deck)
            p.buyCards(this.Deck)
            this.buy2Next = 0
            func3(p.name + " comprou 2 cartas!")
        }

        console.log(this.Turn)

        func1()

        if (t != 0) {
            setTimeout(() => {
                this.enemyAiSimple(p,func2,func3);
                this.nextTurn(func1,func2,func3,func4)
                if (p.hand.countCards() == 0){
                    this.end = 1;
                    func4()
                }
            }, 1500);
        }

    }

    cardEffect(num:any, updMsg:any){
        if (num == 10) {
            this.Turn++
            updMsg("Turno pulado!")
        } else if (num == 11) {
            this.orientation = this.orientation*-1
            updMsg("Ordem invertida!")
        } else if (num == 12) {
            this.buy2Next = 1
        }
    }

    getWinners() {
        let arr = []
        let n = 0

        while (arr.length != this.PlayerList.length){
            for (let i = 0; i < this.PlayerList.length; i++){
                if (this.PlayerList[i].hand.countCards() == n){
                    arr.push({nome: this.PlayerList[i].name, cartas: n})
                }
            }
            n = n+1
        }

        return arr
    }
}

export default CardGame