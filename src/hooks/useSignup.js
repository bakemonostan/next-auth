import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
//firebase imports
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useSignup = () => {
  //error state
  const [error, SetError] = useState(null);
  const { dispatch } = useAuthContext();

  //signup function which the hook would use
  const signup = (email, password) => {
    //set initial error state to null
    SetError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user });
      })
      .catch((err) => {
        SetError(err.message);
      });
  };

  return { error, signup };
};
