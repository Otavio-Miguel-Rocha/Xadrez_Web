import { Posicao } from "./Posicao";
import { Peao } from "./pecas/Peao";
import { Torre } from "./pecas/Torre";
import { Cavalo } from "./pecas/Cavalo";
import { Bispo } from "./pecas/Bispo";
import { Rainha } from "./pecas/Rainha";
import { Rei } from "./pecas/Rei";

export class Tabuleiro {
    constructor() {
        this.posicoes = setarPosicoes();
    }
    getPosicoes(){
        return this.posicoes;
    }
}
function setarPosicoes(){
    let posicoes = [];
    for(let i = 0 ; i < 64; i++){
        posicoes.push(new Posicao(i, corDoTabuleiro(i, posicoes)));
        if (i >= 8 && i <= 15) {
            posicoes[i].setPeca(new Peao("Preto"));
        }
        if (i >= 48 && i <= 55) {
            posicoes[i].setPeca(new Peao("Branco"));
        }
        //
        //Torre
        if (i == 0 || i == 7) {
            posicoes[i].setPeca(new Torre("Preto"));
        }
        if (i == 56 || i == 63) {
            posicoes[i].setPeca(new Torre("Branco"));
        }
        //
        //Cavalo
        if (i == 1 || i == 6) {
            posicoes[i].setPeca(new Cavalo("Preto"));
        }
        if (i == 57 || i == 62) {
            posicoes[i].setPeca(new Cavalo("Branco"));
        }
        //
        //Bispo
        if (i == 2 || i == 5) {
            posicoes[i].setPeca(new Bispo("Preto"));
        }
        if (i == 58 || i == 61) {
            posicoes[i].setPeca(new Bispo("Branco"));
        }
        //
        //Rainha
        if (i == 3) {
            posicoes[i].setPeca(new Rainha("Preto"));
        }
        if (i == 59) {
            posicoes[i].setPeca(new Rainha("Branco"));
        }
        //
        //Rei
        if (i == 4) {
            posicoes[i].setPeca(new Rei("Preto"));
        }
        if (i == 60) {
            posicoes[i].setPeca(new Rei("Branco"));
        }
        //
    }
    return posicoes;
}

function corDoTabuleiro(index, posicoes){
    let corDoTabuleiro = "";
    //define a cor do quadrado do tabuleiro
    if(index < 8){
        if(index % 2 == 0){
            corDoTabuleiro = "Branco";
        } else{
            corDoTabuleiro = "Verde";
        }
    }
    else{
        let corAnterior = posicoes[index-8].getCorDoTabuleiro();
        if(corAnterior == "Branco"){
            corDoTabuleiro = "Verde";
        } else{
            corDoTabuleiro = "Branco";
        }
    }
    return corDoTabuleiro
}