import Image from "next/image";

export default function ImovelCard() {
  return (
    <div className="flex flex-col justify-center items-center w-fit hover:cursor-pointer">
      <Image src="/hero_background.jpg" alt="teste" width={400} height={500} className="w-fit"/>
      <div className="bg-black p-4 flex justify-center items-center gap-5 w-full">
        <div className="flex flex-col">
            <span className="font-bold text-2xl text-white-600">R$150.000</span>
            <p className="font-light text-white-600 text-sm">Anápolis, Setor Central - Goiás</p>
        </div>
        <div className="flex  justify-evenly gap-9">
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-light text-white-600">999</h4>
            <p className="font-light text-white-600">Quartos</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-light text-white-600">30</h4>
            <p className="font-light text-white-600">Banheiros</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-light text-white-600">500</h4>
            <p className="font-light text-white-600">m²</p>
          </div>
        </div>
      </div>
    </div>
  );
}
