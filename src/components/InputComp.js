import React, { useState, useContext } from 'react'
import "./InputComp.css"
import { globalContext } from "../App";

const InputComp = () => {

    // Using useContext to pass function (onSubmit) as a prop from App.js
    let {onSave} = useContext(globalContext);

    //Setting state as object containing name, email, phoneNo and city
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        phoneNo: '',
        city: ''
    })

    // Handling Form Field inputs 
    const handleFormChange = (event) => {
        const value = event.target.value;

        setFormInput({
            ...formInput,
            [event.target.name] : value
        });
    }

    const onButtonClick = () => {
        onSave(formInput);  // using function imported from App.js
    }

    return (
        <div className='container'>
        <h1>Employee Form</h1>
        <form className="form">
            <label>Name: </label>
            <input type='text' name='name' value={formInput.name} onChange={handleFormChange} placeholder="Type your Name"/>
            <label>Email: </label>
            <input type='email' name='email' value={formInput.email} onChange={handleFormChange} placeholder="Type your Email"/>
            <label>PhoneNo: </label>
            <input type='tel' name='phoneNo' value={formInput.phoneNo} onChange={handleFormChange} placeholder="Type your Phone Number"/>
            <label>City: </label>
            <input type='address' name='city' value={formInput.city} onChange={handleFormChange} placeholder="Type your City Name"/>

            <input className='btn' onClick={onButtonClick} type='button' value='submit' />
        </form>
    </div>
    )
}

export default InputComp
