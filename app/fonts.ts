import { Manrope, McLaren } from "next/font/google";

export const mcLaren = McLaren({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mclaren",
});

export const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
