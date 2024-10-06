import { useState } from 'react';
import './App.css';
import handleOtherMethod from './helper';

function App() {
  const [data, setData] = useState("");

  const handleData = () => {
    setData('hello');
  }
  
  // const handleOtherMethod = () => {
  //   console.log('hi');
  //   return "hi";
  // }

  return (
    <div className="App">
      <h2>Functional Component method testing</h2>
      <button data-testid="btn1" onClick={handleData}>Update</button>
      <button onClick={handleOtherMethod}>Print</button>
      <h2>{data}</h2>
    </div>
  );
}

export default App;
