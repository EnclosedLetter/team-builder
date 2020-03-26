import React, { useState } from 'react';
import './App.css';
import Form from "./Form"; //importing Form

function App() {
  const [teamMember, setTeamMember] = useState("");
  const addMember =(newMember) => { //what does this function do
    setTeamMember(
      [...teamMember, newMember] // we are setting the setTeamMember setter to say spread up the teamMember array and get the newMember?
    )
  }
  console.log(teamMember)
  return (
    <div className="App">
      <Form addMember= {addMember}/> {/*rendering the Form component, pass the function yo ujust made as a prop to Form. the "addMember" is what we are naming this, so when we go inside of our form we will see the prop named this, then {addMember} will run the function*/}
    </div>
  );
}

export default App;
