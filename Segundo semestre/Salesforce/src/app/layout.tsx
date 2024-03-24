import type { Metadata } from "next";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import "../../public/css/global.css";


export const metadata: Metadata = {
  title: "Salesforce",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
      </head>

      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
