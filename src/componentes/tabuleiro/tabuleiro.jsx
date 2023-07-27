import { useState, useEffect, useContext, createContext } from "react";
import PosicaoComponent from "../posicao/posicao";

//Importando as peças
import PeaoComponent from "../pecas/peao";
import TorreComponent from "../pecas/torre";
import CavaloComponent from "../pecas/cavalo";
import BispoComponent from "../pecas/bispo";
import RainhaComponent from "../pecas/rainha";
import ReiComponent from "../pecas/rei";


const TabuleiroComponent = () => {
    
    const [posicoes, setPosicoes] = useState(
        Array.from({ length: 64 }, (_, i) => (
            <PosicaoComponent 
            key={i} 
            backgroundColor={corNoTabuleiro(i)}
            getPosicoesPosicaoComponent={getPosicoes}
            >
              {posicoesIniciaisDasPecas(i)}
            </PosicaoComponent>
        ))
    );

    function getPosicoes(){
        return posicoes;
    }
  function posicoesIniciaisDasPecas(i){
        if (i >= 8 && i <= 15) {
            return <PeaoComponent color={"black"}/>
        }
        if (i >= 48 && i <= 55) {
            return <PeaoComponent color={"white"}/>
        }
        //
        //Torre
        if (i == 0 || i == 7) {
            return <TorreComponent color={"black"}/>
        }
        if (i == 56 || i == 63) {
            return <TorreComponent color={"white"}/>
        }
        //
        //Cavalo
        if (i == 1 || i == 6) {
            return <CavaloComponent color={"black"}/>
        }
        if (i == 57 || i == 62) {
            return <CavaloComponent color={"white"}/>
        }
        //
        //Bispo
        if (i == 2 || i == 5) {
            return <BispoComponent color={"black"}/>
        }
        if (i == 58 || i == 61) {
            return <BispoComponent color={"white"}/>
        }
        //
        //Rainha
        if (i == 3) {
            return <RainhaComponent color={"black"}/>
        }
        if (i == 59) {
            return <RainhaComponent color={"white"}/>
        }
        //
        //Rei
        if (i == 4) {
            return <ReiComponent color={"black"}/>
        }
        if (i == 60) {
            return <ReiComponent color={"white"}/>
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
      <div className="grid grid-cols-8 grid-rows-8">
        {posicoes}
      </div>
    </section>
  );
};

export default TabuleiroComponent;
