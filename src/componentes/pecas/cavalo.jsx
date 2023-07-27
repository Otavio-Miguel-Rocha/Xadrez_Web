import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessKnight} from "@fortawesome/free-solid-svg-icons";
const CavaloComponent = (props) => {
    const corPeca = {
        color: props.color === "white" ? "#ffffff" : "#000000"
    };
    return(
        <>
        <FontAwesomeIcon 
        icon={faChessKnight} 
        size="xl"
        style={corPeca}/>  
        </>
    );
}
export default CavaloComponent;