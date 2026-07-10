import React from 'react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#140d20] px-6 py-16 text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.12),transparent_40%)]"></div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-14">
        <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-purple-600">Portfolio</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Let’s build something bold.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-purple-700"
          >
            Start a Conversation
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-2 text-sm text-slate-700">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-slate-400">About</p>
            <p>Aspiring Software Engineer</p>
            <p>Full-Stack Web Development</p>
            <p>DSA, OOP, REST APIs</p>
            <p className="pt-2 text-slate-500">B.Tech CSE | CGPA 8.45</p>
          </div>

          <div className="space-y-2 text-sm text-slate-700 md:text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-slate-400">Quick Links</p>
            <a href="#projects" className="block transition hover:text-slate-950">View Projects</a>
            <a href="/aashu-saini-resume.pdf" target="_blank" rel="noreferrer" className="block transition hover:text-slate-950">Resume</a>
            <a href="#about" className="block transition hover:text-slate-950">About Me</a>
          </div>

          <div className="space-y-2 text-sm text-slate-700 md:text-right">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-slate-400">Contact</p>
            <a href="mailto:aashusaini19222277@gmail.com" className="block transition hover:text-slate-950">aashusaini19222277@gmail.com</a>
            <a href="tel:+918394865254" className="block transition hover:text-slate-950">+91 8394865254</a>
            <a href="https://github.com/Aashusaini492" target="_blank" rel="noreferrer" className="block transition hover:text-slate-950">GitHub</a>
            <a href="https://www.linkedin.com/in/aashu-saini-8776092b1" target="_blank" rel="noreferrer" className="block transition hover:text-slate-950">LinkedIn</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t  pt-8 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Aashu Saini</p>
          <p>Built with React · Designed for impact</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
