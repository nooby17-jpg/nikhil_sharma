import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader"; // Import Preloader

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  
  title: "Nikhil Sharma | Data Science & Design",
  description: "Portfolio of Nikhil Sharma - ML Engineer & Creative Developer",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-[#ededed] antialiased selection:bg-white selection:text-black">
        <Preloader /> {/* Add Preloader Here */}
        <SmoothScrolling>
            <Header /> 
            {children}
            <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}