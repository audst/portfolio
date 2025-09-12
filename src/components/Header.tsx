"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(true);

    // init theme from localStorage/prefers-color-scheme
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const isDark = storedTheme ? storedTheme === "dark" : prefersDark;
            document.documentElement.classList.toggle("dark", isDark);
            setDark(isDark);
        }
    }, []);

    const toggleTheme = () => {
        const nextDark = !dark;
        setDark(nextDark);
        document.documentElement.classList.toggle("dark", nextDark);
        localStorage.setItem("theme", nextDark ? "dark" : "light");
    };

    return (
        <header id="header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-100/80 dark:bg-900/80 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto px-6">
                <nav className="flex justify-between items-center h-20">
                    <Link href="/#home" className="text-2xl font-bold text-slate-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                    AT.
                    </Link>

                    {/* desktop nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/#about" className="nav-link">about</Link>
                        <Link href="/#experience" className="nav-link">experience</Link>
                        <Link href="/#projects" className="nav-link">projects</Link>
                        <Link href="/#contact" className="nav-link">contact</Link>
                        <Link href="/resume" className="cta-button">resume</Link>

                        <button onClick={toggleTheme} className="text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 transition-colors" aria-label="toggle theme">
                            {dark ? (
                                // moon
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
                            ) : (
                                // sun
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              
                            )}
                        </button>
                    </div>

                    {/* mobile  button */}
                    <button className="md:hidden text-slate-900 dark:text-white" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
                    </button>
                </nav>
            </div>

            {/* mobile menu */}
            {open && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        <Link href="/#about" className="mobile-nav-link" onClick={() => setOpen(false)}>about</Link>
                        <Link href="/#experience" className="mobile-nav-link" onClick={() => setOpen(false)}>experience</Link>
                        <Link href="/#projects" className="mobile-nav-link" onClick={() => setOpen(false)}>projects</Link>
                        <Link href="/#contact" className="mobile-nav-link" onClick={() => setOpen(false)}>contact</Link>
                        <Link href="/resume" className="cta-button w-11/12 text-center mt-2" onClick={() => setOpen(false)}>resume</Link>
                        <button onClick={toggleTheme} className="text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 transition-colors mt-4" aria-label="Toggle theme (mobile)">
                            {/* reuse same icon logic */}
                            {dark ? "🌙" : "☀️"}
                        </button> 
                    </div>
                </div>
            )}
        </header>
    );
}