import Estrela from "../../../assets/Estrela.png";

function MoveList() {
  return (
    <div>
      <section>
        <header>
          <h2>Favoritos do publico</h2>

          <div>
            <ul className="text-white flex flex-row gap-8 list-none justify-end mr-6 text-0.5">
              <li className="flex flex-row gap-2">
                1 Estrla <img src={Estrela} alt="" className="w-6 h-6" />
              </li>
              <li className="flex flex-row gap-2">
                2 Estrlas <img src={Estrela} alt="" className="w-6 h-6" />{" "}
              </li>
              <li className="flex flex-row gap-2">
                3 Estrlas <img src={Estrela} alt="" className="w-6 h-6" />{" "}
              </li>
              <li className="flex flex-row gap-2">
                4 Estrelas <img src={Estrela} alt="" className="w-6 h-6" />{" "}
              </li>
              <li className="flex flex-row gap-2">
                5 Estrelas <img src={Estrela} alt="" className="w-6 h-6" />{" "}
              </li>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
}

export default MoveList;
