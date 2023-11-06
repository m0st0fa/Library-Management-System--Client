/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app)
export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading ,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user is looking', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe;
        }
    },[])

    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }

    const AuthInfo = {
        user,
        login,
        loading,
        createUser,
        logOut
        
    }
    return (
       <authContext.Provider value={AuthInfo}> 
             {children}
       </authContext.Provider>
    );
};

export default AuthProvider;