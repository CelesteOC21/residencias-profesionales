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
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-5 gap-8 w-[100rem] inset-shadow-2xs content-center p-8 border-4 border-gray-300 border-y-black shadow-xl m-2">
          {Inmobiliario.map((item, index) => (
            <div
              key={index}
              className="bg-black rounded-xl transition-transform duration-300 ease-in-out hover:scale-[1.05]"
            >
              <div className="items-center relative">
                <Image
                  className="w-[60rem] h-[13rem] rounded-t-lg z-10"
                  src="/imagenes/catalogo/Silla.jpeg"
                  alt="sILLA"
                  width={600}
                  height={600}
                ></Image>
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent z-10"></div>
                <div className="absolute bottom-[0.3rem] left-[10px] z-40 text-black overline text-[23px] font-bold ">
                  Categoria {item}
                </div>
              </div>
              <div className="text-white text-sm">
                <div className="justify-center m-3">
                  <p>Asientos de Boda</p>
                  <p className="text-xs">
                    Sillas elegantes con respaldos comodos echas a la medida
                    para grandes recuerdos.
                  </p>
                </div>
              </div>
              <div className="m-4 flex justify-center w-auto text-white">
                <Button variant="ghost">Ver colección →</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
