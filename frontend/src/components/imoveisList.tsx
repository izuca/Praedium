import ImovelCard from './imovelCard';

interface ImovelCardProps {
	cols: number;
	className?: string;
	title?: string;
}

export default function ImoveisList({
	className,
	cols,
	title = 'Imoveis Anuniados',
}: ImovelCardProps) {
	return (
		<div
			className={`flex flex-col items-center gap-10 px-8  2xl:px-32  ${className}`}
		>
			<h3 className="font-serif text-4xl text-center">{title}</h3>
			<div
				className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-${cols} gap-6 justify-items-center`}
			>
				<ImovelCard />
				<ImovelCard />
				<ImovelCard />
				<ImovelCard />
				<ImovelCard />
				<ImovelCard />
			</div>
		</div>
	);
}
