import { AboutUs } from "../components/homecomponents/about-us";
import { Slider } from "../components/homecomponents/slider";
import { Catalogo } from "../components/homecomponents/catalogo";

export default function Home() {
  return (
    <>
      <Portada />
      <div className="Contenedor-Slider">
        <span className="drop-shadow-[3px_3px_3px_rgba(0,0,0,0)]">
          La esencia de nuestro trabajo
        </span>
        <Slider />
      </div>
      <Catalogo />
      <AboutUs />
    </>
  );
}
function Portada() {
  return (
    <>
      <div className="bg-[url(/imagenes/Ejemplo.jpg)] bg-cover h-auto w-full flex flex-row justify-between shadow-lg shadow-black-500/50">
        <div className="text-white p-10 w-1/2 text-[85px] italic bg-zinc-500/20 backdrop-brightness-50 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </>
  );
}
