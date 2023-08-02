import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessRook} from "@fortawesome/free-solid-svg-icons";
export const TorreComponent = (props) => {
    const corPeca = {
        color: props.peca.cor === "Branco" ? "#ffffff" : "#000000"
    };
    return(
        <>
        <FontAwesomeIcon 
        icon={faChessRook} 
        size="2xl"
        style={corPeca}/>  
        </>
    );
}