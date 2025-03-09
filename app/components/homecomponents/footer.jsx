import Image from "next/image";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logotipo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              className="invert"
              src="/imagenes/lg.png"
              alt="Logo"
              width={200}
              height={200}
              priority
            />
            <p className="mt-4 text-sm text-gray-400 text-center md:text-left">
              Ofreciendo servicios de calidad
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="transition-transform hover:scale-110"
              >
                <SlSocialFacebook className="h-6 w-6 hover:text-blue-500 transition-colors" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="transition-transform hover:scale-110"
              >
                <FaInstagram className="h-6 w-6 hover:text-pink-500 transition-colors" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Catálogo
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Galería
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Sobre nosotros
              </Link>
            </nav>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />
      </div>
    </footer>
  );
}
