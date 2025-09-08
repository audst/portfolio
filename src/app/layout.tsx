import type { Metadata } from "next";

import { Geist, Geist_Mono, Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"]});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audrey Tsung - portfolio",
  description: "ml/ai · learning · data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className + " bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 antialiased selection:bg-cyan-500/30 selection:text-cyan-500"}>
        <Header />
        <main className="max-w-4xl mx-auto px-6 pt-20">{children}</main>
        <footer className="text-center py-6">
          <p className="font-mono text-sm text-slate-500 dark:text-slate-400">designed & built by Audrey Tsung</p>
        </footer>
      </body>
    </html>
  );
}
