import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const myFont = localFont({ src: "./fonts/dklemon.otf" });

export const metadata = {
  title: "Asim Poudel",
  description: "Asim's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full">
      <body className={`${myFont.className} text-white bg-black w-full`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
