'use client';

import ImovelCard from './imovelCard';
import { GetServerSideProps } from 'next';
import axios from '@/lib/axios';

interface Imovel{
	id: number;
	nome: string;
	endereco: string;
	bairro: string;
	cidade: string;
	uf: string;
	cep: string;
	area_construida: number;
	qtd_quarto: number;
	qtd_banheiro: number;
	descricao: string;
	valor: number;
	imagens: { path: string }[];
};

interface ListProps{
	imoveis: Imovel[];
	cols: number;
	className?: string;
	title?: string;
};

export default function ImoveisList({
	imoveis,
	className,
	cols,
	title = 'Imoveis Anuniados',
}: ListProps) {
	return (
		<div
			className={`flex flex-col items-center gap-10 px-8  2xl:px-32  ${className}`}
		>
			<h3 className="font-serif text-4xl text-center">{title}</h3>
			<div
				className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-${cols} gap-6 justify-items-center`}
			>
				{imoveis.map((imovel) => (
					<ImovelCard key={imovel.id} imovel={imovel} />
				))}
			</div>
		</div>
	);
};

export async function getServerSideProps() {
	const response = await axios.get('/');
	console.log(response.data)
	return {
		props: {
			imoveis: response.data,
		},
	};
};
