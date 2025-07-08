"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Code, Server, Wrench } from "lucide-react"

export default function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      borderGradient: "from-blue-500 via-cyan-500 to-teal-500",
      iconColor: "text-cyan-400",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "PHP", "Laravel", "MongoDB", "MySQL"],
      gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
      borderGradient: "from-purple-500 via-pink-500 to-rose-500",
      iconColor: "text-pink-400",
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git/GitHub", "Docker", "Figma", "VS Code", "Jira", "WordPress"],
      gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20",
      borderGradient: "from-emerald-500 via-green-500 to-lime-500",
      iconColor: "text-green-400",
    },
  ]

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-60 overflow-hidden bg-black">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 md:mb-20 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              transform: `translateY(${scrollY * 0.02}px)`,
            }}
          >
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
              <span className="text-xs md:text-sm text-gray-400 font-mono">// Skills & Expertise</span>
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
              Technical Arsenal
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Crafting digital experiences with modern technologies and proven methodologies
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Skills Cards */}
            <div className="space-y-6 md:space-y-8 w-full">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className={`group relative transform transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`}
                  style={{
                    transform: `translateY(${scrollY * (0.03 + index * 0.01)}px)`,
                  }}
                >
                  {/* Card Container */}
                  <div className="relative p-4 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden group-hover:scale-[1.02]">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                    />

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.borderGradient} p-[1px]`}
                      >
                        <div className="w-full h-full rounded-2xl bg-black/50" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="p-2 md:p-3 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                          <category.icon className={`w-5 h-5 md:w-6 md:h-6 ${category.iconColor}`} />
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills Badges */}
                      <div className="flex  flex-wrap gap-2 md:gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skill}
                            className="group/badge relative overflow-hidden"
                            style={{
                              animationDelay: `${skillIndex * 100}ms`,
                            }}
                          >
                            <span className="relative z-10 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer rounded">
                              {skill}
                            </span>
                            {/* Badge Glow Effect */}
                            <div
                              className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.borderGradient} opacity-0 group-hover/badge:opacity-20 blur-sm transition-opacity duration-300`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/30 rounded-full animate-pulse opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Content */}
            <div
              className={`space-y-6 md:space-y-8 w-full transform transition-all duration-1000 delay-600 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{
                transform: `translateY(${scrollY * 0.02}px)`,
              }}
            >
              {/* Description Card */}
              <div className="relative p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-500">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-gray-800/20 to-zinc-800/20 group-hover:from-slate-700/30 group-hover:via-gray-700/30 group-hover:to-zinc-700/30 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white animate-pulse" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">About My Expertise</h3>
                  </div>

                  <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    I thrive on solving real-world problems, turning ideas into clean, maintainable code, and learning
                    through experimentation. You'll find me building side projects, diving into new tech stacks, or
                    simply exploring what's next in the world of web development.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                    {[
                      { label: "Years Experience", value: "3+" },
                      { label: "Projects Built", value: "50+" },
                      { label: "Technologies", value: "15+" },
                    ].map((stat, index) => (
                      <div
                        key={stat.label}
                        className="text-center p-3 md:p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10"
                      >
                        <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="group/btn relative w-full rounded-full bg-transparent border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 overflow-hidden py-3 md:py-4 px-6">
                    {/* Button Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />

                    {/* Button Content */}
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
                      View My Resume
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>

                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/50 to-cyan-500/50 rounded-full opacity-0 group-hover/btn:opacity-100 blur-sm transition-opacity duration-300 -z-10" />
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-4 left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
