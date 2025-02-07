function JogadorAtt(props:any) {

  const getJogadorAtual = () => props.P[props.turno % props.P.length];
  const getJogadorAnterior = () => props.P[(props.turno - 1 + props.P.length) % props.P.length];
  const getJogadorProximo = () => props.P[(props.turno + 1) % props.P.length];

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "80%", padding: "10px", position: "absolute", top: "10px" }}>
        {/* Jogador Anterior */}
        <div style={{ textAlign: "center", width: "25%", padding: "8px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px", backgroundColor: "white" }}>
          <h3>Jogador Anterior</h3>
          <h2>{getJogadorAnterior().name}</h2>
          <p>{getJogadorAnterior().hand.countCards()} cartas restantes</p>
        </div>

        {/* Jogador Atual */}
        <div style={{ textAlign: "center", width: "40%", padding: "15px", border: "2px solid #000", borderRadius: "8px", fontSize: "18px", backgroundColor: getJogadorAtual().id === 0 ? "green" : "white", color: getJogadorAtual().id === 0 ? "white" : "black" }}>
          <h3>{getJogadorAtual().id === 0 ? "" : "Jogador Atual"}</h3>
          <h2>{getJogadorAtual().id === 0 ? "SEU TURNO!" : getJogadorAtual().name}</h2>
          <p>{getJogadorAtual().hand.countCards()} cartas restantes</p>
        </div>

        {/* Próximo Jogador */}
        <div style={{ textAlign: "center", width: "25%", padding: "8px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px", backgroundColor: "white" }}>
          <h3>Próximo Jogador</h3>
          <h2>{getJogadorProximo().name}</h2>
          <p>{getJogadorProximo().hand.countCards()} cartas restantes</p>
        </div>
      </div>
    </div>
  );
}

export default JogadorAtt;