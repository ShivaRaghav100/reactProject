import './App.css'
import AddTodo from './components/TodoInput'
import TodoHeading from './components/TodoHeading'
import TodoItemAdd from './components/TodoItemAdd'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  const [todoItem,setTodoItem]=useState([])
  const handelNewItem =(itemName,itemDate)=>{
    const newArray =[...todoItem, {name:itemName,date:itemDate},];

    setTodoItem(newArray);
  } 

  return (
    <>
    <TodoHeading/>
    <AddTodo onNewItem={handelNewItem}/>
    <TodoItemAdd TodoItems={todoItem}/>
    </>
  )
}

export default App
