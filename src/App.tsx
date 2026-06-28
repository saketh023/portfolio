import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Experience, Project, Skill } from "./types";

// Vanta.js NET animated background
function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const win = window as any;
    if (vantaRef.current && win.VANTA) {
      vantaEffect.current = win.VANTA.NET({
        el: vantaRef.current,
        THREE: win.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xe8112d,          // primary red — matches brand
        backgroundColor: 0x0f172a, // background-dark
        points: 10,
        maxDistance: 22,
        spacing: 18,
        showDots: true,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 z-0"
    />
  );
}

// Top-view F1 car SVG component
function F1CarIcon() {
  return (
    <svg width="28" height="56" viewBox="0 0 28 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Front wing */}
      <rect x="4" y="1" width="20" height="4" rx="1" fill="#E8112D" />
      {/* Front nose */}
      <rect x="10" y="4" width="8" height="6" rx="1" fill="#E8112D" />
      {/* Main body */}
      <rect x="8" y="9" width="12" height="28" rx="3" fill="#E8112D" />
      {/* Cockpit */}
      <rect x="11" y="14" width="6" height="10" rx="2" fill="#0f172a" />
      {/* Engine cover */}
      <rect x="10" y="25" width="8" height="8" rx="2" fill="#c00f25" />
      {/* Rear wing */}
      <rect x="3" y="42" width="22" height="4" rx="1" fill="#E8112D" />
      {/* Rear body */}
      <rect x="9" y="37" width="10" height="7" rx="1" fill="#E8112D" />
      {/* Front-left tyre */}
      <rect x="1" y="8" width="6" height="9" rx="2" fill="#1e293b" />
      <rect x="2" y="9" width="4" height="7" rx="1" fill="#334155" />
      {/* Front-right tyre */}
      <rect x="21" y="8" width="6" height="9" rx="2" fill="#1e293b" />
      <rect x="22" y="9" width="4" height="7" rx="1" fill="#334155" />
      {/* Rear-left tyre */}
      <rect x="0" y="29" width="7" height="11" rx="2" fill="#1e293b" />
      <rect x="1" y="30" width="5" height="9" rx="1" fill="#334155" />
      {/* Rear-right tyre */}
      <rect x="21" y="29" width="7" height="11" rx="2" fill="#1e293b" />
      <rect x="22" y="30" width="5" height="9" rx="1" fill="#334155" />
      {/* Halo */}
      <rect x="12" y="14" width="4" height="2" rx="1" fill="#E8112D" />
    </svg>
  );
}

const skills: Skill[] = [
  {
    title: "Languages",
    items: "Java, Python, Go, SQL, JavaScript, TypeScript, C, C++",
    icon: "code",
    accent: "primary",
    image: "" // Removed as per FIX 1
  },
  {
    title: "Backend & Web",
    items: "Spring Boot, React.js, Node.js, REST APIs, JMS, Kafka, Red Hat AMQ",
    icon: "settings",
    accent: "yellow",
    image: ""
  },
  {
    title: "Databases",
    items: "Oracle, MS SQL, IBM Db2, MySQL, PostgreSQL, MongoDB, Redis",
    icon: "database",
    accent: "primary",
    image: ""
  },
  {
    title: "Cloud & DevOps",
    items: "AWS, GCP, Azure, Docker, Kubernetes, Jenkins, Git",
    icon: "cloud",
    accent: "yellow",
    image: ""
  }
];

const experiences: Experience[] = [
  {
    id: "1",
    role: "Software Engineer Intern",
    team: "NYC Administration for Children's Services (NYC ACS)",
    period: "June 2026 - Present",
    description: "Sole engineer upgrading and securing Spring Boot microservices for two municipal child welfare platforms — the CEO app (federal Title IV-E funding eligibility) and the MHCU app (tracking psychiatrically hospitalized foster children). Migrated 4 services to Spring Boot v4.1, resolved 19 Veracode vulnerabilities cutting security exposure by 27%, and automated AWS deployments via Jenkins CI/CD reducing release cycles by 40%.",
    active: true
  },
  {
    id: "2",
    role: "Software Engineer Intern",
    team: "NYC Administration for Children's Services (NYC ACS)",
    period: "June 2025 - August 2025",
    description: "Built performance and AI features for the ICS app (supporting ACS specialists on high-risk abuse cases) and CCS21 app (extended foster care for youth 21+). Introduced Redis caching cutting API response times by 30%, integrated Claude API with RAG pipelines for natural language case record retrieval, and set up Datadog monitoring reducing incident detection time by 60%.",
  },
  {
    id: "3",
    role: "Graduate Research Assistant",
    team: "Stony Brook University",
    period: "January 2025 - May 2025",
    description: "Eliminated geospatial query bottlenecks by replacing serial SQL operations with GPU-accelerated Python pipelines using cuSpatial and cuDF, thereby cutting runtimes from hours to under a minute across 720K spatial records. Built automated ETL workflows for bulk IBM Db2 ingestion, reducing analyst preprocessing time by 50%.",
  },
  {
    id: "4",
    role: "Software Engineer",
    team: "Fidelity National Information Services (FIS)",
    period: "February 2022 - June 2024",
    description: "Built production banking APIs for an enterprise core banking platform covering payment processing, auto-debit scheduling, transaction reversals, statement generation, and US compliance (SCRA, MLA). Refactored a credit card payment service reducing errors by 30% across 1M+ daily transactions, designed a Kafka event pipeline across 6 microservices for AML reporting, and cut nightly batch runtime by 6 minutes across 100K+ accounts.",
  }
];

const projects: Project[] = [
  {
    id: "01",
    title: "Distributed Transaction System",
    description: "Fault-tolerant system across 9 nodes and 9,000 sharded clients using Multi-Paxos and Two-Phase Commit in Go. Maintained 100% availability during 40% node failure scenarios.",
    tags: ["Go", "gRPC", "Multi-Paxos", "2PC"],
    icon: "hub",
    accent: "primary",
    githubUrl: "https://github.com/saketh023/multi-cluster-2pc-paxos"
  },
  {
    id: "02",
    title: "Connectify Social Media",
    description: "Full-stack application featuring infinite scrolling, drag-and-drop uploads, and secure OAuth2-based authentication. Optimized complex form handling using React Hook Form.",
    tags: ["React", "Node.js", "TypeScript", "OAuth2"],
    icon: "share",
    accent: "yellow",
    githubUrl: "https://github.com/saketh023/#"
  },
  {
    id: "03",
    title: "ClearPath Health Care",
    description: "LLaMa 3.1 powered medical AI agent integrated via REST APIs. Enhanced accessibility for vision-impaired users with multi-modal inputs and high-fidelity rendering.",
    tags: ["React", "TypeScript", "LLaMa 3.1", "AI"],
    icon: "medical_services",
    accent: "primary",
    githubUrl: "https://github.com/saketh023/clearpath"
  },
  {
    id: "04",
    title: "ClinBridge",
    description: "Real-time multilingual voice-to-voice translation tool for clinical settings, built with Gemini Live API. Bridges language gaps between patients and clinicians with live bilingual transcripts, document relay (medication labels, discharge sheets), and barge-in support — all in-browser with no stored data.",
    tags: ["Next.js", "FastAPI", "Gemini Live API", "WebSocket"],
    icon: "medical_services",
    accent: "yellow",
    githubUrl: "https://github.com/saikiranreddy2710/hackathon"
  }
];

function RacingHistorySection({ experiences }: { experiences: Experience[] }) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 });

  return (
    <section id="racinghistory" ref={sectionRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="material-symbols-outlined text-primary text-3xl">history</span>
        <h2 className="text-2xl font-bold uppercase tracking-widest">Racing History</h2>
        <div className="flex-1 h-px bg-primary/20" />
      </div>

      <div className="relative">
        {/* Animated F1 car riding the timeline */}
        <motion.div
          className="absolute -left-[14px] z-10 pointer-events-none drop-shadow-[0_0_8px_rgba(232,17,45,0.7)]"
          style={{ top: smoothY }}
        >
          <F1CarIcon />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l-2 border-primary/30"
            >
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${exp.active ? 'bg-primary' : 'bg-primary/30'}`} />
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{exp.team}</h3>
                    <p className="text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">engineering</span>
                      {exp.role}
                    </p>
                  </div>
                  <span className="bg-accent-yellow/10 text-accent-yellow px-4 py-1 rounded-full font-bold text-sm tracking-widest">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100 selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">sports_motorsports</span>
            <h2 className="text-xl font-bold tracking-tight uppercase">SV · Built for Speed</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["Technical Specs", "Racing History", "The Academy", "Performance Data"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <button onClick={() => window.open("https://drive.google.com/file/d/1y_P3Q4l-OhXv2-xsxCmPi-rsFs36cRXt/view?usp=sharing", "_blank")} className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-primary/20">
              Resume
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-80px)] flex items-center px-6 overflow-hidden">
          <VantaBackground />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent z-0" />

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="border-l-4 border-primary pl-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <p className="text-accent-yellow font-bold tracking-[0.3em] uppercase text-sm">
                  Chassis: MS Computer Science | Model: May 2026
                </p>
                <div className="h-px w-8 bg-primary/40" />
                <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest animate-pulse">
                  Status: Actively Seeking Full-Time Roles
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                Saketh <br /> Vadlamudi
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl font-medium leading-relaxed mb-10">
                High-Performance Software Engineering. Built for Speed, Optimized for Efficiency, Ready for Production.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => document.getElementById('performancedata')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded font-bold uppercase tracking-widest flex items-center gap-3 transition-all"
                >
                  <span className="material-symbols-outlined">speed</span>
                  View Projects
                </button>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/saketh023" target="_blank" rel="noopener noreferrer"
                    className="border-2 border-primary/50 hover:border-primary text-slate-300 hover:text-primary w-14 h-14 rounded flex items-center justify-center transition-all"
                    title="GitHub"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                  </a>
                  <a href="https://linkedin.com/in/saketh-vadlamudi" target="_blank" rel="noopener noreferrer"
                    className="border-2 border-primary/50 hover:border-primary text-slate-300 hover:text-primary w-14 h-14 rounded flex items-center justify-center transition-all"
                    title="LinkedIn"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href="mailto:saketh.nyc@gmail.com"
                    className="border-2 border-primary/50 hover:border-primary text-slate-300 hover:text-primary w-14 h-14 rounded flex items-center justify-center transition-all"
                    title="Email"
                  >
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Specs */}
        <section id="technicalspecs" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="material-symbols-outlined text-primary text-3xl">memory</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest">Technical Specs</h2>
            <div className="flex-1 h-px bg-primary/20" />
          </div>

          <div className="mb-16">
            <p className="text-slate-400 max-w-2xl text-lg">
              Core competencies powering the performance engine. Optimized components for maximum throughput.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#0d1117] border-l-[3px] border-l-[#E8112D] border-y border-r border-white/5 rounded-r-xl p-6 hover:border-primary/30 transition-all flex flex-col"
              >
                <div className="mb-4">
                  <span className="material-symbols-outlined text-3xl text-primary">{skill.icon}</span>
                </div>
                <h4 className="text-lg font-bold uppercase tracking-wide text-white mb-1">{skill.title}</h4>
                <div className="w-12 h-0.5 bg-primary mb-6" />

                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.items.split(', ').map(item => (
                    <span key={item} className="px-2 py-1 bg-background-dark border border-white/10 rounded text-[10px] font-mono font-bold uppercase tracking-widest text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Racing History */}
        <RacingHistorySection experiences={experiences} />

        {/* The Academy */}
        <section id="theacademy" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="material-symbols-outlined text-accent-yellow text-3xl">school</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest">The Academy</h2>
            <div className="flex-1 h-px bg-primary/20" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 via-background-dark to-transparent border border-primary/20 rounded-2xl p-10 relative overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[300px]">school</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-black uppercase tracking-tight mb-2">Master of Science in Computer Science</h3>
              <p className="text-2xl text-primary font-bold tracking-widest uppercase mb-12">Stony Brook University</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background-dark/50 p-8 rounded-xl border-l-4 border-accent-yellow">
                  <p className="text-slate-400 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-yellow">flag</span>
                    Graduation Lap
                  </p>
                  <p className="text-3xl font-black text-primary tracking-tighter">MAY 2026</p>
                </div>

                <div className="bg-background-dark/50 p-8 rounded-xl border-l-4 border-primary">
                  <p className="text-slate-400 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    Training Data
                  </p>
                  <p className="text-slate-300 mb-6 font-medium">
                    Distributed Systems, Database Systems, Recent Advances in AI/ML, Data Science, Data Structures &amp; Algorithms, Operating Systems, Computer Networks.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded font-bold">
                    <span className="material-symbols-outlined text-sm">military_tech</span>
                    GPA: 3.6 / 4.0
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Performance Data */}
        <section id="performancedata" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="material-symbols-outlined text-primary text-3xl">monitoring</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest">Performance Data</h2>
            <div className="flex-1 h-px bg-primary/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                className="bg-background-dark border border-primary/20 p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full flex items-start justify-end p-4 transition-colors ${project.accent === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent-yellow/10 group-hover:bg-accent-yellow/20'}`}>
                  <span className={`material-symbols-outlined ${project.accent === 'primary' ? 'text-primary' : 'text-accent-yellow'}`}>
                    {project.icon}
                  </span>
                </div>

                <p className={`text-xs font-bold tracking-[0.3em] uppercase mb-2 ${project.accent === 'primary' ? 'text-primary' : 'text-accent-yellow'}`}>
                  Project {project.id}
                </p>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{project.title}</h3>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-bold uppercase tracking-widest text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group/link"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/link:opacity-100 transition-opacity">Source</span>
                      <span className="material-symbols-outlined text-xl">link</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 flex flex-col items-center">
        <div className="py-16 flex flex-col items-center gap-6 w-full">
          <span className="material-symbols-outlined text-primary text-4xl">sports_motorsports</span>
          <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-xs">
            Saketh Vadlamudi © 2026 | Built for Speed
          </p>
        </div>
        {/* Checkered flag strip */}
        <div
          className="w-full h-8"
          style={{
            backgroundImage: `repeating-conic-gradient(#ffffff 0% 25%, #000000 0% 50%)`,
            backgroundSize: '32px 32px',
            opacity: 0.85,
          }}
        />
      </footer>
    </div>
  );
}