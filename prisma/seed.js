import { db } from "../lib/db.js";
import { encryptPassword } from "../lib/bcrypt.js";

const main = async () => {
  const usersCount = await db.usuario.count();

  if (usersCount === 0) {
    await db.usuario.create({
      data: {
        nombre: process.env.FIRST_USER_NOMBRE,
        telefono: process.env.FIRST_USER_TELEFONO,
        correo: process.env.FIRST_USER_CORREO,
        rol: process.env.FIRST_USER_ROL,
        usuario: process.env.FIRST_USER_USUARIO,
        clave: await encryptPassword(process.env.FIRST_USER_CLAVE),
      },
    });
  }
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
