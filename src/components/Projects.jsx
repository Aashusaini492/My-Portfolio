import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'MockMate.AI',
    subtitle: 'Smart AI Interview System',
    description:
      'A full-stack AI-based interview simulation platform for technical and HR interview practice, with authentication, personalized sessions, performance tracking, and AI-based feedback.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Smart Campus RFID Attendance System',
    subtitle: 'Automated Attendance Management',
    description:
      'A smart campus attendance system using RFID technology, FastAPI backend, MongoDB database, and React frontend for automated attendance management.',
    stack: ['Python', 'FastAPI', 'React', 'MongoDB', 'MATLAB'],
  },
  {
    title: 'Terminal Based Portfolio Website',
    subtitle: 'Interactive Developer Portfolio',
    description:
      'An interactive terminal-style portfolio website with command-based navigation, responsive UI, and frontend interactions built using vanilla web technologies.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-purple-400/12 px-6 py-20 text-slate-100 md:px-12 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_32%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-purple-400">
            Selected Work
          </p>
          <h2 className="mb-5 text-4xl font-black tracking-tight text-white md:text-6xl">
            Projects Built Around Real Use Cases
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            These projects reflect my work across full-stack development, AI-assisted products, backend APIs,
            databases, and responsive frontend interfaces.
          </p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-[32px] border border-slate-800 bg-purple-400/12 p-8 shadow-[0_30px_100px_rgba(2,6,23,0.4)] backdrop-blur"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-purple-400">Project Dashboard</p>
                <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">Preview your work at a glance</h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-purple-400/12 px-4 py-2 text-sm font-semibold text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live Demo
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Projects</p>
                <p className="mt-3 text-3xl font-black text-white">3</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Tech stack</p>
                <p className="mt-3 text-3xl font-black text-white">18+</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">UI ratings</p>
                <p className="mt-3 text-3xl font-black text-white">4.8/5</p>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-800 bg-slate-950/70 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-purple-300/80">Featured project</p>
                  <h4 className="mt-3 text-2xl font-black text-white">MockMate.AI</h4>
                </div>
                <span className="rounded-full border border-purple-500/30 bg-purple-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-300">
                  AI System
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                A full-stack AI interview platform with personalized sessions, performance tracking, and automated feedback.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <span className="rounded-2xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">Node.js</span>
                <span className="rounded-2xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">MongoDB</span>
                <span className="rounded-2xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">AI UX</span>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
                className="group overflow-hidden rounded-[28px] border border-slate-800 bg-purple-400/12 p-6 shadow-[0_20px_45px_rgba(2,6,23,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:bg-purple-800/12"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-4xl font-black text-slate-500">0{index + 1}</div>
                  <div className="rounded-full border border-purple-500/20 bg-purple-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-300">
                    {project.stack.length} Tech
                  </div>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-purple-300">{project.subtitle}</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-[11px] font-semibold text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Live preview
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-purple-500" />
                    Dashboard
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
