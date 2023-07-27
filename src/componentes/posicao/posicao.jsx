import React, { useState } from "react";

const PosicaoComponent = ((props) => {
  const corPosicao = props.backgroundColor;
  const [backgroundColor, setBackgroundColor] = useState(
      corPosicao === "Dark" ? "#043927" : "#00674b"
  );

  // const corPeca = props.children.props.color;
  //cor fundo
  // const [backgroundColor, setBackgroundColor] = useState(
  //   posicao.getCorDoTabuleiro() === "Vermelho" ? "black" : 
  //   posicao.getCorDoTabuleiro() === "Branco" ? "#043927" : "#00674b"
  // );

  // const peca = posicao.getPeca();
  // const corDaPeca = peca ? peca.getCor() : "";

  // const styleIconePeca = {
  //   color: corDaPeca === "Branco" ? "#ffffff" : "#000000",
  // };

  // useEffect(() => {
    
  // },[corDaPeca]);


  return (
    <a
      onMouseOver={() => setBackgroundColor("gray")}
      onMouseOut={() => setBackgroundColor(corPosicao === "Dark" ? "#043927" : "#00674b")}
      className="w-10 h-10 flex justify-center items-center cursor-pointer"
      style={{ backgroundColor }}
    >
      {props.children}
    </a>
  );

});

export default PosicaoComponent;
