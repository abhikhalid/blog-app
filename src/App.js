import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1>Props Testing</h1>
      <User name='khalid'/> 
    </div>
  );
}

export default App;
