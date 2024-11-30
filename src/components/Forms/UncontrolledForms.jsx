import React from 'react'

const UncontrolledForms = () => {
const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);
    console.log(form.elements);
    const userName = form.elements.name.value;
    const userEmail = form.elements.email.value;
    const userPassword = form.elements.password.value;

    console.log(userName, userEmail, userPassword);

    form.reset();
}

    return (
      <div style={{margin: '20px'}}>
          <form onSubmit={handleSubmit}>
              <label htmlFor="">
                  <span>Name:</span>
                    <input type="text" placeholder='name' name='name' />
              </label>
              <label htmlFor="">
                  <span>Email:</span>
                  <input type="text" placeholder='email' name='email' />
              </label>
              <label htmlFor="">
                  <span>Password:</span>
                  <input type="password" placeholder='password' name='password' />
              </label>
              <button type="submit">Register</button>
          </form>
    </div>
  )
}

export default UncontrolledForms