import { Footer } from "../components/homecomponents/footer";
import { Navbar } from "../components/homecomponents/navbar";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
//minusculas
