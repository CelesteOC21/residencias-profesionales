import { Slider } from "./components/slider";
//Te elimine este amistad para mejor importar la NAVBAR y el FOOTER en el mismo layout asi ya no tendriamos que importar el contenido en esta page

export default function Home() {
  //Quiero creer que podemos estructurar aqui cada componente de la landing page para asi solo importar este componente HOME en el layout
  return (
    <>
      <div className="Contenedor-Slider">
        <span className="drop-shadow-[3px_3px_3px_rgba(0,0,0,0)]">La Esencia de Nuestro Trabajo.</span>
        <Slider />
      </div>
    </>
  );
}
