export default function NotFound(){
    return(
        <div className="hero min-h-screen flex flex-col justify-center gap-8 py-10 lg:py-0"
        style={{
          backgroundImage: `url('/hero_background.jpg')`,
        }}>
            <h1 className="font-serif text-white-600 text-7xl lg:text-9xl text-center lg:text-left">Erro 404</h1>
            <p className="text-white-600 text-2xl font-light text-center lg:text-left">Página não encontrada</p>
        </div>
    )
}