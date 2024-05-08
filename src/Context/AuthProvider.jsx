import { createContext, useContext, useEffect, useState } from "react";
import { axiosClient } from "../api/axios";
import UserApi from "../Service/api/UserApi";


const AuthContext = createContext({
    user: [],
    authenticated: false,
    setUser: () => {
    },
    logout: () => {
    },
    login: (email, password) => {
    },
    setAuthenticated: () => {
    },
    setToken: () => {
    },

});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);



    const [loading, setLoading] = useState(false);

    const [authenticated, _setAuthenticated] = useState('true' === window.localStorage.getItem('AUTHENTICATED'));


    // useEffect(() => {
    //     if (authenticated) {
    //         setLoading(true);
    //     }
    // }, [authenticated]);


    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated)
        window.localStorage.setItem('AUTHENTICATED', JSON.stringify(isAuthenticated))
    }



    const setToken = (token) => {
        window.localStorage.setItem('token', token)
    }



    const login = async (email, password) => {
        try {
            const response = await UserApi.login(email, password);
            const { token } = response.data;
            console.log('tttt'+token);
            if (token) {
                setToken(token);
                setAuthenticated(true); // Ensure the authenticated state is updated
                return response; // Optionally return response for further handling
            }

        } catch (error) {
            console.error("Login error ..", error);
            throw error;
        }
    }






    // const logout =async () => {
    //   try {
    //     await axiosClient.get('/sanctum/csrf-cookie');
    //     // Call the backend to invalidate the session/token
    //     await axiosClient.post('/logout');
    //     setAuthenticated(false);
    //     // Remove token from localStorage or where it's stored
    //     localStorage.removeItem('token');
    //     // Redirect to login page or home

    //   } catch (error) {
    //     console.error("Logout error", error);
    //     // Handle logout error (optional)
    //   } finally {
    //     // Clear authentication state regardless of API call success
    //     window.localStorage.removeItem('token');
    //     window.localStorage.removeItem('AUTHENTICATED');
    //     setUser({});
    //     _setAuthenticated(false);
    //   }

    // }









    return (
        <AuthContext.Provider value={{
            login,
            authenticated,
            setAuthenticated,
            login,
            setToken,

        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const Usercontext = () => useContext(AuthContext)
export default AuthContext;
