import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../src/firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Login = () => {
  const Router = useRouter();

  const loginHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
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
      <form onSubmit={loginHandler} className={styles.container}>
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
        <br />
        <div>
          <button type='submit' className={styles.link}>
            Sign In
          </button>
          <br />
          <br />
          <Link href='/signup'>
            <a className={styles.link}>Sign up?</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
