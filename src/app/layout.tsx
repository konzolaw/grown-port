import type { ReactNode } from "react";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>IRKE KONZOLO</title>
        <meta name="description" content="FullStack Developer & UX designer." />
      </head>
      <body className="0 text-gray-900">
        <Header />
        <main className="w-full ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}