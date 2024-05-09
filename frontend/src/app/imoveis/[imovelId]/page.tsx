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
          width={600}
          height={600}
        />
        <div className="grid-cols-2 hidden lg:grid">
          <Image
            src="/hero_background.jpg"
            alt="teste"
            width={200}
            height={200}
            className="w-fit"
          />
          <Image
            src="/hero_background.jpg"
            alt="teste"
            width={200}
            height={200}
            className="w-fit"
          />
          <Image
            src="/hero_background.jpg"
            alt="teste"
            width={200}
            height={200}
            className="w-fit"
          />
          <Image
            src="/hero_background.jpg"
            alt="teste"
            width={200}
            height={200}
            className="w-fit"
          />
        </div>
      </div>
      <div className="hero flex justify-center text-black gap-40">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col text-center px-12 lg:px-0 lg:text-left">
            <h3 className="font-serif text-4xl ">Título da Obra</h3>
            <p className="text-lg font-light ">Descrição</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-4xl ">Localização</h3>
            <div className="flex flex-row items-center text-center px-12 lg:px-0 lg:text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#2c2c2c"
                  d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
                />
              </svg>
              <div className="flex flex-col">
                <p className="text-lg font-light ">Bairro</p>
                <p className="text-sm font-light ">Cidade, CEP</p>
              </div>
            </div>
          </div>
        </div>
        <Stats valor="999.999,00" contato="99 9999-9999" area={500} quartos={3} banheiros={2}/>
      </div>
      <ImoveisList/>
    </div>
  );
}
