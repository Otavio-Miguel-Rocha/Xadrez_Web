import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessQueen} from "@fortawesome/free-solid-svg-icons";
export const RainhaComponent = (props) => {
    const corPeca = {
        color: props.peca.cor === "Branco" ? "#ffffff" : "#000000"
    };
    return(
        <>
        <FontAwesomeIcon 
        icon={faChessQueen} 
        size="2xl"
        style={corPeca}/>  
        </>
    );
}