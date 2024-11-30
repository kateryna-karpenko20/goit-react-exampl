import React, { useState } from 'react'

const Forms = () => {

    const [formData, setFormData] = useState({
        name: 'Katia',
        email: 'katia123@g.com',
        password: 'kjh123'
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }
    
    // const handleChangeUserNameField = (event) => {
    //     setFormData({ ...formData, name: event.target.value });
    // }

    // const handleChangeEmailField = (event) => {
    //     setFormData({ ...formData, email: event.target.value });
    // }

    // const handleChangePasswordField = (event) => {
    //     setFormData({ ...formData, password: event.target.value });
    // }

    const handleChangeInpurt = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);


        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }
        return (
            <div style={{ margin: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">
                        <span>Name:</span>
                        <input onChange={handleChangeInpurt} value={formData.name} type="text" placeholder='name' name='name' />
                    </label>
                    <label htmlFor="">
                        <span>Email:</span>
                        <input onChange={handleChangeInpurt} value={formData.email} type="text" placeholder='email' name='email' />
                    </label>
                    <label htmlFor="">
                        <span>Password:</span>
                        <input onChange={handleChangeInpurt} value={formData.password} type="password" placeholder='password' name='password' />
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }

export default Forms