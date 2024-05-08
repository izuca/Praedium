import Image from "next/image";

export default function About() {
  return (
    <div className="hero flex justify-center text-black gap-16">
      <div className="flex flex-col gap-9">
          <div className="flex flex-col text-center px-12 lg:px-0 lg:text-left">
            <h3 className="font-serif text-4xl ">Alugue sem dor de cabeça</h3>
            <p className="text-lg font-light ">
              Consiga o seu tão sonhado imóvel sem burocracia.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly gap-9">
            <div className="flex flex-col items-center">
              <h4 className="text-3xl">999</h4>
              <p className="font-light">Imóveis</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-3xl">30</h4>
              <p className="font-light">Usuários</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-3xl">500</h4>
              <p className="font-light">Anunciantes</p>
            </div>
          </div>
      </div>
      <Image src="/about_image.jpg" alt="Passando Chaves" width={581} height={387.18} className="hidden lg:block"/>
    </div>
  );
}
