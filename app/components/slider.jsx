import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Slider() {
  //Este arreglo contendra las rutas de las imagenes que mostrara el carrusel
  var Imagenes = [1, 2, 3, 4, 5, 6];
  return (
    <Carousel
      //Esta propiedad opts nos permite agregar atributos de disposicion, comportamiento y clases a un componente en este caso al Carousel
      opts={{
        //Las cards dentro del carrusel tendran una alineación al principio desde la izquierda
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Imagenes.map((imagen, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span>
                    {index + 1}, {imagen}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
  /* Imagenes.map permite obtener el contenido del indice en cada iteracion que hace, basandose
  en la longitud del array Imagenes, ademas de asignar el numero de item a cada elemento dentro del carrusel
  basandose en el indice del array.
  En resumen `Imagenes.map` itera sobre el array `Imagenes`, generando un ítem por cada número en el array.
  utiliza el índice para asignar un valor único a cada ítem del carrusel.
  */
}
