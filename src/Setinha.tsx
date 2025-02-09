import { useState } from "react";

function ListaJogadores(props:any) {
    const [visivel, setVisivel] = useState(false);

    const alternar = () => {
        setVisivel(!visivel);
    };

    return (
        <div>
            <button
                onClick={alternar}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "20px",
                    fontSize: "30px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5%",
                    padding: "10px",
                    cursor: "pointer",
                    zIndex: 10,
                }}
            >
                ☰
            </button>

            {visivel && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "100px",
                        left: "20px",
                        width: "250px",
                        backgroundColor: "#f1f1f1",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                        padding: "20px",
                        overflowY: "auto",
                        zIndex: 5,
                        borderRadius: "10px",
                    }}
                >
                    <h1 style={{ textAlign: "center", fontSize: "16px" }}>Lista de Jogadores</h1>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {props.P.map((player:any, index:any) => (
                            <li key={player.id} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                                {index === props.turno % props.P.length ? (
                                    <span
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                            backgroundColor: "green",
                                            borderRadius: "50%",
                                            marginRight: "10px",
                                        }}
                                    />
                                ) : (
                                  <span
                                      style={{
                                          width: "10px",
                                          height: "10px",
                                          backgroundColor: "#f1f1f1",
                                          borderRadius: "50%",
                                          marginRight: "10px",
                                      }}
                                  />
                              )}
                                {player.name} {player.hand.countCards()} cartas
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ListaJogadores;