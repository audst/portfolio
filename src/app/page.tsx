// app/page.tsx

import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col justify-center py-20">
        <Reveal>
          <h1 className="text-lg md:text-xl font-mono text-cyan-500 dark:text-cyan-400 mb-4">Hi, my name is</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100">Audrey Tsung.</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-slate-600 dark:text-slate-400 mt-2">I explore ML theory, apply it to data, and build systems that scale.</h3>
          <p className="mt-6 max-w-xl text-lg">
            I&apos;m a computer science student specializing in AI and data science. I&apos;m passionate about building exceptional digital experiences and applying my skills to create accessible, human-centered products.
          </p>
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <Reveal>
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-4 text-lg">
              <p>
                Hello! I&apos;m Audrey, a computer science student at UBC interested in how ideas become practice, where the theory of machine learning starts to take shape in real data and systems.
              </p>

              <p>
                Through roles in cloud development, research support, and AI evaluation, I&apos;ve begun tracing how different perspectives connect, and I&apos;m curious about the new tools and understanding that can grow from that overlap.
              </p>

              {/* My current projects explore applied ML on climate data, sustainable computing through GPU energy efficiency analysis, and self-directed research in statistical learning theory. Alongside these, I enjoy polishing web and app deployments to make research outputs accessible and usable. */}

              <p>Here are a few technologies I&apos;ve been working with recently:</p>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm">
                {["Next.js","Tailwind CSS","TypeScript","PyTorch","AWS (Lambda, S3)","Python (ML/DL)"].map((t)=>(
                  <li key={t} className="flex items-center space-x-2"><span className="text-cyan-500 dark:text-cyan-400">▹</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 relative group">
              <div className="relative rounded-lg overflow-hidden">
                <img src="https://placehold.co/400x400/06b6d4/white?text=AT." alt="AT." className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-cyan-500/30 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
              </div>
              <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-lg -translate-x-3 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 -z-10"></div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}