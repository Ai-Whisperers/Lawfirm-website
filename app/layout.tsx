import type { Metadata } from "next";
import { Playfair_Display, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  weight: ['700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-serif-display',
  display: 'swap',
});

const publicSans = Public_Sans({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cardozo & Associates | Expert Legal Counsel",
  description: "Expert legal counsel with unwavering client commitment. Specializing in Corporate Law, Family Law, Litigation, and Estate Planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${publicSans.variable}`}>
      <body className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark antialiased">
        <div className="relative flex min-h-screen w-full flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
