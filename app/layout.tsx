import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./globals.css";
import { BookMeetingModal } from "@/components/modal/book-meeting-modal";
import { Analytics } from "@vercel/analytics/next";
import { McLaren, Manrope } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { AppLayout } from "@/components/app-layout";

export const mcLaren = McLaren({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Luminaries",
  description: "Virtual learning at your child's convenience",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mcLaren.className} antialiased`}>
        <MantineProvider>
          <BookMeetingModal />
          {children}
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
