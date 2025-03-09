import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/ui/providers";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});

export const metadata = {
  title: "+IDEAS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Providers>
          {children}
          <Toaster />{" "}
        </Providers>
      </body>
    </html>
  );
}
//ya estoy harto
