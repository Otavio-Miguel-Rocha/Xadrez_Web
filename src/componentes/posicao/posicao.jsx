import React, { useState } from "react";

const PosicaoComponent = React.memo((props) => {
  const corPosicao = props.backgroundColor;
  const [backgroundColor, setBackgroundColor] = useState(
      corPosicao === "Dark" ? "#043927" : "#00674b"
  );

  return (
    <a
      onMouseOver={() => setBackgroundColor("gray")}
      onMouseOut={() => setBackgroundColor(corPosicao === "Dark" ? "#043927" : "#00674b")}
      onClick={() => teste()}
      className="w-10 h-10 flex justify-center items-center cursor-pointer"
      style={{ backgroundColor }}
    >
      {props.children}
    </a>
  );

  function teste(){
    let posicaoAtual = props;
    if(posicaoAtual.children != undefined){
      let posicoes = props.getPosicoesPosicaoComponent();
      console.log(posicoes);
      console.log(posicoes.indexOf(props));
    }
  }

});

export default PosicaoComponent;
