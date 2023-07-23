import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessBishop, faChessKing, faChessKnight, faChessPawn, faChessQueen, faChessRook } from "@fortawesome/free-solid-svg-icons";

const PosicaoComponent = ({ posicao }) => {
  const peca = posicao.getPeca();
  const corDaPeca = peca ? peca.getCor() : "";
  const corDoTabuleiro = posicao.getCorDoTabuleiro();
  const style = {
    backgroundColor: corDoTabuleiro === "Branco" ? "#043927" : "#00674b"
  };

  const iconesPecas = {
    Peao: faChessPawn,
    Torre: faChessRook,
    Cavalo: faChessKnight,
    Bispo: faChessBishop,
    Rainha: faChessQueen,
    Rei: faChessKing
  };

  const iconePeca = peca ? 
  <FontAwesomeIcon icon={iconesPecas[peca.constructor.name]} size='xl' style={{ color: corDaPeca === "Branco" ? "#ffffff" : "#000000" }} /> 
  : null;

  return (
    <a onClick={possiveisMovimentos} className="w-10 h-10 flex justify-center items-center cursor-pointer" style={style}>
      {iconePeca}
    </a>
  );

  function possiveisMovimentos() {
    console.log(peca);
  }
};

export default PosicaoComponent;