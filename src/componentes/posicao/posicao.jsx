import { useEffect, useState } from "react";

const PosicaoComponent = ((props) => {
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
      onClick={() => teste()}
      className="w-10 h-10 flex justify-center items-center cursor-pointer"
      style={{backgroundColor}}
    >
      {props.children}
    </a>
  );

  function teste(){
    if(corPosicao === "PossivelMovimento"){
      console.log(props.getTabuleiro);
      let tabuleiro = props.getTabuleiro;
      let pecaAtacante;
      tabuleiro.forEach((posicao) => {
        if(posicao.selecionado){
          pecaAtacante = posicao;
        }
      });
      if(props.children){
        pecaAtacante.peca = "";
        pecaAtacante.cor = "";
        pecaAtacante.selecionado = false;
        console.log(pecaAtacante);
        console.log(props.children.props.peca);
        props.children.props.peca = pecaAtacante;
      } else {
        console.log(props.getTabuleiro);
      }
    }
  }
});

export default PosicaoComponent;
