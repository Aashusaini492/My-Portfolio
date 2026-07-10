import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  'Career Essentials in Generative AI - Microsoft, LinkedIn & AWS',
  'Responsive Web Design Certification - freeCodeCamp',
  'SQL Basic and Python Basic - HackerRank',
  'Python, DBMS, and SQL Certifications - Infosys Springboard',
];

const linkedInCertifications = [
  {
    title: 'React.js Essential Training',
    issuer: 'LinkedIn Learning',
    year: '2024',
    url: 'https://www.linkedin.com',
  },
  {
    title: 'Advanced JavaScript Techniques',
    issuer: 'LinkedIn Learning',
    year: '2024',
    url: 'https://www.linkedin.com',
  },
];

const achievements = [
  'Completed Full-Stack Web Development internship at Virtual Door IT Services LLP.',
  'Built multiple full-stack and AI-based projects aligned with software engineering roles.',
  'Strong understanding of Data Structures, Algorithms, and Object-Oriented Programming.',
  'Actively practicing coding and problem solving for technical interviews and placements.',
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-white text-black py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-purple-500 text-xs font-black uppercase tracking-[0.25em] mb-4">
            Learning Proof
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Certifications & Achievements
          </h2>
          <p className="text-black/60 text-sm md:text-base leading-relaxed max-w-md">
            Alongside academics and projects, I keep improving through certifications,
            practical development work, and continuous interview preparation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="border border-black/10 rounded-2xl p-6 bg-[#f7f7f7]"
          >
            <h3 className="text-xl font-black mb-5">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((item) => (
                <div key={item} className="flex gap-3 text-sm font-semibold text-black/70">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-900/12" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
            className="grid gap-4 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-purple-500">LinkedIn Verified</p>
                <p className="mt-2 text-lg font-black text-black">Certificate previews</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <span className="text-sm font-black">in</span>
              </div>
            </div>
            <div className="space-y-4">
              {linkedInCertifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-black/10 bg-[#f9f9fb] p-4 transition hover:-translate-y-1 hover:border-purple-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-black">{cert.title}</p>
                      <p className="mt-1 text-xs text-black/60">{cert.issuer} · {cert.year}</p>
                    </div>
                    <div className="rounded-full border border-black/10 bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/70">
                      View
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="border border-black/10 rounded-2xl p-6 bg-purple-900/99 text-white"
          >
            <h3 className="text-xl font-black mb-5">Highlights</h3>
            <div className="space-y-3">
              {achievements.map((item) => (
                <div key={item} className="flex gap-3 text-sm font-semibold text-white/90">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
