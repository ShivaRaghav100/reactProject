
import './App.css'
import Display from './component/Display'
import ButtonContener from './component/Button'
import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState("");

  const buttonClicked=(text)=>{
    
    if (text === "C"){
      setDisplay("");
    }
    else if(text=== "="){
      const sumit=eval(display);
      setDisplay(sumit);
    }
    else{
      const result = display+text;
      setDisplay(result);
    }
  };

  return (
    
    <div className='calculator'>
    <Display display={display} />
    <ButtonContener buttonClicked={buttonClicked}/>
    </div>
  )
}

export default App
