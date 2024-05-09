import ImovelCard from "./imovelCard"

interface ImovelCardProps {
    className?: string
}

export default function ImoveisList({ className} : ImovelCardProps ){
    return(
        <div className={`flex flex-col items-center gap-10 px-32 ${className}`}>
            <h3 className="font-serif text-4xl ">Imoveis Anunciados</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                <ImovelCard/>
                <ImovelCard/>
                <ImovelCard/>
                <ImovelCard/>
            </div>
        </div>
    )
}