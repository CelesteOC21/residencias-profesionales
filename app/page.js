import { AboutUs } from "./components/about-us";
import { Slider } from "./components/slider";

export default function Home() {
  return (
    <>
      <div className="Contenedor-Slider">
        <span className="drop-shadow-[3px_3px_3px_rgba(0,0,0,0)]">
          La esencia de nuestro trabajo
        </span>
        <Slider />
      </div>
      <AboutUs />
    </>
  );
}
