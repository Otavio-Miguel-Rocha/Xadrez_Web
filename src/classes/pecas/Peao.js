import { Peca } from "../Peca";

export class Peao extends Peca {
    constructor(cor) {
        super(cor)
        this.primeiroMovimento = true;
    }

    possiveisMovimentos(tabuleiro,posicaoAtual) {
        const possiveisMovimentos = [];
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