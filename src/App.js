import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Assertion Methods</h1>

      <input
          type="text" 
          defaultValue= "hello" 
          className='test-style dummy'
          name='userName'
          id='user-name'
          data-test='data-test'
       />

       <button className='btn' id='btn-id'>
          Click Me
       </button>
      
    </div>
  );
}

export default App;
