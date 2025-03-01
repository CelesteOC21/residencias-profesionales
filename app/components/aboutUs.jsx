import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AboutUs() {
  const sobreNosotros = [
    {
      title: "Misión",
      description:
        "Planificar, diseñar y brindar ideas profesionales que potencien los proyectos de nuestros clientes de nuestros clientes garantizando el éxito de los mismos, basándonos en una relación de confianza mutua que nos constituya en solidos  aliados y así ofrecer la máxima comodidad y tranquilidad en esos momentos especiales para convertirlos en inolvidables.",
    },
    {
      title: "Visión",
      description:
        "Ser una microempresa en el sector de organización de eventos sociales dentro de Lagos de Moreno, Jalisco y la región, así como la creación de ambientes únicos para las celebraciones especiales ofreciendo el más alto nivel de excelencia y calidad en nuestros servicios. ",
    },
    {
      title: "Valores",
      description:
        "Honestidad, Confiable, Solidaridad, Respeto, Compromiso, Pasión, Cultura de servicio, Calidad ",
    },
  ];

  return (
    <>
      <div className=" flex justify-center font-semibold text-3xl pb-10 pt-10">
        <h1>Sobre nosotros</h1>
      </div>

      <section className="mx-auto flex justify-center bg-[url('/imagenes/au.jpeg')] bg-cover bg-center backdrop-filter">
        <div className="container pb-20">
          <div className="text-center mb-12 mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">+IDEAS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6x1 mx-auto">
            {sobreNosotros.map((descripcion) => (
              <Card
                key={descripcion.title}
                className="h-full backdrop-brightness-50 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-[0.5] border-neutral-400"
              >
                <CardHeader className="text-center pb-2">
                  <h3 className="font-semibold text-xl mb-2 text-white">
                    {descripcion.title}
                  </h3>
                </CardHeader>
                <CardContent className="text-balance ">
                  <p className="text-muted-foreground mb-6 text-white">
                    {descripcion.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
