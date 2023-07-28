import { useState } from "react";

const PosicaoComponent = ((props) => {
  const corPosicao = props.backgroundColor;
  const possivelMovimento = props.possivelMovimento;
  let [backgroundColor, setBackgroundColor] = useState(
      possivelMovimento === true ? "#FFFFFF" : corPosicao === "Dark" ? "#043927" : "#00674b"
  );

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
