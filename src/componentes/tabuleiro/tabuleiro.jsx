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
  { peca: "Torre", cor: "Preto", selecionado: false , possivelMovimento: false },
  { peca: "Cavalo", cor: "Preto", selecionado: false , possivelMovimento: false },
  { peca: "Bispo", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Rainha", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Rei", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Bispo", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Cavalo", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Torre", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Preto",selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "", cor: "", selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Peao", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Torre", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Cavalo", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Bispo", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Rainha", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Rei", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Bispo", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Cavalo", cor: "Branco",selecionado: false , possivelMovimento: false },
  { peca: "Torre", cor: "Branco",selecionado: false , possivelMovimento: false },
];

const TabuleiroComponent = () => {
  const [posicoesLogicas, setPosicoesLogicas] = useState(tabuleiro);
  const [posicoesVisuais, setPosicoesVisuais] = useState(percorreListaPosicoesVisuais());

  useEffect(() => {
    console.log(posicoesLogicas);
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
      //Peão Preto
      if (nomePeca == "Peao" && corDaPeca == "Preto") {
        return (
          <PosicaoComponent key={i} getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
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
          <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
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
          <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
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
          <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
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
          <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
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
          <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
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
          <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
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
          <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
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
          <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
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
          <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
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
          <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
            <ReiComponent peca={posicao} posicoesLogicas={posicoesLogicas}/>
          </PosicaoComponent>
        );
      }
      //Rei Branco
      if (nomePeca == "Rei" && corDaPeca == "Branco") {
        return (
          <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)}>
            <ReiComponent peca={posicao} posicoesLogicas={posicoesLogicas}/>
          </PosicaoComponent>
        );
      }
    } else {
      return <PosicaoComponent key={i}getTabuleiro={posicoesLogicas} setTabuleiro={setPosicoesLogicas} backgroundColor={corNoTabuleiro(i,posicao)} />;
    }
    //
  }

  function corNoTabuleiro(index,posicao) {
    if(posicao.selecionado){
      return "Selecionado"
    }
    if(posicao.possivelMovimento){
      return "PossivelMovimento";
    }
    const linha = Math.floor(index / 8);
    const coluna = index % 8;

    if (linha % 2 === 0) {
      return coluna % 2 === 0 ? "Claro" : "Escuro";
    } else {
      return coluna % 2 === 0 ? "Escuro" : "Claro";
    }
  }

  return (
    <section className="w-screen h-screen bg-gray-600 flex justify-center items-center flex-col">
      <div className="grid grid-cols-8 grid-rows-8">{posicoesVisuais}</div>
    </section>
  );
};

export default TabuleiroComponent;
