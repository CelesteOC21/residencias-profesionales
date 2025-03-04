import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
