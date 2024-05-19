'use client';

import Link from 'next/link';
import Hero from '@/components/hero';
import { useAuth } from '@/hooks/auth';
import { useState } from 'react';
import ErroEntrada from '@/components/erroEntrada';
import AuthSessionStatus from '../AuthSessionStatus';

export default function Registrar() {
	const { register } = useAuth({
		middleware: 'guest',
		redirectIfAuthenticated: '/perfil',
	});

	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');
	const [errors, setErrors]: any = useState([]);

	const submitForm = async (event: any) => {
		event.preventDefault();

		register({
			name,
			number,
			email,
			password,
			password_confirmation: passwordConfirmation,
			setErrors,
		});
	};
	return (
		<Hero height="min-h-screen">
			<div className="bg-black flex flex-col gap-8 w-96">
				<div className="bg-orange h-6" />
				<div className="flex justify-center">
					<h1 className="text-2xl font-serif font-thin text-white-900 text-center w-48">
						Crie a sua conta
					</h1>
				</div>
				<AuthSessionStatus className="mb-4" status={status} />
				<form
					className="flex flex-col items-center gap-2 pb-8"
					onSubmit={submitForm}
				>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-base font-light text-white-600"
						>
							Nome Completo
						</label>
						<input
							type="text"
							id="name"
							value={name}
							name="email"
							required
							autoFocus
							onChange={(event) => setName(event.target.value)}
							className="w-56 py-2 px-3 text-sm text-white-600 bg-black border-solid border hover:border-2 focus:border-2 font-thin border-white-600 placeholder-white-600 "
						/>
						<ErroEntrada messages={errors.email} className="mt-2" />
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-base font-light text-white-600"
						>
							Número do Celular
						</label>
						<input
							type="number"
							id="number"
							value={number}
							name="number"
							required
							autoFocus
							onChange={(event) => setNumber(event.target.value)}
							className="w-56 py-2 px-3 text-sm bg-black border-solid border hover:border-2 focus:border-2 text-white-600 font-thin border-white-600 placeholder-white-600 "
						/>
						<ErroEntrada messages={errors.email} className="mt-2" />
					</div>
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

						<input
							type="password"
							id="password"
							value={password}
							onChange={(event) =>
								setPassword(event.target.value)
							}
							required
							className="w-56 py-2 px-3 text-sm bg-black border-solid border hover:border-2 focus:border-2 text-white-600 font-thin border-white-600 placeholder-white-600 "
						/>

						<ErroEntrada
							messages={errors.password}
							className="mt-2"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-base font-light text-white-600"
						>
							Confirme a senha
						</label>

						<input
							type="password"
							id="passwordConfirmation"
							value={passwordConfirmation}
							onChange={(event) =>
								setPasswordConfirmation(event.target.value)
							}
							required
							className="w-56 py-2 px-3 text-sm bg-black border-solid border hover:border-2 focus:border-2 text-white-600 font-thin border-white-600 placeholder-white-600 "
						/>

						<ErroEntrada
							messages={errors.password_confirmation}
							className="mt-2"
						/>
					</div>
					<button
						type="submit"
						className="w-56 py-2 px-3 bg-orange text-white-900 text-sm font-thin"
					>
						Criar
					</button>
					<Link
						href={'/login'}
						className="text-white-600 hover:text-orange"
					>
						Já possui conta?
					</Link>
				</form>
			</div>
		</Hero>
	);
}
