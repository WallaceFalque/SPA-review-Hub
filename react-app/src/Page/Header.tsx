function Header() {
  return (
    <div className=" p-6 justify-end text-center flex flex-row gap-102">
      <h1 className="text-white text-3xl">//Por algo aqui depois (Logo?)//</h1>
      <section className="flex flex-row gap-4">
        <button className="transition-all duration-300 ease-in-out hover:scale-105 text-white font-semibold text-1xl py-2 px-4 rounded-full shadow-xl shadow-purple-700/50 bg-gradient-to-r from-purple-600 to-pink-600">
          FPS
        </button>
        <button className="transition-all duration-300 ease-in-out hover:scale-105 text-white font-semibold text-1xl py-2 px-4 rounded-full shadow-xl shadow-purple-700/50 bg-gradient-to-r from-purple-600 to-pink-600">
          RPG
        </button>
        <button className="transition-all duration-300 ease-in-out hover:scale-105 text-white font-semibold text-1xl py-2 px-4 rounded-full shadow-xl shadow-purple-700/50 bg-gradient-to-r from-purple-600 to-pink-600">
          Exploração
        </button>
        <button className="transition-all duration-300 ease-in-out hover:scale-105 text-white font-semibold text-1xl py-2 px-4 rounded-full shadow-xl shadow-purple-700/50 bg-gradient-to-r from-purple-600 to-pink-600">
          Sobrevivência
        </button>

        <button className="transition-all duration-300 ease-in-out hover:scale-105 text-white font-semibold text-1xl py-2 px-4 rounded-full shadow-xl shadow-purple-700/50 bg-gradient-to-r from-purple-600 to-pink-600">
          Mais aguardados
        </button>
      </section>
    </div>
  );
}

export default Header;
