import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./globals.css";
import { BookMeetingModal } from "@/components/modal/book-meeting-modal";
import { Analytics } from "@vercel/analytics/next";
import { MantineProvider } from "@mantine/core";
import { manrope, mcLaren } from "./fonts";

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
      <body className={`${mcLaren.variable} ${manrope.variable} antialiased`}>
        <MantineProvider>
          <BookMeetingModal />
          {children}
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
