import { auth } from '../firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';
// const router = useRouter();

export const useSignout = () => {
  const { dispatch } = useAuthContext();
  // const router = useRouter();

  const Signout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return { Signout };
};
