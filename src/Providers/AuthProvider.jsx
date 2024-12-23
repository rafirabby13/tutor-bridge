/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import auth from '../firebase/Firebase.init.js';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const registerUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        
        })
        console.log("loading", loading);

        return ()=>{
            unsubscribe()
        }
    },[loading])


    const authInfo={
        loginUser,
        registerUser,
        user,
        logoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;