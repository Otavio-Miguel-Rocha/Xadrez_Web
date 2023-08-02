import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessKing} from "@fortawesome/free-solid-svg-icons";
export const ReiComponent = (props) => {
    const corPeca = {
        color: props.peca.cor === "Branco" ? "#ffffff" : "#000000"
    };
    return(
        <>
        <FontAwesomeIcon 
        icon={faChessKing} 
        size="2xl"
        style={corPeca}/>  
        </>
    );
}