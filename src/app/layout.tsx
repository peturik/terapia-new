import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/styles/style.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warsztat Terapii Zajencowej",
  description: "Warsztat Terapii Zajencowej",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
