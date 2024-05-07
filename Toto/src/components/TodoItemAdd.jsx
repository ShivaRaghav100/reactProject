import TodoList from "./TodoList";

const TodoItemAdd = ({TodoItems})=>{
    return(
    <div>
      {TodoItems.map((item) => (
        <TodoList todoDate={item.date} todoName={item.name}></TodoList>
      ))}
    </div>

    
    )
}

export default TodoItemAdd;