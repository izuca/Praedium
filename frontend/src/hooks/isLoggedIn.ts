import { cookies } from 'next/headers';

export default function IsLoggedIn() {
	const cookieStore = cookies();
	const session = cookieStore.get('laravel_session');

	console.log(session);

	return session;
}
