import { useState, useEffect, useContext, createContext } from "react";
import PosicaoComponent from "../posicao/posicao";

//Importando as peças
import PeaoComponent from "../pecas/peao";
import TorreComponent from "../pecas/torre";
import CavaloComponent from "../pecas/cavalo";
import BispoComponent from "../pecas/bispo";
import RainhaComponent from "../pecas/rainha";
import ReiComponent from "../pecas/rei";

const tabuleiro = [
  { peca: "Torre", cor: "Preto", posicaoAtual: 0, possivelMovimento: false },
  { peca: "Cavalo", cor: "Preto", posicaoAtual: 0, possivelMovimento: false },
  { peca: "Bispo", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Rainha", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Rei", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Bispo", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Cavalo", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Torre", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Preto",posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "", cor: "", posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Peao", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Torre", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Cavalo", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Bispo", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Rainha", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Rei", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Bispo", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Cavalo", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
  { peca: "Torre", cor: "Branco",posicaoAtual: 0, possivelMovimento: false },
];

const TabuleiroComponent = () => {
  const [posicoesLogicas, setPosicoesLogicas] = useState(tabuleiro);
  const [posicoesVisuais, setPosicoesVisuais] = useState(percorreListaPosicoesVisuais());

  useEffect(() => {
    setPosicoesVisuais(percorreListaPosicoesVisuais());
  },[posicoesLogicas]);


  function percorreListaPosicoesVisuais(){
    return (posicoesLogicas.map((posicao, i) => {
        return definePosicoesVisuais(posicao, i);
    }));
  }

  function definePosicoesVisuais(posicao, i) {
    if (posicao.peca != "") {
      const nomePeca = posicao.peca;
      const corDaPeca = posicao.cor;
      posicao.posicaoAtual = i;
      //Peão Preto
      if (nomePeca == "Peao" && corDaPeca == "Preto") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <PeaoComponent
              peca={posicao}
              posicoesLogicas={posicoesLogicas}
              setarPosicoes={setPosicoesLogicas}
            />
          </PosicaoComponent>
        );
      }
      //Peão Branco
      if (nomePeca == "Peao" && corDaPeca == "Branco") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <PeaoComponent
              peca={posicao}
              posicoesLogicas={posicoesLogicas}
            />
          </PosicaoComponent>
        );
      }
      //
      //Torre Preta
      if (nomePeca == "Torre" && corDaPeca == "Preto") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <TorreComponent
              peca={posicao}
              posicoesLogicas={posicoesLogicas}
            />
          </PosicaoComponent>
        );
      }
      //Torre Branca
      if (nomePeca == "Torre" && corDaPeca == "Branco") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <TorreComponent
              peca={posicao}
              posicoesLogicas={posicoesLogicas}
            />
          </PosicaoComponent>
        );
      }
      //
      //Cavalo Preto
      if (nomePeca == "Cavalo" && corDaPeca == "Preto") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <CavaloComponent
              peca={posicao}
              posicoesLogicas={posicoesLogicas}
            />
          </PosicaoComponent>
        );
      }
      //Cavalo Branco
      if (nomePeca == "Cavalo" && corDaPeca == "Branco") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <CavaloComponent
              peca={posicao}
              posicoesLogicas={posicoesLogicas}
            />
          </PosicaoComponent>
        );
      }
      //
      //Bispo Preto
      if (nomePeca == "Bispo" && corDaPeca == "Preto") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <BispoComponent
              peca={posicao}
              posicoesLogicas={posicoesLogicas}
            />
          </PosicaoComponent>
        );
      }
      //Bispo Branco
      if (nomePeca == "Bispo" && corDaPeca == "Branco") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <BispoComponent
              peca={posicao}
              posicoesLogicas={posicoesLogicas}
            />
          </PosicaoComponent>
        );
      }
      //
      //Rainha Preta
      if (nomePeca == "Rainha" && corDaPeca == "Preto") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <RainhaComponent
              peca={posicao}
              posicoesLogicas={posicoesLogicas}
            />
          </PosicaoComponent>
        );
      }
      //Rainha Branca
      if (nomePeca == "Rainha" && corDaPeca == "Branco") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <RainhaComponent
              peca={posicao}
              posicoesLogicas={posicoesLogicas}
            />
          </PosicaoComponent>
        );
      }
      //
      //Rei Preto
      if (nomePeca == "Rei" && corDaPeca == "Preto") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <ReiComponent peca={posicao} posicoesLogicas={posicoesLogicas}/>
          </PosicaoComponent>
        );
      }
      //Rei Branco
      if (nomePeca == "Rei" && corDaPeca == "Branco") {
        return (
          <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento}>
            <ReiComponent peca={posicao} posicoesLogicas={posicoesLogicas}/>
          </PosicaoComponent>
        );
      }
    } else {
      return <PosicaoComponent key={i} backgroundColor={corNoTabuleiro(i)} possivelMovimento={posicao.possivelMovimento} />;
    }
    //
  }

  function corNoTabuleiro(index) {
    const linha = Math.floor(index / 8);
    const coluna = index % 8;

    if (linha % 2 === 0) {
      return coluna % 2 === 0 ? "Light" : "Dark";
    } else {
      return coluna % 2 === 0 ? "Dark" : "Light";
    }
  }

  return (
    <section className="w-screen h-screen bg-gray-600 flex justify-center items-center flex-col">
      <div className="grid grid-cols-8 grid-rows-8">{posicoesVisuais}</div>
    </section>
  );
};

export default TabuleiroComponent;
