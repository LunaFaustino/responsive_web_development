import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de Produtos",
  description: "Página com a lista de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
