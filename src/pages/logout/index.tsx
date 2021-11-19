import { useEffect } from "react";
import { api } from "../../services/api";
import { useRouter } from 'next/router';

export default function Logout() {
    const router = useRouter()

	useEffect(() => {
		const response = api.post('api/user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		api.defaults.headers['Authorization'] = null;
		router.push('/')
	});
    return <div>Logout</div>;
}