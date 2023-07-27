import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessRook} from "@fortawesome/free-solid-svg-icons";
const TorreComponent = (props) => {
    const corPeca = {
        color: props.color === "white" ? "#ffffff" : "#000000"
    };
    return(
        <>
        <FontAwesomeIcon 
        icon={faChessRook} 
        size="xl"
        style={corPeca}/>  
        </>
    );
}
export default TorreComponent;