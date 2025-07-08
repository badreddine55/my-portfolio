"use client"

import { useEffect, useState, useRef } from "react"
import {
  Download,
  MapPin,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Globe,
  Award,
  ExternalLink,
} from "lucide-react"

export default function AboutSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const education = [

    {
      degree: "Systems Programming",
      institution: "1337 Coding School",
      year: "Currently Studying",
      description: "Advanced programming concepts in C and C++",
      type: "ongoing",
    },
    {
      degree: "Digital Development (Full Stack Web Development)",
      institution: "Institut Spécialisé de Technologie Appliquée, Ben Guerir",
      year: "2025",
      description: "Specialized technical certificate in Full Stack Web Development",
      type: "certificate",
    },
    {
      degree: "Baccalauréat in Physical Sciences",
      institution: "Lycée Qualifiant Essalam, Ben Guerir",
      year: "2022",
      description: "High school diploma with focus on physical sciences",
      type: "high-school",
    },
  ]

  const experiences = [

    {
      title: "Full Stack Developer Intern",
      company: "OCBG",
      period: "March 2024 - June 2024",
      location: "Ben Guerir",
      type: "internship",
      description:
        "La phase initiale du stage a consisté à analyser les besoins en collaborant étroitement avec les parties prenantes, notamment les gestionnaires et les formateurs, pour comprendre les lacunes de leur processus manuel de planification des salles et des groupes. Développement d'un système de gestion des stocks et des opérations pour Ben Guerir utilisant Laravel et MySQL.",
      technologies: ["Laravel", "MySQL", "System Architecture", "Database Management"],
      hasReport: true,
      reportName: "OCBG_Internship_Report.pdf",
    },
    {
      title: "Full Stack Developer Intern",
      company: "OCP Group",
      period: "Mar 2024 - Mar 2024 · 1 month",
      location: "Ben Guerir, Marrakesh-Safi, Morocco",
      type: "internship",
      description:
        "Completed a one-month internship focusing on the development of three key projects: stock management and operations management for Ben Guerir, utilizing Laravel and MySQL. Designed and optimized system diagrams to ensure efficient project implementation and scalability.",
      technologies: ["Laravel", "MySQL", "System Design", "Full Stack Development"],
      hasReport: true,
      reportName: "OCP_Internship_Report.pdf",
    },
        {
      title: "Web Platform Developer",
      company: "NightPharm",
      period: "Feb 2025",
      location: "Ben Guerir",
      type: "current",
      description:
        "Conception de NightPharm, une plateforme web visant à améliorer l'accessibilité aux soins de santé nocturnes et en cas d'urgence. Mise en œuvre de fonctionnalités clés, notamment la cartographie des pharmacies en temps réel, les consultations infirmières 24h/24 et 7j/7 et la gestion simplifiée des livraisons.",
      technologies: ["React.js", "Node.js", "MongoDB", "Real-time mapping"],
      hasReport: false,
    },
  ]



  const languages = [
    { name: "Arabic", level: "Native", flag: "🇲🇦" },
    { name: "French", level: "Intermediate", flag: "🇫🇷" },
    { name: "English", level: "Intermediate", flag: "🇺🇸" },
  ]

  const handleDownloadReport = (reportName) => {
    const link = document.createElement("a")
    link.href = `/assets/reports/${reportName}`
    link.download = reportName
    link.click()
  }

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden" style={{ background: "black" }}>
      {/* Crosshatch/Mesh Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "10px 10px",
        }}
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.01) 0.5px, transparent 0.5px),
            linear-gradient(-45deg, rgba(255,255,255,0.01) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "5px 5px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
              <span className="text-sm text-gray-400 font-mono">// About Me</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
              Get to Know Me
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Full Stack Developer passionate about creating innovative web solutions
            </p>
          </div>

          {/* Personal Info Card */}
          <div
            className={`mb-16 transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 rounded-lg">
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Badr Eddine Diyaf</h3>
                      <p className="text-xl text-teal-400 mb-4">Full Stack Developer</p>
                      <p className="text-gray-300 leading-relaxed">
                        Développeur web passionné, spécialisé en développement full stack et conception UI/UX, avec une
                        forte aptitude à créer des applications responsives, optimisées et centrées sur l'utilisateur.
                        Polyvalent et innovant, je résous des problèmes techniques complexes et livre des projets de
                        haute qualité dans les délais.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <Mail className="w-5 h-5 text-teal-400" />
                        <span>beddine330@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Phone className="w-5 h-5 text-teal-400" />
                        <span>+212 701 708 363</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <MapPin className="w-5 h-5 text-teal-400" />
                        <span>Ben Guerir, Morocco</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <ExternalLink className="w-5 h-5 text-teal-400" />
                        <a
                          href="https://github.com/badreddine55"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-teal-400 transition-colors"
                        >
                          github.com/badreddine55
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Globe className="w-5 h-5 text-teal-400" />
                      Languages
                    </h4>
                    <div className="space-y-3">
                      {languages.map((lang, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/10"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{lang.flag}</span>
                            <span className="text-white font-medium">{lang.name}</span>
                          </div>
                          <span className="px-2 py-1 text-xs rounded border border-teal-400/30 text-teal-400">
                            {lang.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Education */}
            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-teal-400" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 group rounded-lg"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors">
                            {edu.degree}
                          </h4>
                          <p className="text-teal-400 font-medium">{edu.institution}</p>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs rounded border ${
                            edu.type === "ongoing"
                              ? "border-green-400/30 text-green-400"
                              : edu.type === "diploma"
                                ? "border-blue-400/30 text-blue-400"
                                : "border-gray-400/30 text-gray-400"
                          }`}
                        >
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div
              className={`transform transition-all duration-1000 delay-600 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-teal-400" />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 group rounded-lg"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors">
                            {exp.title}
                          </h4>
                          <p className="text-teal-400 font-medium">{exp.company}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                            <span>•</span>
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs rounded border ${
                            exp.type === "current"
                              ? "border-green-400/30 text-green-400"
                              : "border-blue-400/30 text-blue-400"
                          }`}
                        >
                          {exp.type === "current" ? "Current" : "Internship"}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 text-xs rounded bg-white/5 text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {exp.hasReport && (
                        <button
                          onClick={() => handleDownloadReport(exp.reportName)}
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded border border-teal-500/30 text-teal-400 bg-transparent hover:bg-teal-500/10 hover:border-teal-500 transition-all duration-300"
                        >
                          <Download className="w-4 h-4" />
                          Download Report
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>



          {/* Professional Skills */}
          <div
            className={`mt-16 transform transition-all duration-1000 delay-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-teal-400" />
              <h3 className="text-2xl font-bold text-white">Professional Skills</h3>
            </div>

            <div className="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 rounded-lg">
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Développement front-end/back-end",
                    "Prototypage et wireframing",
                    "Conception et gestion de bases de données",
                    "Conception UI/UX",
                    "Développement et intégration d'API (REST/GraphQL)",
                    "Marketing digital",
                    "Gestion de contenu",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/10 hover:border-teal-400/30 transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:animate-pulse"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
