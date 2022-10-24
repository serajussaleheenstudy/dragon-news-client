import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ Children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = profile => {
        return updateUserProfile(auth.currentUser, profile);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('auth state change', currentUser);

            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }

            setLoading(false);
        });
        return () => { unsubscribe(); }
    }, []);

    const authInfo = {
        user,
        providerLogin,
        // setLoading,
        logOut,
        createUser,
        signIn,
        loading,
        updateUserProfile,
        verifyEmail
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;