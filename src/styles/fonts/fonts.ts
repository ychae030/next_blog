import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const noto_sans_KR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

export const gmarket_md = localFont({
  src: "./GmarketSansMedium.woff",
  variable: "--font-gmarket-md",
  display: "swap",
  weight: "500",
});

export const changwon_bold = localFont({
  src: "./ChangwonDangamAsac-Bold.woff",
  variable: "--font-changwon-bold",
  display: "swap",
});
