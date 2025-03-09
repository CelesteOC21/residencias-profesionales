import Link from "next/link";

import { Logo } from "./logo";

export function Navbar() {
  return (
    <>
      <div className="flex justify-center mb-4" id="navbar">
        <Logo alt="Logo" width={150} height={150} />
      </div>

      <header className="flex justify-center bg-black">
        <nav className="flex gap-6">
          <Link
            href="/"
            className="group inline-flex h-9 items-center justify-center rounded-md  px-4 py-2 text-base font-medium transition-colors 
          text-white hover:text-gray-300 
          focus:text-gray-300 focus:outline-none 
          dark:text-white dark:hover:text-gray-400 dark:focus:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="#"
            className="group inline-flex h-9 items-center justify-center rounded-md  px-4 py-2 text-base font-medium transition-colors 
          text-white hover:text-gray-300 
          focus:text-gray-300 focus:outline-none 
          dark:text-white dark:hover:text-gray-400 dark:focus:text-gray-400"
          >
            Catálogo
          </Link>
          <Link
            href="#galeria"
            className="group inline-flex h-9 items-center justify-center rounded-md  px-4 py-2 text-base font-medium transition-colors 
          text-white hover:text-gray-300 
          focus:text-gray-300 focus:outline-none 
          dark:text-white dark:hover:text-gray-400 dark:focus:text-gray-400"
          >
            Galería
          </Link>
          <Link
            className="group inline-flex h-9 items-center justify-center rounded-md  px-4 py-2 text-base font-medium transition-colors 
          text-white hover:text-gray-300 
          focus:text-gray-300 focus:outline-none 
          dark:text-white dark:hover:text-gray-400 dark:focus:text-gray-400"
          >
            Sobre nosotros
          </Link>
        </nav>
      </header>
    </>
  );
}
