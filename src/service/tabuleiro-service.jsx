import PosicaoComponent from "../componentes/posicao/posicao";

export function setPosicoesTabuleiro(posicoes) {
    const serializablePosicoes = posicoes.map((posicao, index) => ({
      key: index,
      backgroundColor: posicao.props.backgroundColor,
      childData: posicao.props.children.props
    }));

    localStorage.setItem("posicoesTabuleiro", JSON.stringify(serializablePosicoes));
  }
export function getPosicoesTabuleiro() {
  const serializedData = localStorage.getItem("posicoesTabuleiro");
  if (serializedData) {
    const parsedData = JSON.parse(serializedData);
    const reconstructedPosicoes = parsedData.map(({ key, backgroundColor, childData }) => (
      <PosicaoComponent key={key} backgroundColor={backgroundColor}>
        {childData}
      </PosicaoComponent>
    ));
    return reconstructedPosicoes;
  } else {
    return [];
  }
}