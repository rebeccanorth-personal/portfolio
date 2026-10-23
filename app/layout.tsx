import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Aura from "@/components/Aura";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rebeccanorth.me"),
  title: "Rebecca North — Growth PM, Designer, Builder",
  description:
    "UX PM who thinks like a designer. Six years on growth at Microsoft. Cornell Information Science.",
  openGraph: {
    title: "Rebecca North",
    description: "Growth PM. Designer. Builder.",
    url: "https://rebeccanorth.me",
    siteName: "Rebecca North",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebecca North",
    description: "Growth PM. Designer. Builder.",
    images: ["/opengraph-image"],
  },
};

// Runs before paint so the saved or system theme never flashes the wrong colors
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Aura />
        <SiteNav />
        {children}
        <SiteFooter />
        <ContactForm />
      </body>
    </html>
  );
}
