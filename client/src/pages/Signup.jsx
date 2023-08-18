import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  // create state of isLoggedIn to false
  const [isSignedUp, setIsSignedUp] = useState(false);
  // create mutation for adding a user
  const [addProfile, { error }] = useMutation(ADD_PROFILE);

  // handles input change by taking the input and setting the userFormData to those values
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // handles form submit for the signup page
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    try {
      // waits for creating a user with the user form data
      const { data } = await addProfile({
        variables: { ...userFormData },
      });

      if (error) {
        throw new Error('Something went wrong!');
      }

      // if signup is successful creates a JSON web token for the user and logs then into the page
      Auth.login(data.addProfile.token);
      setIsSignedUp(true); // Set isSignedUp to true after successful signup and login
    } catch (err) {
      console.error(err);
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
    <section className="signup-section">
      {isSignedUp ? (
        <div>You are logged in!</div>
      ) : (
      <form noValidate onSubmit={handleFormSubmit}>
        {showAlert && (
          <div onClick={() => setShowAlert(false)}>
              Something went wrong with your login credentials!
          </div>
        )}

        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          {userFormData.username && <div>Username is required</div>}
        </div>
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
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'>
            Submit
        </button>
        <div>
          <Link to='/login'>Go to the Login Page</Link>
        </div>
      </form>
    )}
  </section>
  );
};

export default Signup;
