import './App.css'
import AddTodo from './components/TodoInput'
import TodoHeading from './components/TodoHeading'
import TodoItemAdd from './components/TodoItemAdd'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  const [todoItem,setTodoItem]=useState([])
  const handelNewItem =(itemName,itemDate)=>{
    const newArray =[...todoItem, {name:itemName,date:itemDate, taskId: todoItem.length},];
    setTodoItem(newArray);
    console.log(newArray);
  } 

  const deletItem = (oldItemName)=>{
    const newList = todoItem.filter((item)=> item.taskId !== oldItemName);
    setTodoItem(newList);
  }

  return (
    <div className='contnnair'>
    <TodoHeading/>
    <AddTodo onNewItem={handelNewItem}/>
    <TodoItemAdd TodoItems={todoItem} onClickdelet={deletItem}/>
    </div>
  )
}

export default App
