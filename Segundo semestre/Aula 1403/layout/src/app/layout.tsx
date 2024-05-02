import type { Metadata } from "next";
import "../../public/css/global.css";
import Header from "./Header/header";
import Footer from "./Footer/footer";


export const metadata: Metadata = {
  title: "Criando Layout",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <main>
          <Header/>
          {children}
          <Footer/>
        </main>
      </body>
      
    </html>
  );
}