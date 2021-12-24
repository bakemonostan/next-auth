import { useContext } from 'react';
import { useSignout } from '../src/hooks/useSignout';
import AuthRoute from '../src/HOC/authRoute';
import { AuthContext } from '../src/context/AuthContext';
// import { useRouter } from 'next/router';

export default function Home() {
  const { Signout } = useSignout();
  const { userData } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    // router.push('/login');
    Signout();
  };
  return (
    <AuthRoute>
      <div>Welcome, You are now logged in</div>
      <br />
      <br />
      <h4>Authentication method:</h4>
      <h6>{userData.userProviderId}</h6>
      <div>
        <h4>userId:</h4>
        <h6>{userData.userId}</h6>
      </div>
      <button onClick={handleClick}>Click me to log out</button>
    </AuthRoute>
  );
}
