"use client";

import ParticleBackground from "@/components/ParticleBackground";
import Typewriter from "@/components/Typewriter";
import { FadeIn } from "@/components/Animations";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Code2, Terminal, Database, 
  BookOpen, GraduationCap, MapPin, Briefcase, Server
} from "lucide-react";

const personalInfo = {
  firstName: "Azriel",
  lastName: "Fadlilah Priantsyah",
  role: "Software Engineer & Student",
  location: "Bandung, Indonesia",
  email: "azriel.fadlilah@mhs.itenas.ac.id",
  github: "https://github.com/Zriel9", 
  linkedin: "https://linkedin.com/in/azriel-fadlilah-30273b382", 
  about: `Saya adalah mahasiswa Informatika di ITENAS Bandung dengan latar belakang kuat di Rekayasa Perangkat Lunak (RPL). 
  Berdomisili di Bandung, saya memiliki spesialisasi dalam pengembangan Fullstack Web. 
  Saya sangat menguasai ekosistem PHP (Laravel) untuk Backend dan JavaScript modern untuk Frontend. 
  Memiliki pengalaman nyata dalam IT Business Automation dan selalu antusias memecahkan masalah kompleks melalui kode.`,
};

const skills = [
  { category: "Backend (Expert)", items: ["PHP", "Laravel", "Express.js", "REST API"] },
  { category: "Frontend", items: ["JavaScript (ES6+)", "Tailwind CSS", "Next.js", "Flutter"] },
  { category: "Database", items: ["MySQL", "MariaDB", "Database Design"] },
  { category: "Tools", items: ["Git", "Composer", "VS Code", "Vercel", "Postman"] },
];

const timeline = [
  {
    year: "2025 - Sekarang",
    title: "S1 Informatika",
    place: "Institut Teknologi Nasional (ITENAS) Bandung",
    desc: "Fokus pada Algoritma, Struktur Data, dan Pemrograman Web Lanjut."
  },
  {
    year: "2024", 
    title: "Internship: IT Business Automation",
    place: "PT. Akur Pratama",
    desc: "Mengembangkan solusi otomatisasi untuk kebutuhan bisnis perusahaan, mengelola data, dan optimasi sistem internal."
  },
  {
    year: "2022 - 2025",
    title: "Rekayasa Perangkat Lunak (RPL)",
    place: "SMK Negeri 2 Bandung",
    desc: "Mempelajari fundamental pemrograman, framework Laravel, Express, dan pengembangan aplikasi mobile dengan Flutter."
  }
];

const projects = [
  {
    title: "Business Automation System",
    desc: "Sistem otomatisasi bisnis berbasis web untuk meningkatkan efisiensi operasional (Studi kasus pengalaman PKL).",
    tags: ["PHP", "Laravel", "MySQL"],
    link: "#"
  },
  {
    title: "E-Commerce API",
    desc: "Backend RESTful API yang kuat menggunakan Laravel dengan autentikasi, manajemen produk, dan integrasi payment gateway.",
    tags: ["Laravel", "PHP Expert", "API"],
    link: "#"
  },
  {
    title: "Personal Portfolio",
    desc: "Portofolio modern yang dibangun dengan Next.js App Router, Tailwind CSS, dan animasi interaktif.",
    tags: ["Next.js", "React", "Tailwind"],
    link: "#"
  },
];

