import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  // Check for authcontext
  if (!context) {
    throw Error('useAuthContext msut be inside an AuthContextProvider');
  }

  return context;
};
