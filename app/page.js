import { Slider } from "./components/slider";
//Te elimine este amistad para mejor importar la NAVBAR y el FOOTER en el mismo layout asi ya no tendriamos que importar el contenido en esta page

export default function Home() {
  return (
    //Prueba de slider
    <center>
      <Slider />
    </center>
  );
}
