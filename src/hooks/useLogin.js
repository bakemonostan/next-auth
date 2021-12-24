import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

//firebase imports
import { auth } from '../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = () => {
  //error state
  const [error, SetError] = useState(null);
  const { dispatch } = useAuthContext();

  //signup function which the hook would use
  const login = (email, password) => {
    //set initial error state to null
    SetError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user });
        console.log('user logged in');
      })
      .catch((err) => {
        SetError(err.message);
      });
  };

  return { error, login };
};
