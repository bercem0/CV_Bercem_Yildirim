"use client";

import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Code,
  Globe,
  Laptop,
  Calendar,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "PHP (Symfony)",
    "Java",
    "MySQL",
    "Prisma",
    "Linux",
    "GitHub",
    "Bootstrap",
    "VS Code",
    "PHPStorm",
    "Scrum",
    "JSON",
    "AI (les)",
  ];

  const languages = [
    { name: "Turks", level: "100%", label: "Moedertaal" },
    { name: "Nederlands", level: "75%", label: "B2" },
    { name: "Engels", level: "40%", label: "A2" },
    { name: "Kurdish", level: "60%", label: "A2 - B1" },
  ];

  const projects = [
    {
      title: "SDG Dashboard",
      desc: "Interactief dashboard voor SDG-statistieken.",
      tech: "Next.js, React, TypeScript, Tailwind CSS, Chart.js, MySQL, Prisma",
      role: "Groepsproject / Full-stack",
    },
    {
      title: "Budget Buddy App",
      desc: "Webapp voor bijhouden van inkomsten en uitgaven.",
      tech: "PHP (Symfony), JavaScript, CSS",
      role: "Groepsproject / Full-stack",
    },
    {
      title: "B&T Flowers",
      desc: "Website voor bloemenverkoop ontwikkeld.",
      tech: "HTML, CSS, JavaScript, PHP",
      role: "Groepsproject / Full-stack",
    },
    {
      title: "The Maze Game",
      desc: "Java doolhofspel met obstakels en verzamelobjecten.",
      tech: "Java",
      role: "Individueel project",
    },
    {
      title: "Roodkapje Game",
      desc: "Interactieve game gebaseerd op het Roodkapje verhaal.",
      tech: "HTML, CSS, JavaScript",
      role: "Individueel project",
    },
    {
      title: "Build a Game: Boter, Kaas en Eieren",
      desc: "Eigen project binnen een groepsproject; Klassiek tic-tac-toe spel.",
      tech: "HTML, CSS, JavaScript",
      role: "Individueel project",
    },
    {
      title: "Hoger-Lager Spel",
      desc: "Spel waarbij spelers raden of een getal hoger of lager is.",
      tech: "HTML, CSS, JavaScript",
      role: "Groepsproject",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-4 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row border border-slate-200 bg-white">
        {/* LINKS PANEL */}
        <div className="md:w-1/3 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-10 flex flex-col">
          <div className="flex flex-col items-center mb-10">
            <div className="w-100 h-70 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/images/Profiel-foto.png"
                alt="Zekiye Berçem Yıldırım"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 mb-8 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} /> bercem.yildirimm@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} /> +31 6 43 46 79 68
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} /> Den Haag, Nederland
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} /> 302961230@student.rocmondriaan.nl
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4 mb-10 justify-center">
            <a href="https://linkedin.com/in/bercem-yildirim" target="_blank">
              <FaLinkedin size={22} />
            </a>
            <a href="https://github.com/bercem0" target="_blank">
              <FaGithub size={22} />
            </a>
          </div>

          {/* Onderwijs */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase mb-3 flex items-center gap-2">
              <GraduationCap size={14} /> Onderwijs
            </h2>

            <div className="text-xs space-y-2">
              <div>
                <strong>ROC Mondriaan - Software Developer</strong>
                <br />
                2024 - heden
              </div>

              <div>
                <strong>ROC Mondriaan - ISK (Taal Opleiding)</strong>
                <br />
                2022 - 2024
              </div>

              <div>
                <strong>Ozel Mehmet Salih Yasar Koleji - Diploma - HAVO Niveau</strong>
                <br />
                2016 - 2020
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase mb-3 flex items-center gap-2">
              <Code size={14} /> Skills
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] px-5 py-1 bg-white/10 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="text-sm font-bold uppercase mb-2 flex items-center gap-2">
              <Globe size={14} /> Talen
            </h2>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{lang.name}</span>
                    <span>{lang.label}</span>
                  </div>
                  <div className="h-2 w-full bg-white/20 rounded-full">
                    <div
                      className="h-full bg-blue-400 rounded-full"
                      style={{ width: lang.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RECHt PANEL */}
        <div className="md:w-2/3 p-10 space-y-10">
          <section>
            <h1 className="text-5xl font-bold mt-5">
              Zekiye Berçem Yıldırım
            </h1>
            <h3 className="text-1xl text-black mt-2 uppercase tracking-wider">
              Software Developer Student
            </h3>
            <br></br>
            <p className="text-sm text-slate-600">
              Ik ben een gemotiveerde en leergierige student Software Developer
              (MBO niveau 4) aan ROC Mondriaan. Ik ben geïnteresseerd in
              webontwikkeling en werk graag aan projecten waarin ik mijn
              technische vaardigheden kan verbeteren. Momenteel ben ik op zoek
              naar een stageplek waar ik praktijkervaring kan opdoen.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Calendar size={18} /> Stage
            </h2>
            <div className="p-5 bg-slate-50 rounded-xl border">
              <p className="text-sm">
                <strong>Periode:</strong> 7 september 2026 - 10 april 2027
              </p>
              <p className="text-sm">
                <strong>Duur:</strong> ±1200 uur (8 uur per dag - 5 dagen per week - 40 uur per week)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Laptop size={18} /> Projecten
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div
                  key={proj.title}
                  className="p-4 bg-slate-50 rounded-xl border"
                >
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold">{proj.title}</h3>
                    <span className="text-[10px] bg-blue-200 text-bold text-blue-900 px-2 py-1 rounded-full">
                      {proj.role}
                    </span>
                  </div>
                  <p className="text-sm text-slate-800 mb-1">{proj.desc}</p>
                  <p className="text-[10px] font-mono text-slate-600">
                    {proj.tech}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
