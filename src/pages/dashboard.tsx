import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { api } from "../services/api"
import { useRouter } from 'next/router';
import { parseCookies } from "nookies";

export default function Dashboard() {
    const router = useRouter()
    const { token, isAuthenticated } = useContext(AuthContext)
    const cookies = parseCookies()


    useEffect(() => {
        api.get('api/1/', { headers: {"Authorization" : `Bearer ${cookies['nextoken']}`} } ).then(response => console.log(response.data))
    }, [])

    return (
        <h1>Dashboard: {token?.email}</h1>
    )
}