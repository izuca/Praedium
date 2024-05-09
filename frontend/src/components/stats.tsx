interface statsProps {
 valor : string,
 contato: string,
 area : number,
 quartos: number,
 banheiros: number,
 className?: string
}

export default function Stats({valor, contato, area, quartos, banheiros, className}: statsProps) {
  return (
    <div className="bg-black flex flex-col gap-8 w-80">
      <div className="bg-orange h-6" />
      <div className="flex flex-col justify-center pb-9 gap-4">
        <h2 className="text-white-600 text-4xl font-serif font-bold text-center">
          R${valor}
        </h2>
        <div className="flex flex-row justify-between border-white-600 border-b font-bold mx-12">
            <span className="text-white-600">Contato</span>
            <span className="text-white-600">{contato}</span>
        </div>
        <div className="flex flex-row justify-between border-white-600 border-b mx-12 font-light">
            <span className="text-white-600">Área</span>
            <span className="text-white-600">{area}m²</span>
        </div>
        <div className="flex flex-row justify-between border-white-600 border-b mx-12 font-light">
            <span className="text-white-600">Quartos</span>
            <span className="text-white-600">{quartos}</span>
        </div>
        <div className="flex flex-row justify-between border-white-600 border-b mx-12 font-light">
            <span className="text-white-600">Banheiros</span>
            <span className="text-white-600">{banheiros}</span>
        </div>
        
      </div>
    </div>
  );
}
