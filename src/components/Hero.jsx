import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const heroImage = '/aashu-hero.jpg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section
      id="home"
     className="relative min-h-screen overflow-hidden bg-black text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '82% center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
<div className="absolute inset-0 bg-black/20" />
{/* Left Gradient for Text */}
<div className="absolute inset-y-0 left-0 w-[48%] bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
{/* Purple Glow */}
<div className="absolute left-[-180px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-purple-600/10 blur-[180px]" />
{/* Blue Glow */}
<div className="absolute bottom-0 left-[8%] h-[320px] w-[320px] rounded-full bg-indigo-500/15 blur-[120px]" />

{/* Subtle Grid */}
<div
  className="absolute inset-0 opacity-[0.02]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(168,85,247,0.35) 1px, transparent 1px),
      linear-gradient(90deg, rgba(168,85,247,0.35) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>

{/* Top Gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

{/* Decorative Lines */}
<div className="absolute left-12 top-24 h-56 w-px bg-purple-500/50" />
{/* <div className="absolute right-16 bottom-20 h-72 w-px bg-purple-500/40" /> */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-12 pt-28 md:px-12 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-0">
        <div className="max-w-2xl">
          <div
            data-aos="fade-up"
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-slate-200 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Full Stack Developer
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="90"
            className="max-w-3xl text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Aashu
            <span className="block text-transparent [-webkit-text-stroke:1.4px_rgba(248,250,252,0.92)]">
              Saini
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="180"
            className="mt-7 max-w-xl text-base font-medium leading-8 text-slate-300 md:text-lg"
          >
            I craft fast, clean, and scalable web experiences with React, Node.js,
            DSA fundamentals, and a sharp eye for product-level detail.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="270"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-purple-600 px-7 text-sm font-black text-white shadow-[0_18px_45px_rgba(139,92,246,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-purple-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-700 bg-white/10 px-7 text-sm font-black text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-purple-400 hover:bg-white/15"
            >
              Let's Talk
            </a>
            <a
              href="/aashu-saini-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-6 text-sm font-black text-slate-200 transition duration-300 hover:border-purple-400 hover:bg-slate-900/80 hover:text-white"
            >
              Resume
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="360"
            className="mt-12 grid max-w-lg grid-cols-3 rounded-3xl border border-slate-700 bg-slate-900/70 py-5 shadow-sm"
          >
            <div className="px-5">
              <p className="text-2xl font-black text-white md:text-3xl">MERN</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Stack</p>
            </div>
            <div className="border-x border-slate-700 px-5">
              <p className="text-2xl font-black text-white md:text-3xl">DSA</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Logic</p>
            </div>
            <div className="pl-5">
              <p className="text-2xl font-black text-white md:text-3xl">AI</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Solving</p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-out"
          data-aos-delay="220"
          className="relative mt-12 flex min-h-[430px] items-center justify-center lg:mt-0 lg:min-h-[650px]"
        >
          <div className="relative z-10 w-full max-w-2xl px-6 py-10 sm:px-8 lg:px-0">
            <div className="absolute -right-24 top-1/4 h-[70%] w-[70%] rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="absolute bottom-12 left-0 z-20 hidden rounded-2xl border border-slate-700 bg-slate-900/80 px-5 py-4 shadow-lg backdrop-blur-md sm:block">
            <p className="text-sm font-black text-white">Code. Motion. Intelligence.</p>
            <p className="mt-1 text-xs font-semibold text-slate-300">Modern portfolio experience</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 text-slate-300 transition hover:text-white md:block"
      >
        <svg className="h-7 w-7 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0 6-6m-6 6-6-6" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
