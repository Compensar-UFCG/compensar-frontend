import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Compensar",
  description: "plataforma de questões avaliadas com competências do pensamento computacional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>Compensar</title>
        <meta property="og:title" content="plataforma de questões avaliadas com competências do pensamento computacional" key="title" />
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
