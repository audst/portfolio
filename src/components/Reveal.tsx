"use client";

import { useEffect, useRef } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => e.isIntersecting && el.classList.add("visible"));
        }, { threshold: 0.1 });
        el.classList.add("reveal");
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return <div ref={ref}>{children}</div>
}