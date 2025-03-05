import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function Catalogo() {
  var Inmobiliario = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="grid grid-cols-5 gap-3 w-full Contenedor-Catalogos inset-shadow-2xs content-center p-8 pb- pr-3 border-4 border-gray-300 border-y-black shadow-xl">
        {Inmobiliario.map((item, index) => (
          <div
            key={index}
            className="bg-black rounded-sm w-60 flex flex-row justify-stretch shadow-lg shadow-black-500/50"
          >
            <CardHeader>
              <CardTitle className="text-xl text-center text-white">
                <Button
                  variant="ghost"
                  className="transition duration-300 ease-in-out"
                >
                  Categoria {item}
                </Button>
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="content-end">
              <Image
                className="rounded-xl"
                src="/imagenes/catalogo/Silla.png"
                alt="Carrusel"
                width={70}
                height={60}
              />
            </CardContent>
          </div>
        ))}
      </div>
    </>
  );
}
