import React, { useState } from "react";

//Create react component
function Form(props){  //Put props in here when creating your component function
//Add functionality here
    
const [form, setForm] = useState ({ // We will now set a form state, this is considered a local state. for every form, form, setForm. We will set up a default object inside of the useState.
    name: " ", //Our first parameter of this object will be called name
    email: " ", //2nd parameter of this object will be called email
    role: " ", //3rd parameter of this object will be called email
// ONCE YOU HAVE YOUR PARAMETERS SET UP, WE WILL BE SETTING UP OUR FIRST INPUT, THE NAME ONE, SO WE GO INTO INPUT COMPONENT, AND GET READY TO TYPE IN THE PARAMETER VALUES IN THERE.
})

const handleChange=(e) => {  //This is going to handle the change
    //Inside of here is where we will be modifying our state. So we will be passing an event to this.
    //We will be calling the setForm, because we want to set the form state.
    setForm({...form, [e.target.name]: e.target.value}) //We will be setting our form to the object we created above with our name, email, and role. Use ...form to spread into that object, and pick the piece that you need. Think of that form variable state as an object, that is full of empty strings.  


} 
// REMEMBER TO ONLY KEEP THIS INSIDE OF YOUR RETURN NOT THE KEYS IN YOUR COMPONENT
return (
        <form> {/*We are returning a form, so put form inside of the function, this is our form tag*/}
               {/* What fields do we need in our form? */}
                <input  /*We will be adding props to the input tag, in order for a form to work in react, it has to be a controlled input, so the value of the input desplays the stateful value and not the actual value of the dom, the input also changes the stateful value. So like a loop, if you push the a key inside of your input, this input tag will send the letter a to state, and thenstate will return it back to the value of the input*/
                    name= "name"
                    placeholder= "displayname" //This does it so you will see the name being displayed into the name text input before you begin typing.
                    value={form.name}// Now we will be bringing in staeful logic, we will be giving this a value. THE VALUE FOR THIS IS FORM BECAUSE WE ARE USING FORM, AND WE WANT TO REFEREANCE THE NAME KEY, SO FORM.NAME. This is only one input, you will be needing 3 of these, one for name, email, and role, so we may create a helper function under our Form function.
                />


        </form>

    )

}
export default Form;