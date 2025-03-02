import { AboutUs } from "./components/about-us";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <br />
      <AboutUs />

      <Footer />
    </>
  );
}
