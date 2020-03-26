import React, {useState} from 'react';
import './App.css';
import Form from "./Form"; //importing Form

function App() {
  // const [teamMember, setTeamMember] = useState(" ") //SET A USESTATE FOR TEAMMEMBER.AND HAVE IT SHOW AN EMPTY STRING
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
