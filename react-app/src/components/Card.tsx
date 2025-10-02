import ImgMedia from "./ImgMedia";
import InfoMedia from "./InfoMedia";

function Card() {
  return (
    <div className="bg-black text-white justify-center text-center p-10 m-10 border-4 border-gray-800 rounded-2xl flex flex-col gap-12 w-1/6 h-1/3">
      <ImgMedia />
      <InfoMedia />
    </div>
  );
}

export default Card;
