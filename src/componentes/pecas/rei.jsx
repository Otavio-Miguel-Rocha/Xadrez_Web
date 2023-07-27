import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessKing} from "@fortawesome/free-solid-svg-icons";
const ReiComponent = (props) => {
    const corPeca = {
        color: props.color === "white" ? "#ffffff" : "#000000"
    };
    return(
        <>
        <FontAwesomeIcon 
        icon={faChessKing} 
        size="xl"
        style={corPeca}/>  
        </>
    );
}
export default ReiComponent;