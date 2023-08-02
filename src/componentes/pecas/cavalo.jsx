import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessKnight} from "@fortawesome/free-solid-svg-icons";
export const CavaloComponent = (props) => {
    const corPeca = {
        color: props.peca.cor === "Branco" ? "#ffffff" : "#000000"
    };
    return(
        <>
        <FontAwesomeIcon 
        icon={faChessKnight} 
        size="2xl"
        style={corPeca}/>  
        </>
    );
}