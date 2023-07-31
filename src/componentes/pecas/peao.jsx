import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessPawn } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const PeaoComponent = React.memo((props) => {
  const corPeca = {
    color: props.peca.cor === "Branco" ? "#ffffff" : "#000000",
  };

  return (
    <>
      <FontAwesomeIcon
        onClick={possiveisMovimentos}
        icon={faChessPawn}
        size="2xl"
        style={corPeca}
      />
    </>
  );

  function possiveisMovimentos() {
    const posicoesTabuleiro = props.posicoesLogicas;
    let pecaSelecionadaJaExistente;
    posicoesTabuleiro.forEach((posicao) => {
      if (posicao.selecionado) {
        pecaSelecionadaJaExistente = posicao;
      }

    });
    if (pecaSelecionadaJaExistente) {
      console.log("peca para atacar");
    } else {
      const posicaoPeca = props.posicoesLogicas.indexOf(props.peca);
      const peca = props.peca;

      let possiveisMovimentos = [];

      //VERIFICA SE A COR DA PEÇA É PRETA
      if (peca.cor === "Preto") {
        //VERIFICA SE NÃO EXISTE ALGO NA FRENTE
        let pecaUmaCasaAfrente = posicoesTabuleiro[posicaoPeca + 8];
        if (pecaUmaCasaAfrente.peca == "") {
          //ADICIONA SE NÃO EXISTIR
          possiveisMovimentos.push(pecaUmaCasaAfrente);
          // VERIFICA SE É O PRIMEIRO MOVIMENTO DO PEÃO PRETO
          if (posicaoPeca >= 8 && posicaoPeca <= 15) {
            //VERIFICA SE EXISTE ALGO DUAS CASAS PRA FRENTE
            let pecaDuasCasasAFrente = posicoesTabuleiro[posicaoPeca + 16];
            if (pecaDuasCasasAFrente.peca == "") {
              //ADICIONA SE NÃO EXISTIR
              possiveisMovimentos.push(pecaDuasCasasAFrente);
            }
          }
        }

        //DIAGONAIS
        const pretaPossiveisMovimentosDiagonalDireita =
          posicoesTabuleiro[posicaoPeca + 9];
        if (
          //VERIFICA SE ESTÁ NA EXTREMIDADE DIREITA DO TABULEIRO
          !validaExtremidade(posicaoPeca + 1)
        ) {
          //VERIFICA SE NA DIAGONAL EXISTE UMA PEÇA
          if (pretaPossiveisMovimentosDiagonalDireita.peca != "") {
            if (pretaPossiveisMovimentosDiagonalDireita.cor === "Branco") {
              //ADICIONA A PEÇA ADVERSÁRIA COMO POSSÍVEL MOVIMENTO
              possiveisMovimentos.push(pretaPossiveisMovimentosDiagonalDireita);
            }
          }
        }

        const pretaPossiveisMovimentosDiagonalEsquerda =
          posicoesTabuleiro[posicaoPeca + 7];
        if (
          //VERIFICA SE ESTÁ NA EXTREMIDADE ESQUERDA DO TABULEIRO
          !validaExtremidade(posicaoPeca)
        ) {
          //VERIFICA SE NA DIAGONAL EXISTE UMA PEÇA
          if (pretaPossiveisMovimentosDiagonalEsquerda.peca != "") {
            //ADICIONA A PEÇA ADVERSÁRIA COMO POSSÍVEL MOVIMENTO
            if (pretaPossiveisMovimentosDiagonalEsquerda.cor === "Branco") {
              possiveisMovimentos.push(
                pretaPossiveisMovimentosDiagonalEsquerda
              );
            }
          }
        }
      }
      // COR BRANCA
      else {
        //VERIFICA SE NÃO EXISTE ALGO NA FRENTE
        let pecaUmaCasaAfrente = posicoesTabuleiro[posicaoPeca - 8];
        if (pecaUmaCasaAfrente.peca == "") {
          //ADICIONA O MOVIMENTO
          possiveisMovimentos.push(pecaUmaCasaAfrente);
          // VERIFICA SE É O PRIMEIRO MOVIMENTO DO PEÃO BRANCO
          if (posicaoPeca >= 48 && posicaoPeca <= 55) {
            // SE FOR, VERIFICA SE EXISTE ALGO DUAS CASAS A FRENTE
            let pecaDuasCasasAFrente = posicoesTabuleiro[posicaoPeca - 16];
            if (pecaDuasCasasAFrente.peca == "") {
              //SE NÃO EXISTIR, ADICIONA O POSSÍVEL MOVIMENTO
              possiveisMovimentos.push(pecaDuasCasasAFrente);
            }
          }
        }

        //DIAGONAIS
        const brancaPossiveisMovimentosDiagonalEsquerda =
          posicoesTabuleiro[posicaoPeca - 9];
        if (
          //VALIDA SE ESTÁ NA EXTREMIDADE ESQUERDA
          !validaExtremidade(posicaoPeca)
        ) {
          // VERIFICA SE EXISTE UMA PEÇA NA DIAGONAL ESQUERDA
          if (brancaPossiveisMovimentosDiagonalEsquerda.peca != "") {
            // SE EXISTIR ELA VERIFICA A COR
            if (brancaPossiveisMovimentosDiagonalEsquerda.cor == "Preto") {
              // ADICIONA NOS POSSIVEIS MOVIMENTOS CASO SEJA PRETA
              possiveisMovimentos.push(
                brancaPossiveisMovimentosDiagonalEsquerda
              );
            }
          }
        }
        const brancaPossiveisMovimentosDiagonalDireita =
          posicoesTabuleiro[posicaoPeca - 7];
        if (
          //VALIDA SE ESTÁ NA EXTREMIDADE ESQUERDA
          !validaExtremidade(posicaoPeca + 1)
        ) {
          // VERIFICA SE EXISTE UMA PEÇA NA DIAGONAL ESQUERDA
          if (brancaPossiveisMovimentosDiagonalDireita.peca != "") {
            // SE EXISTIR ELA VERIFICA A COR
            if (brancaPossiveisMovimentosDiagonalDireita.cor == "Preto") {
              // ADICIONA NOS POSSIVEIS MOVIMENTOS CASO SEJA PRETA
              possiveisMovimentos.push(
                brancaPossiveisMovimentosDiagonalDireita
              );
            }
          }
        }
      }
      //APLICA AS EDIÇÕES NA LISTA ORIGINAL
      if (possiveisMovimentos.length > 0) {
        possiveisMovimentos.forEach((posicao) => {
          posicao.possivelMovimento = true;
        });
      }
      peca.selecionado = true;
      props.setarPosicoes(props.posicoesLogicas.slice());
    }
  }
  function validaExtremidade(posicaoNoTabuleiro) {
    return posicaoNoTabuleiro % 8 == 0;
  }
});
export default PeaoComponent;
