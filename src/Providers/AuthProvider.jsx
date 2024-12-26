/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/Firebase.init.js";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(true);
  const [theme, setTheme] = useState('light')
  const [tutors, setTutors] = useState([]);

  const googleProvider = new GoogleAuthProvider()

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    loginUser,
    registerUser,
    user,
    loading,
    logoutUser,
    tutors,
    setTutors,
    booking,
    setBooking,
    theme, 
    googleLogin,
    setTheme
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("currentUser", currentUser?.email);
      setUser(currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", {}, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          });
      }
    });
    console.log("loading", loading);

    return () => {
      unsubscribe();
    };
  }, [loading]);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
