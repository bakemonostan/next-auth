// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCQlWHKfnkFLmFb-ztHBYZqHv3dZknLmCk',
  authDomain: 'next-auth-4b6ac.firebaseapp.com',
  projectId: 'next-auth-4b6ac',
  storageBucket: 'next-auth-4b6ac.appspot.com',
  messagingSenderId: '549981940511',
  appId: '1:549981940511:web:cd768422d30a44de91de2a',
};

// initialize firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

//init firebase auth
const auth = getAuth();

export { db, auth };
