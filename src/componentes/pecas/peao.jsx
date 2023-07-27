import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessPawn} from "@fortawesome/free-solid-svg-icons";
const PeaoComponent = (props) => {
    const corPeca = {
        color: props.color === "white" ? "#ffffff" : "#000000"
    };
    return(
        <>
        <FontAwesomeIcon
        icon={faChessPawn} 
        size="xl"
        style={corPeca}/>  
        </>
    );
    
    function possiveisMovimentos(tabuleiro,posicaoAtual) {
        let possiveisMovimentos = [];
        const posicaoNoTabuleiro = tabuleiro.getPosicoes().indexOf(posicaoAtual);
      
        const posicoesTabuleiro = tabuleiro.getPosicoes();
        if (this.getCor() === "Preto") {
          if (!posicoesTabuleiro[posicaoNoTabuleiro + 8].getPeca()) {
            possiveisMovimentos.push(posicoesTabuleiro[posicaoNoTabuleiro + 8]);
            if (!posicoesTabuleiro[posicaoNoTabuleiro + 16].getPeca()) {
              if (this.primeiroMovimento) {
                possiveisMovimentos.push(posicoesTabuleiro[posicaoNoTabuleiro + 16]);
              }
            }
          }
          if (
            posicoesTabuleiro[posicaoNoTabuleiro + 9].getPeca() &&
            posicoesTabuleiro[posicaoNoTabuleiro + 9].getPeca().getCor() === "Branco" &&
            !validaExtremidade(posicaoNoTabuleiro + 1)
          ) {
            possiveisMovimentos.push(posicoesTabuleiro[posicaoNoTabuleiro + 9]);
          }
          if (
            posicoesTabuleiro[posicaoNoTabuleiro + 7].getPeca() &&
            posicoesTabuleiro[posicaoNoTabuleiro + 7].getPeca().getCor() === "Branco" &&
            !validaExtremidade(posicaoNoTabuleiro)
          ) {
            possiveisMovimentos.push(posicoesTabuleiro[posicaoNoTabuleiro + 7]);
          }
        } else {
          if (!posicoesTabuleiro[posicaoNoTabuleiro - 8].getPeca()) {
            possiveisMovimentos.push(posicoesTabuleiro[posicaoNoTabuleiro - 8]);
            if (this.primeiroMovimento) {
              if (!posicoesTabuleiro[posicaoNoTabuleiro - 16].getPeca()) {
                possiveisMovimentos.push(posicoesTabuleiro[posicaoNoTabuleiro - 16]);
              }
            }
          }
          if (
            posicoesTabuleiro[posicaoNoTabuleiro - 9].getPeca() &&
            posicoesTabuleiro[posicaoNoTabuleiro - 9].getPeca().getCor() === "Preto" &&
            !validaExtremidade(posicaoNoTabuleiro)
          ) {
            possiveisMovimentos.push(posicoesTabuleiro[posicaoNoTabuleiro - 9]);
          }
          if (
            posicoesTabuleiro[posicaoNoTabuleiro - 7].getPeca() &&
            posicoesTabuleiro[posicaoNoTabuleiro - 7].getPeca().getCor() === "Preto" &&
            !validaExtremidade(posicaoNoTabuleiro + 1)
          ) {
            possiveisMovimentos.push(posicoesTabuleiro[posicaoNoTabuleiro - 7]);
          }
        }
        return possiveisMovimentos;
      }
}
export default PeaoComponent;