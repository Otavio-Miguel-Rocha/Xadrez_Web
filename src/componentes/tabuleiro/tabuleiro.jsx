import { Tabuleiro } from "../../classes/Tabuleiro";
import PosicaoComponent from "./posicao";


const TabuleiroComponent = () => {
    const tabuleiro = new Tabuleiro();
    let posicoes = tabuleiro.getPosicoes();

    return(
        <>
        <section className="w-screen h-screen bg-gray-600 flex justify-center items-center flex-col">
            <div className="grid grid-cols-8 grid-rows-8">
                {posicoes.map((posicao) => (
                    <PosicaoComponent key={posicao.id} posicao={posicao} />
                ))}
            </div>
        </section>
        </>
    );
}
export default TabuleiroComponent;