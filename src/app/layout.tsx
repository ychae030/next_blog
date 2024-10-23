import type { Metadata } from "next";
import "./globals.css";
import { gmarket_md, noto_sans_KR } from "./fonts/fonts";

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
        className={`${gmarket_md.variable} ${noto_sans_KR.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
