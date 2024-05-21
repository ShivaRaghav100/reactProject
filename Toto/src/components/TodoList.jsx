import { MdOutlineDelete } from "react-icons/md";
import '../App.css';

function TodoList ({todoName,todoDate, taskId,onClickdelet}){


    return( 
    <div className="row">
        <div className="col">{todoName}</div>
        <div className="col">{todoDate}</div>
        <button className="btn btn-danger col" onClick={()=>onClickdelet(taskId)} ><MdOutlineDelete/> </button>
    </div>
    )
}

export default TodoList;