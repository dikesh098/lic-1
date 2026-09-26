import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nilagautam.example.com"),
  title: {
    default: "Nila Gautam — LIC Insurance Advisor",
    template: "%s — Nila Gautam, LIC Insurance Advisor",
  },
  description:
    "Nila Gautam is an LIC Insurance Advisor (Agency Code 976/04741) offering personalized policy guidance, renewal assistance and dedicated customer support.",
  openGraph: {
    title: "Nila Gautam — LIC Insurance Advisor",
    description: "Personalized insurance guidance and dedicated policy support.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nila Gautam — LIC Insurance Advisor",
    description: "Personalized insurance guidance and dedicated policy support.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
