import TodoList from "./TodoList";

const TodoItemAdd = ({TodoItems, onClickdelet})=>{
    return(
    <div>
      {TodoItems.map((item) => (
        <TodoList todoDate={item.date} todoName={item.name} taskId={item.taskId} onClickdelet={onClickdelet}></TodoList>
      ))}
    </div>

    
    )
}

export default TodoItemAdd;