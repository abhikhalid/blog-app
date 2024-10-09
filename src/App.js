import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 100);
  }, []);
  

  return (
    <div className="App">
      <h1>findBy and findAllBy</h1>
  
      {
        data ? <h1>data found</h1>:<h1>no data found</h1>
      }
  
    </div>
  );
}

export default App;