export default function Home() {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
  };

  return (
    <main className="min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <ParticleBackground />

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter text-cyan-400">Azriel.<span className="text-white">Dev</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-cyan-400 transition-colors cursor-pointer">About</a>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-cyan-400 transition-colors cursor-pointer">Skills</a>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="hover:text-cyan-400 transition-colors cursor-pointer">Projects</a>
          </div>
          <a href={`mailto:${personalInfo.email}`} className="px-4 py-2 text-xs font-bold border border-slate-700 rounded-full hover:bg-cyan-500 hover:text-black transition-all">
            Contact Me
          </a>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative z-10">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Open to Work / Freelance
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
            <span className="block text-cyan-400 mb-2">{personalInfo.firstName}</span>
            <span className="block text-4xl md:text-6xl text-slate-200">{personalInfo.lastName}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="text-xl md:text-3xl text-slate-400 mb-8 h-8 flex items-center justify-center gap-2">
             <span>I am a</span> <Typewriter />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="px-8 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer">
              Lihat Portfolio
            </a>
            <a href={personalInfo.github} target="_blank" className="px-8 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-2">
              <Github size={20} /> GitHub
            </a>
          </div>
        </FadeIn>
      </section>

      <section id="about" className="py-24 bg-slate-950/80 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          <div>
             <FadeIn>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <span className="text-cyan-400">01.</span> About Me
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6 whitespace-pre-line">
                {personalInfo.about}
              </p>
              
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="text-cyan-500" /> {personalInfo.location}
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <GraduationCap className="text-cyan-500" /> {personalInfo.role}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a href={personalInfo.github} className="p-3 bg-slate-900 rounded-lg hover:text-cyan-400 border border-slate-800 hover:border-cyan-500 transition-all"><Github size={20}/></a>
                  <a href={personalInfo.linkedin} className="p-3 bg-slate-900 rounded-lg hover:text-cyan-400 border border-slate-800 hover:border-cyan-500 transition-all"><Linkedin size={20}/></a>
                  <a href={`mailto:${personalInfo.email}`} className="p-3 bg-slate-900 rounded-lg hover:text-cyan-400 border border-slate-800 hover:border-cyan-500 transition-all"><Mail size={20}/></a>
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.2}>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <BookOpen className="text-cyan-400" size={20}/> Experience & Education
              </h3>
              <div className="relative border-l border-slate-800 ml-3 space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="ml-8 relative">
                    <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-500"></span>
                    <span className="text-xs font-mono text-cyan-400 block mb-1">{item.year}</span>
                    <h4 className="text-lg font-bold text-slate-100">{item.title}</h4>
                    <span className="text-sm text-slate-500 block mb-2 flex items-center gap-1">
                        {index === 1 ? <Briefcase size={12}/> : <GraduationCap size={14}/>} 
                        {item.place}
                    </span>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      <section id="skills" className="py-24 bg-slate-900/30 relative z-10 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-cyan-400">02.</span> Tech Stack
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/30 transition-all h-full">
                  <h3 className="text-lg font-bold mb-4 text-slate-200 border-b border-slate-800 pb-2 flex items-center gap-2">
                    {skillGroup.category.includes("Backend") ? <Server size={18} className="text-cyan-500"/> : null}
                    {skillGroup.category.includes("Frontend") ? <Code2 size={18} className="text-cyan-500"/> : null}
                    {skillGroup.category.includes("Database") ? <Database size={18} className="text-cyan-500"/> : null}
                    {skillGroup.category.includes("Tools") ? <Terminal size={18} className="text-cyan-500"/> : null}
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className={`text-sm px-3 py-1 bg-slate-900 rounded-md border border-slate-800 transition-all cursor-default ${skill === 'PHP' || skill === 'Laravel' ? 'text-cyan-300 border-cyan-900 bg-cyan-950/30' : 'text-slate-400 hover:text-cyan-400'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-slate-950/80 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <span className="text-cyan-400">03.</span> Featured Projects
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.1)] transition-all h-full flex flex-col"
                >
                  <div className="p-6 pb-0 flex justify-between items-start">
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
                      <Code2 size={24} className="text-cyan-400" />
                    </div>
                    <a href={project.link} className="text-slate-500 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>
                  </div>

                  <div className="px-6 pb-6 pt-0 border-t border-slate-800/50 mt-auto pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-cyan-300 bg-cyan-950/30 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4}>
             <div className="mt-12 text-center">
                <a href={personalInfo.github} className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors border-b border-transparent hover:border-cyan-400 pb-1">
                    Lihat project lainnya di GitHub <ExternalLink size={14}/>
                </a>
             </div>
          </FadeIn>
        </div>
      </section>

      <footer className="py-8 bg-slate-950 text-center text-slate-600 text-sm relative z-10 border-t border-slate-900">
        <p>Designed & Built by {personalInfo.firstName} {personalInfo.lastName}</p>
        <p className="mt-2 text-xs opacity-50">Next.js • Tailwind • Framer Motion</p>
      </footer>
    </main>
  );
}