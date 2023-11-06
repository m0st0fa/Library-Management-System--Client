/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { createContext, useState } from "react";
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

    const AuthInfo = {
        user,
        loading,
        createUser,
        
    }
    return (
       <authContext.Provider value={AuthInfo}> 
             {children}
       </authContext.Provider>
    );
};

export default AuthProvider;