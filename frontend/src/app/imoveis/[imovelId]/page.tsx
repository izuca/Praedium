import ImoveisList from "@/components/imoveisList";
import Image from "next/image";
import Stats from "@/components/stats";

export default function ImovelId({ params }: { params: { imovelId: string } }) {
  return (
    <div className="flex flex-col gap-14 items-center pb-14">
      <div className="flex gap-0">
        <Image
          src="/hero_background.jpg"
          alt="teste"
          width={800}
          height={800}
        />
        <div className="grid-cols-2 hidden lg:grid">
          <Image
            src="/hero_background.jpg"
            alt="teste"
            width={200}
            height={200}
            className="w-fit h-full"
          />
          <Image
            src="/hero_background.jpg"
            alt="teste"
            width={200}
            height={200}
            className="w-fit h-full"
          />
          <Image
            src="/hero_background.jpg"
            alt="teste"
            width={200}
            height={200}
            className="w-fit h-full"
          />
          <Image
            src="/hero_background.jpg"
            alt="teste"
            width={200}
            height={200}
            className="w-fit h-full"
          />
        </div>
      </div>
      <div className="hero flex flex-col lg:flex-row justify-center text-black gap-14 lg:gap-40">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col text-center px-12 lg:px-0 lg:text-left">
            <h3 className="font-serif text-4xl ">Título da Obra {params.imovelId}</h3>
            <p className="text-lg font-light ">Descrição</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-4xl text-center lg:text-left">Localização</h3>
            <div className="flex flex-row items-center text-center px-12 lg:px-0 lg:text-left gap-5">
              <Image src="/local.svg" alt="Local" width={100} height={100}/>
              <div className="flex flex-col">
                <p className="text-2xl font-light ">Bairro</p>
                <p className="text-sm font-light ">Cidade, CEP</p>
              </div>
            </div>
          </div>
        </div>
        <Stats valor="999.999,00" contato="99 9999-9999" area={500} quartos={3} banheiros={2}/>
      </div>
      <ImoveisList cols={3} title="Veja também"/>
    </div>
  );
}
