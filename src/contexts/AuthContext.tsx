import { createContext, ReactNode, useState, useEffect } from "react"
import { api } from "../services/api"
import { setCookie, parseCookies } from "nookies"

type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    isAuthenticated: boolean;
    token: Token;
}

type AuthProviderProps = {
    children: ReactNode;
}

type Token = {
    email: string
    refresh: string;
    access: string;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [token, setToken] = useState<Token>()
    const isAuthenticated = !!token
    

    async function signIn({ email, password}: SignInCredentials) {
        try{
            const response = await api.post('token/', {
                email,
                password
            })
            
            const { access, refresh } = response.data

            setCookie(undefined, 'nextoken', access,{
                maxAge: 60*60*24*30, // 30 dias
                path: '/'
            })
            setCookie(undefined, 'nextrefresh', refresh, {
                maxAge: 60*60*24*30, // 30 dias
                path: '/'
            })

            setToken({
                email,
                access,
                refresh,
            })

            api.defaults.headers['Authorization'] = `Bearer ${access}`

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, isAuthenticated, token}}>
            { children }
        </AuthContext.Provider>
    )
}