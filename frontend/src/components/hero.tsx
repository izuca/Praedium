import SearchMenu from "./searchMenu";

interface heroProps {
  children: any
}

export default function Hero({children}: heroProps) {
  return (
    <div
      className="hero min-h-[580px] flex flex-col lg:flex-row justify-center gap-8 xl:gap-40 py-10 lg:py-0"
      style={{
        backgroundImage: `url('/hero_background.jpg')`,
      }}
    >
      <div>
        <h1 className="font-serif text-white-600 text-7xl lg:text-8xl xl:text-9xl text-center lg:text-left">PRAEDIUM</h1>
        <p className="text-white-600 text-2xl font-light text-center lg:text-left">Imobiliária descomplicada</p>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
