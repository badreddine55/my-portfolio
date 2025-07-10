"use client"

import { useEffect, useState, useRef } from "react"

import image1 from '../assets/Screenshot from 2025-07-08 16-59-30.png'
import image2 from '../assets/Screenshot from 2025-07-08 17-01-23.png'
import image3 from '../assets/Screenshot from 2025-07-08 17-03-24.png'
export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const projects = [
    {
      title: "HP ISTA BENGUERIR",
      category: "BUSINESS",
      image: image1,
      position: "top-[10%] left-[15%]",
      delay: "delay-200",
      size: "w-[900px] h-[600px]",
      url: "https://techzo-demo.com",
      hasDetailPage: true,
      detailRoute: "/ProjectDetail1",
    },
    {
      title: "NightPharm",
      category: "MARKETPLACE",
      image: image2,
      position: "top-[72%] left-[2%]",
      delay: "delay-500",
      size: "w-[720px] h-[500px]",
      url: "https://flakestake-demo.com",
      hasDetailPage: true,
      detailRoute: "/ProjectDetail2",
    },
    {
      title: "PORTFOLIO",
      category: "WEB DESIGN",
      image: image3,
      position: "top-[42%] right-[5%]",
      delay: "delay-700",
      size: "w-[700px] h-[550px]",
      url: "https://ruralarena-demo.com",
      hasDetailPage: true,
      detailRoute: "/ProjectDetail3",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleProjectClick = (project) => {
    if (project.hasDetailPage && project.detailRoute) {
      // Navigate to project detail page
      window.location.href = project.detailRoute
    } else if (project.url) {
      // Open external URL
      window.open(project.url, "_blank")
    }
  }

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-0 md:h-[2000px] overflow-hidden ">
      {/* Crosshatch/Mesh Background Pattern */}


      {/* Section title */}
      <div
        className={`text-center mb-12 md:mb-20 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
          <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
          <span className="text-xs md:text-sm text-gray-400 font-mono">// Featured Work</span>
          <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
          My Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
          Showcasing innovative web solutions and creative digital experiences
        </p>
      </div>

      {/* Desktop Layout - Scattered positioning */}
      <div className="hidden lg:block">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`absolute ${project.position} ${project.size} group cursor-pointer transform transition-all duration-1000 ease-out ${
              isVisible ? `translate-y-0 opacity-100 scale-100 ${project.delay}` : "translate-y-12 opacity-0 scale-95"
            }`}
            onClick={() => handleProjectClick(project)}
          >
            {/* Project Card */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/50">
              {/* Project Image */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
              <div className="absolute bottom-16 left-6 right-20">
                <div className="space-y-2">
                  <h3 className="text-white text-2xl font-bold tracking-tight">{project.title}</h3>
                  <p className="text-gray-400 text-base font-medium tracking-wider uppercase">{project.category}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                View Details
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500" />
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
            </div>

            {/* Floating animation */}
            <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                33% { transform: translateY(-10px) rotate(1deg); }
                66% { transform: translateY(5px) rotate(-1deg); }
              }
              .group:hover {
                animation: float 6s ease-in-out infinite;
              }
            `}</style>
          </div>
        ))}
      </div>

      {/* Mobile Layout - Vertical Stack */}
      <div className="lg:hidden flex flex-col items-center justify-start pt-16 pb-16 px-4 space-y-8 min-h-screen">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`w-full max-w-sm group cursor-pointer transform transition-all duration-1000 ease-out ${
              isVisible ? `translate-y-0 opacity-100 scale-100 ${project.delay}` : "translate-y-12 opacity-0 scale-95"
            }`}
            onClick={() => handleProjectClick(project)}
          >
            {/* Project Card */}
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/50">
              {/* Project Image */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-16 left-4 flex gap-1">
                {[...Array(index + 3)].map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      dotIndex === 0 ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>

              {/* Project Info */}
              <div className="absolute bottom-16 left-4 right-16">
                <div className="space-y-2">
                  <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">{project.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-white text-xs sm:text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                View Details
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500" />
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
            </div>

            {/* Mobile floating animation */}
            <style jsx>{`
              @keyframes mobileFloat {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-5px); }
              }
              .group:hover {
                animation: mobileFloat 3s ease-in-out infinite;
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  )
}
