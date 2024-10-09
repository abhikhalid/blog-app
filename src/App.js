import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

function App() {
  const [count, setCounter] = useState(0);
  
  return (
    <div>
      <button onClick={()=>setCounter(count => count + 1)}>
        Click to increase: {count}
      </button>

      <h2>Heading 2</h2>
      <h5>Heading 5</h5>
      <input placeholder='enter name'/>
      
    </div>
  );
}

export default App;
