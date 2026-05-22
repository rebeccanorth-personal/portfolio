import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import CursorGlow from "@/components/CursorGlow";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rebecca North — Growth PM & Designer",
  description:
    "Growth Product Manager at Microsoft. Cornell Information Science. Building products people actually want to use.",
  openGraph: {
    title: "Rebecca North",
    description: "Growth PM. Designer. Builder.",
    url: "https://rebeccanorth.me",
    siteName: "Rebecca North",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${geistMono.variable}`}>
      <body className="min-h-screen">
        <CursorGlow />
        <Nav />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
