import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null); // State for userId
    const [userInfo, setUserInfo] = useState({}); // Optional: Add state for other user details

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userId, setUserId, userInfo, setUserInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
