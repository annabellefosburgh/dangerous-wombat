//Dependencies
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';

//Writing signup functionality
const Signup = () => {
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      password: '',
    });
    const [addProfile, { error, data }] = useMutation(ADD_PROFILE);
  
    //Update state based on form input
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    //Submiting form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
  
      try {
        const { data } = await addProfile({
          variables: { ...formState },
        });
  
        Auth.login(data.addProfile.token);
      } catch (e) {
        console.error(e);
      }
    };
};

//Writing html with form to return