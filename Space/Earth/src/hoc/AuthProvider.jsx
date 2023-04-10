import { createContext, useState } from "react";

export const AuthContext = createContext(null)

function AuthProvider({ children }) {
    const [admin, setAdmin] = useState({ login: '', password: '' })
    const singIn = ( cb) => {
        cb();
    }

    const singOut = (cb) => {
        setAdmin({ login: '', password: '' })
    }
    const value = { admin, singIn, singOut, setAdmin }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;