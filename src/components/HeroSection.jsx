"use client"

import { useEffect, useState, useRef } from "react"

import imge from '../assets/imag.jpeg';
export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [clickedSocial, setClickedSocial] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Trigger initial animation
    const timer = setTimeout(() => setIsVisible(true), 300)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  const handleSocialClick = (platform) => {
    setClickedSocial(platform)
    setTimeout(() => setClickedSocial(null), 300)

    const urls = {
      github: "https://github.com/badreddine55/",
      linkedin: "https://www.linkedin.com/in/badr-eddine-252704319/",
      twitter: "https://x.com/Badr_eddine55",
      instagram: "https://www.instagram.com/badr_dy/",
    }

    if (urls[platform]) {
      window.location.href = urls[platform]
    }
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden mt-12">
      {/* Optimized Animated Background */}
      <div
        className="absolute inset-0 w-full h-full hero-background"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Main Enhanced Gradient Background */}
        <div className="absolute inset-0 hero-gradient-main" />

        {/* Rotating Mesh Gradient */}
        <div className="absolute inset-0 hero-gradient-mesh" />

        {/* Optimized Floating Particles */}
        <div className="absolute inset-0 hero-particles">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-pulse hero-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDuration: `${Math.random() * 2 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `translateY(${scrollY * (Math.random() * 0.3 + 0.1)}px)`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5 hero-grid"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        {/* Enhanced Overlay */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Optimized Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full transition-all duration-1000 ${
            isVisible ? "opacity-60 animate-pulse" : "opacity-0"
          }`}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div
          className={`absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full transition-all duration-1200 delay-300 ${
            isVisible ? "opacity-40 animate-bounce" : "opacity-0"
          }`}
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full transition-all duration-1400 delay-600 ${
            isVisible ? "opacity-50 animate-ping" : "opacity-0"
          }`}
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="mb-12">
            <div className="overflow-hidden">
              <p
                className={`text-gray-400 text-lg mb-3 transform transition-all duration-1000 delay-200 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                -
              </p>
            </div>

            <div className="overflow-hidden">
              <h1
                className={`text-5xl lg:text-7xl xl:text-8xl font-bold hero-title leading-none transform transition-all duration-1200 delay-500 ${
                  isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
                }`}
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              >
                BADR EDDINE DIYAF
              </h1>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column */}
            <div
              className={`space-y-6 transform transition-all duration-1000 delay-700 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="relative mb-0">
                <p
                  className="text-lg text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300 relative z-10"
                  style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                >
                  Développeur web passionné, spécialisé en développement full stack et conception UI/UX, avec une forte
                  aptitude à créer des applications responsives, optimisées et centrées sur l'utilisateur. Polyvalent et
                  innovant, je résous des problèmes techniques complexes et livre des projets de haute qualité dans les
                  délais.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500/50 to-transparent rounded-full"></div>
                <div className="absolute -right-2 top-2 w-2 h-2 bg-teal-400/60 rounded-full animate-pulse"></div>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-1300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <button
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/BadrEddineDiyaf.pdf"
                    link.download = "Badr_Eddine_Diyaf_CV.pdf"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                  className="group relative px-8 py-4 bg-transparent border-2 border-teal-500 text-teal-400 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-teal-500 hover:text-white hover:shadow-2xl hover:shadow-teal-500/25 active:scale-95"
                >
                  Download CV
                </button>
              </div>

              <div
                className={`flex justify-center transform transition-all duration-1000 delay-1500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
                  <div className="w-2 h-0.5 bg-teal-400 rounded-full animate-pulse"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Center Column - Image */}
            <div
              className={`flex justify-center transform transition-all duration-1200 delay-900 ${
                isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full max-w-sm group">
                <div
                  className="relative rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
                  style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                >
                  <img
                    src={imge}
                    alt="Badr Eddine Diyaf"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-2xl transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-teal-500/0 group-hover:border-teal-500/30 transition-all duration-500"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full animate-ping opacity-75 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-1100 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <div className="relative">
                <p
                  className="text-lg text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300 relative z-10"
                  style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                >
                  I build fast, scalable, and user-friendly web applications using modern JavaScript frameworks —
                  combining React on the frontend and Node.js on the server-side.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500/50 to-transparent rounded-full"></div>
                <div className="absolute -right-2 top-2 w-2 h-2 bg-teal-400/60 rounded-full animate-pulse"></div>
              </div>

              {/* Stylish Social & Action Buttons */}
              <div className="space-y-6">
                {/* Social Media Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  {/* GitHub Button */}
                  <button
                    onClick={() => handleSocialClick("github")}
                    className="group relative p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <svg
                        className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="text-sm font-medium text-white group-hover:text-gray-300 transition-colors duration-300">
                        GitHub
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </button>

                  {/* LinkedIn Button */}
                  <button
                    onClick={() => handleSocialClick("linkedin")}
                    className="group relative p-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <svg
                        className="w-6 h-6 text-white group-hover:text-blue-100 transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="text-sm font-medium text-white group-hover:text-blue-100 transition-colors duration-300">
                        LinkedIn
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </button>

                  {/* Twitter Button */}
                  <button
                    onClick={() => handleSocialClick("twitter")}
                    className="group relative p-4 bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-slate-400/50 hover:shadow-2xl hover:shadow-slate-500/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <svg
                        className="w-6 h-6 text-white group-hover:text-slate-300 transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span className="text-sm font-medium text-white group-hover:text-slate-300 transition-colors duration-300">
                        Twitter
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </button>

                  {/* Instagram Button */}
                  <button
                    onClick={() => handleSocialClick("instagram")}
                    className="group relative p-4 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 border border-pink-400/30 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-pink-300/50 hover:shadow-2xl hover:shadow-pink-500/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <svg
                        className="w-6 h-6 text-white group-hover:text-pink-100 transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="text-sm font-medium text-white group-hover:text-pink-100 transition-colors duration-300">
                        Instagram
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-pink-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </button>
                </div>



                {/* Floating Connection Indicator */}
                <div className="flex items-center justify-center gap-2 pt-4">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400 font-medium">Let's connect</span>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-500"></div>
                </div>
              </div>
              <div
                className={`flex justify-center transform transition-all duration-1000 delay-1500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
                  <div className="w-2 h-0.5 bg-teal-400 rounded-full animate-pulse"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center hover:border-teal-500 transition-colors duration-300 cursor-pointer">
          <div className="w-0.5 h-3 bg-teal-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        .hero-background {
          will-change: transform;
        }

        .hero-gradient-main {
          background: 
            radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.3) 0%, transparent 60%),
            radial-gradient(circle at 60% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, 
              #0f172a 0%, 
              #1e293b 20%, 
              #0f766e 40%, 
              #1e40af 60%, 
              #7c3aed 80%, 
              #0f172a 100%
            );
          transition: all 1s ease-in-out;
        }

        .hero-gradient-mesh {
          background: conic-gradient(
            from 0deg at 50% 50%,
            rgba(20, 184, 166, 0.15) 0deg,
            rgba(59, 130, 246, 0.15) 90deg,
            rgba(168, 85, 247, 0.15) 180deg,
            rgba(236, 72, 153, 0.15) 270deg,
            rgba(20, 184, 166, 0.15) 360deg
          );
          animation: spin 25s linear infinite;
          opacity: 0.7;
        }

        .hero-particles {
          will-change: transform;
        }

        .hero-particle {
          will-change: transform, opacity;
        }

        .hero-grid {
          background-image: 
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .hero-overlay {
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.3) 30%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.3) 70%,
            rgba(0, 0, 0, 0.7) 100%
          );
        }

        .hero-title {
          background: linear-gradient(
            135deg, 
            #ffffff 0%, 
            #5eead4 25%, 
            #3b82f6 50%, 
            #a855f7 75%, 
            #14b8a6 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 8s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
