import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import '../App.css';
const AddTodo = ({onNewItem})=>{

    const [name,setName] = useState();
    const [date,setDate] = useState();

    function nameChangeHandlar(e){
        setName(e.target.value);
    };

    function dateChangeHandlar(e){
        setDate(e.target.value);
    };

    function setNameDate(){
        onNewItem(name,date)
        setDate("")
        setName("")
    };


    return <div className="row">
        <input className="col" type="text" value={name} onChange={nameChangeHandlar} />
        <input className="col" type="date" value={date} onChange={dateChangeHandlar}/>
        <button className="btn btn-success col" onClick={setNameDate}><MdAddToPhotos /></button>
    </div>
}
export default AddTodo;