import SearchMenu from "./searchMenu";

export default function Hero() {
  return (
    <div
      className="hero h-96 flex justify-center"
      style={{
        backgroundImage: `url('/hero_background.jpg')`,
      }}
    >
      <div>
        <h1 className="font-serif text-white-600 text-7xl md:text-9xl">PRAEDIUM</h1>
        <p className="text-white-600 text-2xl">Imobiliária descomplicada</p>
      </div>
      <div>
        <SearchMenu/>
      </div>
    </div>
  );
}
