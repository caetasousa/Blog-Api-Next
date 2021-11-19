import axios from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies()
const baseURL = 'http://127.0.0.1:8000/'

export const api = axios.create({
    baseURL: baseURL,
    // headers: {
    //     Authorization: `Bearer ${cookies['nextoken']}`
    // }
})



