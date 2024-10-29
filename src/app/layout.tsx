import type { Metadata } from "next";
import "@/styles/globals.css";
import { changwon_bold, gmarket_md } from "@/styles/fonts/fonts";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: {
    default: "채원 블로그",
    template: "채원 블로그 | %s",
  },
  description: "발전하는 프론트엔드 개발자",
  icons: {
    icon: "/favicon.ico", // `public` 폴더의 `favicon.ico` 경로
  },
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
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
