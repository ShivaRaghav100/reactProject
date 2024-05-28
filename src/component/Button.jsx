import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
const ButtonContener = ({buttonClicked})=>{
    const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
    "00",
    ]

    return <>
        <div className="contener" >
        {buttonNames.map((buttonName) => (
        <button className="button"  key= {buttonName} onClick={() => buttonClicked(buttonName)} >{buttonName}</button>
      ))}
        </div>
    </>


}

export default ButtonContener;