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
      if(props.children.props.peca){
        console.log(props.children.props.peca);
      } else {
        
      }
    }
  }
});

export default PosicaoComponent;
