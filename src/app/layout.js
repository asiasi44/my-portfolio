import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const myFont = localFont({ src: "./fonts/dklemon.otf" });

export const metadata = {
  title: "Asim Poudel",
  description: "Asim's Portfolio Website",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${myFont.className} text-white bg-black w-full`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
