-- CreateEnum
CREATE TYPE "Estatus" AS ENUM ('pendiente', 'confirmada', 'concluida');

-- CreateEnum
CREATE TYPE "TipoMovimientoEnum" AS ENUM ('renta', 'entrada', 'incidencia_perdida', 'incidencia_prestamo');

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inmueble" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "imagen" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "fk_id_categoria" INTEGER NOT NULL,

    CONSTRAINT "Inmueble_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requisicion" (
    "id" SERIAL NOT NULL,
    "cliente" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "fecha_renta" TIMESTAMP(3) NOT NULL,
    "lugar" TEXT NOT NULL,
    "fecha_entrega" TIMESTAMP(3) NOT NULL,
    "fecha_devolucion" TIMESTAMP(3) NOT NULL,
    "responsable_entrega" TEXT NOT NULL,
    "responsable_devolucion" TEXT NOT NULL,
    "estatus" "Estatus" NOT NULL,

    CONSTRAINT "Requisicion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetallesRequisicion" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "fk_id_requisicion" INTEGER NOT NULL,
    "fk_id_inmueble" INTEGER NOT NULL,

    CONSTRAINT "DetallesRequisicion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" BIGINT NOT NULL,
    "correo" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "clave" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoMovimiento" (
    "id" SERIAL NOT NULL,
    "renta" TEXT NOT NULL,
    "entrada" TEXT NOT NULL,
    "insidencia_perdida" TEXT NOT NULL,
    "insidencia_prestamo" TEXT NOT NULL,

    CONSTRAINT "TipoMovimiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movimiento" (
    "id" SERIAL NOT NULL,
    "tipo_movimiento" "TipoMovimientoEnum" NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "motivo" TEXT NOT NULL,
    "fk_id_inmueble" INTEGER NOT NULL,
    "fk_id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Movimiento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inmueble" ADD CONSTRAINT "Inmueble_fk_id_categoria_fkey" FOREIGN KEY ("fk_id_categoria") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallesRequisicion" ADD CONSTRAINT "DetallesRequisicion_fk_id_requisicion_fkey" FOREIGN KEY ("fk_id_requisicion") REFERENCES "Requisicion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallesRequisicion" ADD CONSTRAINT "DetallesRequisicion_fk_id_inmueble_fkey" FOREIGN KEY ("fk_id_inmueble") REFERENCES "Inmueble"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimiento" ADD CONSTRAINT "Movimiento_fk_id_inmueble_fkey" FOREIGN KEY ("fk_id_inmueble") REFERENCES "Inmueble"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimiento" ADD CONSTRAINT "Movimiento_fk_id_usuario_fkey" FOREIGN KEY ("fk_id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
