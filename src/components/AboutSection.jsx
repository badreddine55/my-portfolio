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
        "The initial phase of the internship consisted of analyzing needs by collaborating closely with stakeholders, including managers and trainers, to understand the shortcomings of their manual process for planning rooms and groups. Development of a stock and operations management system for Ben Guerir using Laravel and MySQL.",
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
        "Design of NightPharm, a web platform aimed at improving accessibility to nighttime and emergency healthcare. Implementation of key features, including real-time pharmacy mapping, 24/7 nursing consultations, and simplified delivery management.",
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
    <section ref={sectionRef} className="relative my-16 sm:my-24 lg:my-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
              <span className="text-xs sm:text-sm text-gray-300 font-mono whitespace-nowrap">// About Me</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent mb-3 sm:mb-4 drop-shadow-lg">
              Get to Know Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md px-4">
              Full Stack Developer passionate about creating innovative web solutions
            </p>
          </div>

          {/* Personal Info Card */}
          <div
            className={`mb-12 sm:mb-16 transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-500 rounded-lg shadow-2xl">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                  {/* Main Info */}
                  <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-md">
                        Badr Eddine Diyaf
                      </h3>
                      <p className="text-lg sm:text-xl text-teal-300 mb-3 sm:mb-4 drop-shadow-sm">
                        Full Stack Developer
                      </p>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed drop-shadow-sm">
                        Passionate web developer, specialized in full stack development and UI/UX design, with a strong ability to create responsive, optimized, and user-centered applications. Versatile and innovative, I solve complex technical problems and deliver high-quality projects on time.
                      </p>
                    </div>

                    {/* Contact Info */}
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-200 text-sm sm:text-base">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0" />
                        <span className="break-all">beddine330@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-200 text-sm sm:text-base">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0" />
                        <span>+212 701 708 363</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-200 text-sm sm:text-base">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0" />
                        <span>Ben Guerir, Morocco</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-200 text-sm sm:text-base">
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0" />
                        <a
                          href="https://github.com/badreddine55"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-teal-300 transition-colors break-all"
                        >
                          github.com/badreddine55
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="space-y-4 lg:mt-0 mt-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2 drop-shadow-sm">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300" />
                      Languages
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {languages.map((lang, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 sm:p-3 rounded-lg backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-xl sm:text-2xl">{lang.flag}</span>
                            <span className="text-white font-medium text-sm sm:text-base">{lang.name}</span>
                          </div>
                          <span className="px-2 py-1 text-xs rounded border border-teal-300/40 text-teal-300 bg-teal-300/10">
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
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Education */}
            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-teal-300" />
                <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Education</h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-500 group rounded-lg shadow-xl"
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-teal-300 transition-colors drop-shadow-sm">
                            {edu.degree}
                          </h4>
                          <p className="text-sm sm:text-base text-teal-300 font-medium drop-shadow-sm">
                            {edu.institution}
                          </p>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs rounded border backdrop-blur-sm self-start ${
                            edu.type === "ongoing"
                              ? "border-green-400/40 text-green-300 bg-green-400/10"
                              : edu.type === "diploma"
                                ? "border-blue-400/40 text-blue-300 bg-blue-400/10"
                                : "border-gray-400/40 text-gray-300 bg-gray-400/10"
                          }`}
                        >
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">{edu.description}</p>
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
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-teal-300" />
                <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Experience</h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-500 group rounded-lg shadow-xl"
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-teal-300 transition-colors drop-shadow-sm">
                            {exp.title}
                          </h4>
                          <p className="text-sm sm:text-base text-teal-300 font-medium drop-shadow-sm">{exp.company}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-200 mt-1">
                            <div className="flex items-center gap-1 sm:gap-2">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center gap-1 sm:gap-2">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs rounded border backdrop-blur-sm self-start ${
                            exp.type === "current"
                              ? "border-green-400/40 text-green-300 bg-green-400/10"
                              : "border-blue-400/40 text-blue-300 bg-blue-400/10"
                          }`}
                        >
                          {exp.type === "current" ? "Current" : "Internship"}
                        </span>
                      </div>
                      <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs rounded bg-white/10 backdrop-blur-sm text-gray-200 border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {exp.hasReport && (
                        <button
                          onClick={() => handleDownloadReport(exp.reportName)}
                          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded border border-teal-300/40 text-teal-300 bg-teal-300/10 backdrop-blur-sm hover:bg-teal-300/20 hover:border-teal-300/60 transition-all duration-300"
                        >
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
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
            className={`mt-12 sm:mt-16 transform transition-all duration-1000 delay-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-teal-300" />
              <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Professional Skills</h3>
            </div>
            <div className="backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-500 rounded-lg shadow-2xl">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                  {[
                    "Front-end/back-end development",
                    "Prototyping and wireframing",
                    "Database design and management",
                    "UI/UX design",
                    "API development and integration (REST/GraphQL)",
                    "Digital marketing",
                    "Content management",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg backdrop-blur-sm border border-white/20 hover:border-teal-300/40 transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 bg-teal-300 rounded-full group-hover:animate-pulse flex-shrink-0"></div>
                      <span className="text-gray-200 group-hover:text-white transition-colors text-xs sm:text-sm">
                        {skill}
                      </span>
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