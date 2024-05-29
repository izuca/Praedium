import Image from 'next/image';

interface Imovel {
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
}

interface ImovelCardProps {
	imovel: Imovel;
}

export default function ImovelCard({ imovel }: ImovelCardProps) {
	return (
		<div className="flex flex-col justify-center items-center w-fit hover:cursor-pointer ">
			<Image
				src={
					imovel.imagens[0]
						? `/storage/${imovel.imagens[0].path}`
						: '/hero_background.jpg'
				}
				alt="teste"
				width={400}
				height={500}
				className="w-full"
			/>
			<div className="bg-black p-4 flex justify-center items-center gap-5 w-full">
				<div className="flex flex-col w-60 md:w-auto">
					<span className="font-bold text-2xl text-white-600">
						R${imovel.valor}
					</span>
					<p className="font-light text-white-600 text-sm">
						{imovel.cidade}, {imovel.bairro} - {imovel.uf}
					</p>
				</div>
				<div className="hidden md:flex  justify-evenly gap-9">
					<div className="flex flex-col items-center">
						<h4 className="text-xl font-light text-white-600">
							{imovel.qtd_quarto}
						</h4>
						<p className="font-light text-white-600">Quartos</p>
					</div>
					<div className="flex flex-col items-center">
						<h4 className="text-xl font-light text-white-600">
							{imovel.qtd_banheiro}
						</h4>
						<p className="font-light text-white-600">Banheiros</p>
					</div>
					<div className="flex flex-col items-center">
						<h4 className="text-xl font-light text-white-600">
							{imovel.area_construida}
						</h4>
						<p className="font-light text-white-600">m²</p>
					</div>
				</div>
			</div>
		</div>
	);
}
