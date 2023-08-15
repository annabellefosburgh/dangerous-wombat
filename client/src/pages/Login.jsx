import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  // create state of userFormData to null values
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  // create state of alert to false
  const [showAlert, setShowAlert] = useState(false);
  // create function using mutation to update user 
  const [login, { error }] = useMutation(LOGIN_USER);

  // handles input change by taking the input and setting the userFormData to those values
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // handles form submit for the login page
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    try {
      // waits for login using the user form data
      const { data } = await login({
        variables: { ...userFormData },
      });

      if (error) {
        throw new Error('Something went wrong!');
      }

      // if login is correct uses user's JSON web token to sign in
      const { token, user } = data.login;
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      // if login fails show an alert of the error
      setShowAlert(true);
    }

    // set user form data back to null values
    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <section>
      <form noValidate onSubmit={handleFormSubmit}>
        {showAlert && (
          <div onClick={() => setShowAlert(false)}>
              Something went wrong with your login credentials!
          </div>
        )}
        <div>
          <label htmlFor='email'>Email</label>
          <input 
            type='text' 
            placeholder='Your email' 
            name='email' 
            onChange={handleInputChange} 
            value={userFormData.email} 
            required
          />
          {!userFormData.email && <div>Email is required!</div>}
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input 
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          {!userFormData.password && <div>Password is required</div>}
        </div>
        <button 
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'>
            Submit
        </button>
      </form>
    </section>
  );
};

export default Login;
