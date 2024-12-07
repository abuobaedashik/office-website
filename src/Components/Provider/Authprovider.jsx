import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.config';


export const Authcontext =createContext()
// const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const auth = getAuth(app);
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  console.log(user);
  const googleProvider = new GoogleAuthProvider()
  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    setloading(true);
    return signOut(auth);
  };
  const SignInUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn =()=>{
    return signInWithPopup(auth,googleProvider)
  }
  const updateUserProfile = ( updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false)
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);



  const authInfo = {
    user,
    createUser,
    googleSignIn,
     logOutUser,
      SignInUser,
    setuser,
    loading,
    updateUserProfile
  };
    return <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
};

export default AuthProvider;