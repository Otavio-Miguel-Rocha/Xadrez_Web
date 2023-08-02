import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessBishop} from "@fortawesome/free-solid-svg-icons";
export const BispoComponent = (props) => {
    const corPeca = {
        color: props.peca.cor === "Branco" ? "#ffffff" : "#000000"
    };
    return(
        <>
        <FontAwesomeIcon 
        icon={faChessBishop} 
        size="2xl"
        style={corPeca}/>
        </>
    );
};