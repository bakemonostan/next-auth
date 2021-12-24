import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../src/firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';

const Signup = () => {
  const Router = useRouter();

  const signupHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        Router.push('/dashboard');
      } catch (error) {
        console.log('error');
        alert(error);
      }
    },
    [Router]
  );
  return (
    <div>
      <form onSubmit={signupHandler}>
        <div>
          <label htmlFor='email'>Email</label>
          <input name='email' id='email' type='email' placeholder='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            id='password'
            type='password'
            placeholder='******************'
          />
        </div>
        <div>
          <button type='submit'>Sign Up</button>
          <Link href='/login'>
            <a>Login ?</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
