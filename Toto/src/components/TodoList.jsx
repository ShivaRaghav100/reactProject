import { MdOutlineDelete } from "react-icons/md";


function TodoList ({todoName,todoDate}){


    return( 
    <>
        <div>{todoName}</div>
        <div>{todoDate}</div>
        <button><MdOutlineDelete/> </button>
    </>
    )
}

export default TodoList;