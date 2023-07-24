// TabuleiroComponent.jsx

import { useState } from "react";
import { Tabuleiro } from "../../classes/Tabuleiro";
import PosicaoComponent from "./posicao";

const TabuleiroComponent = () => {
  const tabuleiro = new Tabuleiro();
  const [posicoes, setPosicoes] = useState(tabuleiro.getPosicoes());

  return (
    <section className="w-screen h-screen bg-gray-600 flex justify-center items-center flex-col">
      <div className="grid grid-cols-8 grid-rows-8">
        {posicoes.map((posicao) => (
          <PosicaoComponent
            key={posicao.id}
            posicao={posicao}
            tabuleiro={tabuleiro}
            mostraOpcoesJogada={(possiveisMovimentos) => {
                let novasPosicoes = [];
                tabuleiro.getPosicoes().forEach((posicao) => {
                    novasPosicoes.push(posicao);
                    for(let i = 0 ; i < possiveisMovimentos.length ; i++){
                        if(posicao.id === possiveisMovimentos[i].id){
                            posicao.setCorDoTabuleiro("Vermelho");
                        }
                    }
                });
                setPosicoes(novasPosicoes);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TabuleiroComponent;
