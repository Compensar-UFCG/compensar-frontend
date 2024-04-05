import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Compensar",
  description: "plataforma de questões avaliadas com competências do pensamento computacional",
  verification: {
    google: "dQHgKypQ76owi1rp8tuZ9oOuTytNcGW-VVBt4DFfOg8"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
