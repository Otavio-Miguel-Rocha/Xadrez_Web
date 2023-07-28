import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessQueen} from "@fortawesome/free-solid-svg-icons";
const RainhaComponent = (props) => {
    const corPeca = {
        color: props.peca.cor === "Branco" ? "#ffffff" : "#000000"
    };
    return(
        <>
        <FontAwesomeIcon 
        icon={faChessQueen} 
        size="xl"
        style={corPeca}/>  
        </>
    );
}
export default RainhaComponent;