import React, { createContext, useContext, useState } from 'react'
import { User, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../firebaseConfig'

type FirebaseContextType ={
    currentUser : User | null;
}

const provider = new GoogleAuthProvider();
const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }: { children: any }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const signInWithGoogle = ( ) => {
        return signInWithPopup(app.auth, provider);
    }

    const logout = () => {
        setCurrentUser(null);
    }

    return(
        <FirebaseContext.Provider value={{ currentUser }}>
            {children}
        </FirebaseContext.Provider>
    );
}