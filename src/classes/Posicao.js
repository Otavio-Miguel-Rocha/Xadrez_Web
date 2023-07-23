export class Posicao {
    constructor(id, corDoTabuleiro) {
        this.id = id;
        //essa cor não representa a cor da peça e sim a cor do quadrado do tabuleiro.
        this.corDoTabuleiro = corDoTabuleiro;
    }
    setPeca(peca){
        this.peca = peca;
    }
    getPeca(){
        return this.peca;
    }
    getCorDoTabuleiro(){
        return this.corDoTabuleiro;
    }
    setCorDoTabuleiro(corDoTabuleiro){
        this.corDoTabuleiro = corDoTabuleiro;
    }
}