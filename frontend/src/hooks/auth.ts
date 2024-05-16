import useSWR from 'swr';
import axios from '@/lib/axios';
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export const useAuth = ({ middleware, redirectIfAuthentcated }: any = {}) => {
	const router = useRouter();
	const params = useParams();

	const {
		data: user,
		error,
		mutate,
	} = useSWR('/api/user', () =>
		axios
			.get('api/user')
			.then((res) => res.data)
			.catch((error) => {
				if (error.response.status !== 409) throw error;

				router.push('/verify-email');
			})
	);

	const csrf = () => axios.get('sanctum/csrf-cookie');

	const register = async ({ setErrors, ...props }: any) => {
		await csrf();
		setErrors([]);
		console.log('Registrando...');
		axios
			.post('/register', props)
			.then(() => {
				console.log('Registrado!');
				mutate();
			})
			.catch((error) => {
				if (error.response.status !== 422) throw error;
				setErrors(error.response.data.errors);
			});
	};

	const login = async ({ setErrors, setStatus, ...props }: any) => {
		await csrf();
		setErrors([]);
		setStatus(null);

		console.log('logando...');
		axios
			.post('/login', props)
			.then((res) => {
				console.log('Usuário logado');
				mutate();
				router.push('/');
			})
			.catch((error) => {
				console.log(error);
				if (error.response.status !== 422) throw error;
				setErrors(error.response.data.errors);
			});
	};

	const forgotPassword = async ({ setErrors, setStatus, email }: any) => {
		await csrf();
		setErrors([]);
		setStatus(null);

		axios
			.post('/forgot-password', { email })
			.then((response) => setStatus(response.data.status))
			.catch((error) => {
				if (error.response.status !== 422) throw error;
				setErrors(error.response.data.errors);
			});
	};

	const resetPassword = async ({ setErrors, setStatus, ...props }: any) => {
		await csrf();
		setErrors([]);
		setStatus(null);

		axios
			.post('/reset-password', { token: params.token, ...props })
			.then((response) =>
				router.push('/login?reset=' + btoa(response.data.status))
			)
			.catch((error) => {
				if (error.response.status !== 422) throw error;
				setErrors(error.response.data.errors);
			});
	};

	const resendEmailVerification = ({ setStatus }: any) => {
		axios
			.post('/email/verification-notification')
			.then((response) => setStatus(response.data.status));
	};

	const logout = async () => {
		if (!error) {
			await axios.post('/logout').then(() => mutate());
		}

		window.location.pathname = '/login';
	};

	useEffect(() => {
		if (middleware === 'guest' && redirectIfAuthentcated && user)
			router.push(redirectIfAuthentcated);
		if (
			window.location.pathname === '/verify-email' &&
			user?.email_verified_at
		)
			router.push(redirectIfAuthentcated);
		if (middleware === 'auth' && error) logout();
	}, [user, error]);

	return {
		user,
		register,
		login,
		forgotPassword,
		resetPassword,
		resendEmailVerification,
		logout,
	};
};