import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from './firebaseconfig';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  return { user, handleLogin, handleLogout };
};

export {useAuth};