import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async() => {
      let result = await fetch('https://jsonplaceholder.typicode.com/users')
      result = await result.json();
      setData(result);
    }

    getData();
  }, []);

  console.log(data);
  
  return (
    <div>
      <h1>List Of Users</h1>
      {
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      }
      
    </div>
  );
}

export default App;
