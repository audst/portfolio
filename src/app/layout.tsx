import type { Metadata } from "next";
import Link from "next/link";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "audrey tsung - portfolio",
  description: "systems, ml/ai, and notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg=[#0a0a0a] text-zinc-100 antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
          <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
            <Link href="/" className="font-mono text-teal-300">at.</Link>
            <ul className="flex gap-6 text-sm text-zinc-300">
              <li><Link className="hover:text-white" href="/about">about</Link></li>
              <li><Link className="hover:text-white" href="/work">work</Link></li>
              <li><Link className="hover:text-white" href="/notes">notes</Link></li>
              <li><Link className="hover:text-white" href="/now">now</Link></li>
              <li><Link className="hover:text-white" href="mailto:audreytsung2003@gmail.com">contact</Link></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="mt-24 border-t border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-zinc-400">
            © {new Date().getFullYear()} audrey tsung
          </div>
        </footer>
      </body>
    </html>
  );
}
