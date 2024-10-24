import type { Metadata } from "next";
import "@/styles/globals.css";
import { changwon_bold, gmarket_md } from "@/styles/fonts/fonts";
import Header from "@/components/common/Header";
import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gmarket_md.variable} ${changwon_bold.variable} antialiased`}
      >
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
