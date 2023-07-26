import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessBishop,
  faChessKing,
  faChessKnight,
  faChessPawn,
  faChessQueen,
  faChessRook,
} from "@fortawesome/free-solid-svg-icons";

const PosicaoComponent = React.memo(({ posicao, tabuleiro }) => {
  //cor fundo
  const [backgroundColor, setBackgroundColor] = useState(
    posicao.getCorDoTabuleiro() === "Vermelho" ? "black" : 
    posicao.getCorDoTabuleiro() === "Branco" ? "red" : "#00674b"
  );

  const peca = posicao.getPeca();
  const corDaPeca = peca ? peca.getCor() : "";

  const styleIconePeca = {
    color: corDaPeca === "Branco" ? "#ffffff" : "#000000",
  };

  const iconesPecas = {
    Peao: faChessPawn,
    Torre: faChessRook,
    Cavalo: faChessKnight,
    Bispo: faChessBishop,
    Rainha: faChessQueen,
    Rei: faChessKing,
  };

  // useEffect(() => {
    
  // },[corDaPeca]);

  const iconePeca = peca ? (
    <FontAwesomeIcon
      icon={iconesPecas[peca.constructor.name]}
      size="xl"
      style={styleIconePeca}
    />
  ) : null;

  return (
    <a
      onMouseOver={() => setBackgroundColor("gray")}
      onMouseLeave={() => setBackgroundColor(posicao.getCorDoTabuleiro() === "Branco" ? "#043927" : "#00674b")}
      onClick={() => possiveisMovimentosPeca()}
      className="w-10 h-10 flex justify-center items-center cursor-pointer"
      style={{ backgroundColor }}
    >
      {iconePeca}
    </a>
  );

  function possiveisMovimentosPeca() {
    let possiveisMovimentos = peca.possiveisMovimentos(tabuleiro, posicao);
    let novasPosicoes = [];
    tabuleiro.getPosicoes().forEach((posicao) => {
        novasPosicoes.push(posicao);
        for(let i = 0 ; i < possiveisMovimentos.length ; i++){
            if(posicao.id === possiveisMovimentos[i].id){
                posicao.setCorDoTabuleiro("Vermelho");
            }
        }
      });
    console.log(novasPosicoes);
  }
});

export default PosicaoComponent;
