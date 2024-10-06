import './App.css';

function App() {

  return (
    <div className="App">
      <h1>RTL Query : getByLabelText</h1>

      <label htmlFor="user-email1">UserName</label>
      <input type="text" id="user-email1" defaultValue={'khalid'} />

      <label htmlFor="user-email2">UserName</label>
      <input type="text" id="user-email2" defaultValue={'khalid'} />

      <label htmlFor="user-email3">UserName</label>
      <input type="text" id="user-email3" defaultValue={'khalid'} />

      <label htmlFor="skill">Skills</label>
      <input type="checkbox" id="skill" defaultChecked={true}/>
      
      <label htmlFor="skill2">Skills</label>
      <input type="checkbox" id="skill2" defaultChecked={true}/>

      <label htmlFor="skill3">Skills</label>
      <input type="checkbox" id="skill3" defaultChecked={true}/>

    </div>
  );
}

export default App;
