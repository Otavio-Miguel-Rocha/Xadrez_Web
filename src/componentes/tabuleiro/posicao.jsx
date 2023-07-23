import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessBishop,
  faChessKing,
  faChessKnight,
  faChessPawn,
  faChessQueen,
  faChessRook,
} from "@fortawesome/free-solid-svg-icons";



const PosicaoComponent = ({ posicao,tabuleiro }) => {

  const peca = posicao.getPeca();
  const corDaPeca = peca ? peca.getCor() : "";
  const corDoTabuleiro = posicao.getCorDoTabuleiro();

  //styles
  let styleCorQuadradoTabuleiro = {}
  if(posicao.getCorDoTabuleiro() === "Amarelo"){
    styleCorQuadradoTabuleiro = {
      backgroundColor: "#fde047",
    };
  } else{
      styleCorQuadradoTabuleiro = {
          backgroundColor: corDoTabuleiro === "Branco" ? "#043927" : "#00674b",
        };
    }
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

  const iconePeca = peca ? (
    <FontAwesomeIcon
      icon={iconesPecas[peca.constructor.name]}
      size="xl"
      style={styleIconePeca}
    />
  ) : null;

  return (
    <a
      onClick={possiveisMovimentos}
      className="w-10 h-10 flex justify-center items-center cursor-pointer"
      style={styleCorQuadradoTabuleiro}
    >
      {iconePeca}
    </a>
  );

  function possiveisMovimentos() {
    let possiveisMovimentosDaPeca = peca.possiveisMovimentos(tabuleiro, posicao);
    console.log(possiveisMovimentosDaPeca);
    //Continuar a partir daqui...
  }
};

export default PosicaoComponent;
