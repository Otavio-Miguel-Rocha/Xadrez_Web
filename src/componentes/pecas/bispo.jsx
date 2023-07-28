import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessBishop} from "@fortawesome/free-solid-svg-icons";
const BispoComponent = (props) => {
    const corPeca = {
        color: props.peca.cor === "Branco" ? "#ffffff" : "#000000"
    };
    return(
        <>
        <FontAwesomeIcon 
        icon={faChessBishop} 
        size="xl"
        style={corPeca}/>
        </>
    );
}
export default BispoComponent;