'use client';

import Link from 'next/link';
import Hero from '@/components/hero';
import { useAuth } from '@/hooks/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthSessionStatus from '../AuthSessionStatus';
import ErroEntrada from '@/components/erroEntrada';

export default function Login() {
	const router = useRouter();
	const { login } = useAuth({
		middleware: 'guest',
		redirectIfAuthenticated: '/perfil',
	});

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [shouldRemember, setShouldRemember] = useState(false);
	const [errors, setErrors] = useState([]);
	const [status, setStatus] = useState(null);

	const submitForm = async (event: any) => {
		event.preventDefault();

		login({
			email,
			password,
			remember: shouldRemember,
			setErrors,
			setStatus,
		});
	};
	return (
		<Hero height="min-h-screen">
			<div className="bg-black flex flex-col gap-8 w-96">
				<div className="bg-orange h-6" />
				<div className="flex justify-center">
					<h1 className="text-2xl font-serif font-thin text-white-900 text-center w-40">
						Faça login
					</h1>
				</div>
				<form
					className="flex flex-col items-center gap-4 pb-8"
					onSubmit={submitForm}
				>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-base font-light text-white-600"
						>
							E-mail
						</label>
						<input
							type="email"
							id="email"
							value={email}
							name="email"
							required
							autoFocus
							onChange={(event) => setEmail(event.target.value)}
							className="w-56 py-2 px-3 text-sm bg-black border-solid border hover:border-2 focus:border-2 text-white-600 font-thin border-white-600 placeholder-white-600 "
						/>
						<ErroEntrada messages={errors.email} className="mt-2" />
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-base font-light text-white-600"
						>
							Senha
						</label>
						<div className="flex flex-col">
							<input
								type="password"
								id="password"
								value={password}
								onChange={(event) =>
									setPassword(event.target.value)
								}
								required
								autoComplete="current-password"
								className="w-56 py-2 px-3 text-sm bg-black border-solid border hover:border-2 focus:border-2 text-white-600 font-thin border-white-600 placeholder-white-600 "
							/>

							<ErroEntrada
								messages={errors.password}
								className="mt-2"
							/>
							<div className="block mt-4">
								<label
									htmlFor="remember_me"
									className="inline-flex items-center"
								>
									<input
										id="remember_me"
										type="checkbox"
										name="remember"
										className="border-white-600 focus:border-orange focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										onChange={(event) =>
											setShouldRemember(
												event.target.checked
											)
										}
									/>

									<span className="ml-2 text-sm text-white-600">
										Lembrar de mim
									</span>
								</label>
							</div>
							<Link
								href={'/esqueceu-senha'}
								className="text-white-600 hover:text-orange"
							>
								Esqueceu a senha?
							</Link>
						</div>
					</div>

					<button
						type="submit"
						className="w-56 py-2 px-3 bg-orange text-white-900 text-sm font-thin"
					>
						Entrar
					</button>
					<Link
						href={'/registrar'}
						className="text-white-600 hover:text-orange"
					>
						Não possui conta? Cadastrar
					</Link>
                    <AuthSessionStatus className="mb-4" status={status} />
				</form>
			</div>
		</Hero>
	);
}
