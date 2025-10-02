function Navbar() {
  return (
    <div>
      <div className=" text-transparent flex flex-rol justify-end p-6">
        <h1 className="text-purple-700 flex flex-col mr-150 text-2xl">
          SPA Review Hub
        </h1>
        <section className="bg-gradient-to-r from-purple-800 to-red-500 bg-clip-text flex flex-row gap-10">
          <a href="">Favoritos do público</a>
          <a href="">A critica adora</a>
          <a href="">Tpo 10 da semana</a>
          <a href="">O ques está por vir</a>
        </section>
      </div>
      <hr className="border-solid border-0.5 border-white bg-transparent" />
    </div>
  );
}

export default Navbar;
