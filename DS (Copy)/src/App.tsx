import { useState } from "react";
import Hand from "./Hand";
import PlayedCard from "./PlayedCard";
import Deck from "./Deck";
import SelectedCard from "./SelectedCard";
import JogadorAtt from "./JogadorAtual";
import ListaJogadores from "./Setinha";
import CardGame from "./gameLogic/jogoDeCartas";

const queryParams = new URLSearchParams(window.location.search); //retorna os valores da url (após a interrogação)
const numero = queryParams.get("numero"); //retorna o valor da variável numero de jogadores
const nome = queryParams.get("nome"); //retorna o nome do jogador
const c = queryParams.get("cartas");

let game = new CardGame()
game.startGame(numero,c,nome)

function App(){
  const [pCard,setPCard] = useState({id: 0, color: -1, pos: 0, number: 0})
  const [sCard,setSCard] = useState({render: 0, color: 0, number: 0})
  const [hand,setHand] = useState(game.PlayerList[0].hand.cards)
  const [, forceRender] = useState(false)
  const [players, setPlayers] = useState(game.PlayerList)
  const [msg, setMsg] = useState("")
  const [turn,setTurn] = useState(game.Turn)
  const [oritentation,setOrientation] = useState(1)
  const [bg,setBG] = useState({backgroundColor: "#999999"})

  function handleCardHover(d: any){
    setSCard(d)
  }
  
  function handleCardClick(d:any){
    let valid = 0

    if (game.getPlayerTurn() != 0){
      setMsg("Não é sua vez!")
      return
    }

    if (game.RecentCard == 0){valid = 1}

    if (valid == 0){
      if (game.RecentCard.color == d.color || game.RecentCard.number == d.number){valid = 1}
    }

    if (valid == 1){
      game.RecentCard = d
      setPCard(d)
      updBackground(d.color)
      setMsg("")

      let a = hand
      a.splice(d.pos,1)
      setHand(a)
      console.log(hand)
      setPlayers(game.PlayerList)
      forceRender((prev) => !prev)

      if (a.length == 0){
        game.end = 1
        endGame()
      }

      game.cardEffect(d.number,setMsg)
      game.nextTurn(updateTurn,updatePCard,setMsg,endGame)
    } else {
      setMsg("Carta invalida!")
    }
  }
  
  function drawCard(){
    if (game.getPlayerTurn() != 0){
      setMsg("Não é sua vez!")
      return
    }

    game.PlayerList[0].buyCards(game.Deck)
    setHand(game.PlayerList[0].hand.cards)
    console.log(game.Deck.countCards())
    setPlayers(game.PlayerList)
    forceRender((prev) => !prev)
    game.nextTurn(updateTurn,updatePCard,setMsg,endGame)
  }

  function updateTurn(){
    setTurn(game.Turn)
    setOrientation(game.orientation)
  }

  function updatePCard(){
    setPCard(game.RecentCard)
    updBackground(game.RecentCard.color)
  }

  function endGame(){
    setMsg("Jogo finalisado!")
    let win = game.getWinners()
    let wString = JSON.stringify(win)

    window.location.href = `PaginaFinal.html?win=${encodeURIComponent(wString)}`
  }

  function updBackground(color:any){
    if (color == 0) {
      setBG({backgroundColor: "#ccccff"})
    } else if (color == 1) {
      setBG({backgroundColor: "#ffcccc"})
    } else if (color == 2) {
      setBG({backgroundColor: "#ffffcc"})
    } else {
      setBG({backgroundColor: "#ccffcc"})
    }
  }

  return (<div style={bg}>
  <h1 style={{position: "fixed", bottom: "20px", left: "80px"}}>{msg}</h1>
  <Hand sendData={handleCardClick} sendHover={handleCardHover} cards = {hand}/>
  <div className="position-absolute top-50 start-50 translate-middle">
    <PlayedCard data = {pCard}/>
  </div>
  <div className="position-absolute top-50 end-0 translate-middle">
    <Deck click = {drawCard}/>
  </div>
  <div className="position-absolute bottom-0 end-0">
    <SelectedCard data = {sCard}/>
  </div>
  <ListaJogadores P = {players} turno = {turn}/>
  <JogadorAtt P = {players} turno = {turn} ori = {oritentation}/>
  </div>)
}

export default App