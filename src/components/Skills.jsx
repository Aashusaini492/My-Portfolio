import React from 'react';
import { motion } from 'framer-motion';
 
const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      skills: ['C++', 'Python', 'JavaScript', 'Java'],
    },
    {
      category: 'Web Development',
      skills: ['HTML5', 'CSS3', 'React.js Basics', 'Node.js', 'Express.js', 'REST APIs', 'Full-Stack Development'],
    },
    {
      category: 'Database & CS Core',
      skills: ['MongoDB', 'MySQL', 'Data Structures', 'Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'FastAPI', 'MATLAB', 'Problem Solving'],
    },
  ];
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };
 
  const skillPillVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.08,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };
 
  const SkillCard = ({ category, skills, index }) => {
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{
          y: -8,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        }}
        className="group relative bg-white border border-black/5 rounded-3xl p-6 h-fit shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500"
      >
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
 {/* Purple Glow Top Left */}
<div className="absolute -top-32 -left-32 w-80 h-80 bg-violet-500/10 blur-[140px] rounded-full pointer-events-none" />

{/* Purple Glow Bottom Right */}
<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 blur-[160px] rounded-full pointer-events-none" />
        {/* Card content */}
        <div className="relative z-10">
          <h3 className="text-sm font-semibold text-black mb-4 tracking-tight">
            {category}
          </h3>
 
          {/* Skills pills container */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <motion.button
                key={idx}
                variants={skillPillVariants}
                initial="initial"
                whileHover="hover"
                className="px-3 py-1.5 text-xs font-medium text-black bg-black/3 hover:bg-purple-500/10 border border-black/5 hover:border-purple-500/20 rounded-full transition-all duration-300 cursor-default select-none hover:text-purple-500"
              >
                {skill}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };
 
  return (
    <section id="skills" className="relative w-full bg-white py-16 md:py-20 overflow-hidden">
      {/* Subtle grid pattern background */}
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>
      
 
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        {/* Horizontal Line */}
<div className="hidden md:block absolute top-1/2 left-[25%] w-[50%] h-[2px] bg-gradient-to-r from-violet-700 via-violet-500 to-violet-700 -translate-y-1/2 z-0" />

{/* Vertical Line */}
<div className="hidden md:block absolute left-1/2 top-[22%] h-[56%] w-[2px] bg-gradient-to-b from-violet-700 via-violet-500 to-violet-700 -translate-x-1/2 z-0" />

{/* Center Dot */}
<div className="hidden md:block absolute left-1/2 top-1/2 w-5 h-5 rounded-full bg-violet-600 shadow-[0_0_25px_#7C3AED] -translate-x-1/2 -translate-y-1/2 z-10" />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10 md:mb-12"
        >
          <div className="mb-3">
            <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 bg-black/2 border border-black/5 rounded-full">
              Technical Stack
            </span>
          </div>
 
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2 tracking-tight">
            Technologies I Work With
          </h2>
 
          <p className="text-sm text-black/60 font-normal">
            A practical stack for software engineering, full-stack development, databases, and technical interview preparation.
          </p>
        </motion.div>
        <svg
  className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block"
  viewBox="0 0 1200 800"
  preserveAspectRatio="none"
>
  <path
    d="M250 120
       C500 120,500 280,750 280
       S1000 440,750 520
       S500 680,250 680"
    fill="none"
    stroke="#7C3AED"
    strokeWidth="4"
    strokeLinecap="round"
    strokeDasharray="12 10"
    opacity="0.9"
    
  />
  

  <path
    d="M250 120
       C500 120,500 280,750 280
       S1000 440,750 520
       S500 680,250 680"
    fill="none"
    stroke="#A855F7"
    strokeWidth="12"
    opacity="0.15"
    filter="url(#glow)"
  />

  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
</svg><div className="absolute top-[170px] left-[48%] w-4 h-4 bg-violet-500 rounded-full shadow-[0_0_25px_#A855F7]" />

<div className="absolute top-[370px] left-[60%] w-4 h-4 bg-violet-500 rounded-full shadow-[0_0_25px_#A855F7]" />

<div className="absolute top-[560px] left-[38%] w-4 h-4 bg-violet-500 rounded-full shadow-[0_0_25px_#A855F7]" />
 
        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {skillsData.map((item, idx) => (
            <SkillCard
              key={idx}
              category={item.category}
              skills={item.skills}
              index={idx}
            />
          ))}
        </motion.div>
      </div>
 
      {/* Floating accent elements - very subtle */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl pointer-events-none"
      />
 
      <motion.div
        animate={{
          y: [0, -8, 0],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-5 w-40 h-40 bg-purple-500 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};
 
export default Skills;
 
