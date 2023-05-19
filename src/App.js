import './App.css';
import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [count,setCount] = useState(0)
  const  addCount = () =>{
    setCount(count+1) 
   }
   const  subCount = () =>{
    setCount(count-1) 
   }
  return (
    <div className="App">
      <button onClick={addCount}>Add (+)</button>
      <button onClick={subCount}>Sub (-)</button>
      <Counter name="sam1" count={count}/>
      <Counter name="sam2" count={count}/>
    </div>
  );
}

export default App;
