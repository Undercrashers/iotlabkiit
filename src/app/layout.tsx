import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Playfair_Display,
  Inter,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IOT LAB KIIT",
  description: "IOT Lab at KIIT University is a hub for innovation and research in the field of Internet of Things (IoT). We are dedicated to fostering creativity, collaboration, and cutting-edge research in IoT technologies. Our lab provides state-of-the-art facilities and resources for students and researchers to explore the vast potential of IoT, from smart cities and connected devices to industrial automation and beyond. Join us on our journey to shape the future of technology and connectivity.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} ${playfairDisplay.variable} ${inter.variable} antialiased bg-gradient-to-b from-[#0B1D64] to-[#071034]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
