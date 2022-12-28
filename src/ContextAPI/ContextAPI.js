import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';
import app from '../Auth/GoogleAuth/Firebase.config';

export const AuthContextAPI = createContext();
const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);

    /// 1. Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    /// unsubscribe with loader
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside Auth State Change', currentUser);
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }

    }, []);

    const authInfo = {
        user,
        createUser,
    
    }
    return (
        <AuthContextAPI.Provider value={authInfo}>
            {children}
        </AuthContextAPI.Provider>
    );
};

export default AuthContext;