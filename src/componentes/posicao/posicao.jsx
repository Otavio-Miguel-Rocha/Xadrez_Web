import { useEffect, useState } from "react";

export const PosicaoComponent = ((props) => {
  const corPosicao = props.backgroundColor;
  const [backgroundColor, setBackgroundColor] = useState(definirCorDeFundo());


  useEffect(() => {
    setBackgroundColor(definirCorDeFundo());
  }, [props.backgroundColor]);

  function definirCorDeFundo(){
    return corPosicao === "Escuro" ? "#043927" : corPosicao === "Claro" ? "#00674b" : 
    corPosicao === "PossivelMovimento" ? "#836D0C" : "#D19300"
  }

  return (
    <a
      onMouseOver={() => setBackgroundColor("gray")}
      onMouseOut={() => setBackgroundColor(definirCorDeFundo())}
      onClick={() => movimentar()}
      className="w-10 h-10 flex justify-center items-center cursor-pointer"
      style={{backgroundColor}}
    >
      {props.children}
    </a>
  );

  function movimentar(){
    if(corPosicao === "PossivelMovimento"){
      let tabuleiro = props.getTabuleiro;
      let pecaAtacante;
      tabuleiro.forEach((posicao) => {
        if(posicao.selecionado){
          pecaAtacante = posicao;
        }
      });
      let pecaAtacanteIndex = tabuleiro.indexOf(pecaAtacante);
      if(props.children){
        tabuleiro.splice(tabuleiro.indexOf(props.children.props.peca),1, pecaAtacante);
      } else {

        let posicaoVazia = tabuleiro[props.posicaoVazia];
        tabuleiro.splice(tabuleiro.indexOf(posicaoVazia),1, pecaAtacante);
      }
      tabuleiro.splice(pecaAtacanteIndex,1 , {peca: "", cor: "", selecionado: false, possivelMovimento: false});
      tabuleiro.forEach((peca) => {
        peca.selecionado = false;
        peca.possivelMovimento = false;
      });
      props.setTabuleiro(tabuleiro.slice());
    }
  }
});
