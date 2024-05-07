import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
const Display = ({display}) => {
    return <input className="display" type="text" value={display} readOnly/>
}

export default Display;