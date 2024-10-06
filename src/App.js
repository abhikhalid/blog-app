import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Overriding data-testid</h1>

      {/* <div data-testid='test-div'>
        Dummy Text
      </div> */}

      
      <div element-id='test-div'>
        Dummy Text
      </div>

    </div>
  );
}

export default App;
