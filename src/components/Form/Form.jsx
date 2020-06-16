import React from 'react';
import './Form.css'

function Form() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
<div className="formContainer">     
   <form onSubmit={handleSubmit}>
            <label>
                Name:
                
            </label>
            <input type="text" name="name" placeholder="write the name of the hamster..."/>
            <label>
                loves to do:
 
            </label>
            <input type="text" name="Loves" placeholder="Loves to do..."/>
            <button>submit</button>
        </form>
        </div>

    );
}

export default Form;
