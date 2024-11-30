import React, { useState } from 'react';

const INITIAL_STATE = {
     name: '',
        email: '',
        password: '',
        age: "",
        country: '',
        aboutMe: '',
        gender: '',
        agree: false,
}
const Forms = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData(INITIAL_STATE); 
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

    // const handleChangeInput = (event) => {
    //     console.log(event.target.name); //де зміни
    //     console.log(event.target.value); //які зміни

    //     setFormData(prev => ({
    //         ...prev,
    //         [event.target.name]: event.target.value
    //     }));
    // }


const handleChangeInput = (event) => {
        const { name, value, type, checked } = event.target;
        console.log(name); // Field that changed
    console.log(value); // New value
    
    if (value === "Russia") {
        setFormData({ ...formData, [name]: "Ukraine" });
        return alert("You can't choose Russia");
    }

        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value //Якщо чекбокс, то вибрать, якщо ні - то вставити значення 
        }));
    };
         return (
        <div style={{ margin: '20px' }}>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name:</span>
                    <input onChange={handleChangeInput} value={formData.name} type="text" placeholder="name" name="name" />
                </label>
                <label>
                    <span>Email:</span>
                    <input onChange={handleChangeInput} value={formData.email} type="text" placeholder="email" name="email" />
                </label>
                <label>
                    <span>Password:</span>
                    <input onChange={handleChangeInput} value={formData.password} type="password" placeholder="password" name="password" />
                </label>
                <label>
                    <span>Age:</span>
                    <input onChange={handleChangeInput} value={formData.age} type="number" placeholder="age" name="age" />
                </label>
                <label>
                    <span>Country:</span>
                         <select name="country" value={formData.country} onChange={handleChangeInput}  >
                        <option value="" disabled>Виберіть країну</option> {/* Неактивный пункт */}
                        <option value="Ukraine">Ukraine</option>
                        <option value="Poland">Poland</option>
                        <option value="USA">USA</option>
                        <option value="Germany">Germany</option>
                        <option value="Russia">Russia</option>
                    </select>
                </label>
                <label>
                    <span>About me:</span>
                    <textarea name="aboutMe" value={formData.aboutMe} onChange={handleChangeInput}></textarea>
                </label>
                <div>
                    <span>Gender:</span>
                    <label>
                        Male
                        <input type="radio" value="male" name="gender" checked={formData.gender === "male"} onChange={handleChangeInput} />
                    </label>
                    <label>
                        Female
                        <input type="radio" value="female" name="gender" checked={formData.gender === "female"} onChange={handleChangeInput} />
                    </label>
                </div>
                <label>
                    <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChangeInput} />
                    I agree with terms and conditions and privacy policy
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Forms