import { AboutUs } from "./components/about-us";
import { Slider } from "./components/slider";

export default function Home() {
   return (
    <>
      <AboutUs />
      <div className="Contenedor-Slider">
        <span className="drop-shadow-[3px_3px_3px_rgba(0,0,0,0)]">La Esencia de Nuestro Trabajo.</span>
        <Slider />
      </div>
    </>
  );
}
