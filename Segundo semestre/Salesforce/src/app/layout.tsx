import type { Metadata } from "next";
import Header from "./Header/header";

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
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
