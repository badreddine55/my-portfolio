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

    // Redirect to the corresponding social media URL
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
      {/* Enhanced Animated Background with Parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Main Gradient Background */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `
        radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
        linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f766e 50%, #1e293b 75%, #0f172a 100%)
      `,
          }}
        />

        {/* Animated Mesh Gradient */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
        conic-gradient(from 0deg at 50% 50%, 
          rgba(20, 184, 166, 0.1) 0deg,
          rgba(59, 130, 246, 0.1) 120deg,
          rgba(168, 85, 247, 0.1) 240deg,
          rgba(20, 184, 166, 0.1) 360deg
        )
      `,
            animation: "spin 20s linear infinite",
          }}
        />

        {/* Dynamic Floating Particles */}
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `translateY(${scrollY * (Math.random() * 0.5 + 0.2)}px)`,
            }}
          />
        ))}

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
      `,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: `
          linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.8) 100%
          )
        `,
            }}
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full transition-all duration-1000 ${
            isVisible ? "opacity-60 animate-pulse" : "opacity-0"
          }`}
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div
          className={`absolute top-40 right-20 w-1 h-1 bg-white rounded-full transition-all duration-1200 delay-300 ${
            isVisible ? "opacity-40 animate-bounce" : "opacity-0"
          }`}
          style={{
            transform: `translateY(${scrollY * 0.7}px)`,
          }}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-teal-300 rounded-full transition-all duration-1400 delay-600 ${
            isVisible ? "opacity-50 animate-ping" : "opacity-0"
          }`}
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          {/* Top Section - Small paragraph and big name */}
          <div className="mb-12">
            {/* Small paragraph with slide-in animation */}
            <div className="overflow-hidden">
              <p
                className={`text-gray-400 text-lg mb-3 transform transition-all duration-1000 delay-200 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                -
              </p>
            </div>

            {/* Large name with staggered letter animation */}
            <div className="overflow-hidden">
              <h1
                className={`text-5xl lg:text-7xl xl:text-8xl font-bold gradient-text leading-none transform transition-all duration-1200 delay-500 ${
                  isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
                }`}
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                  background: "linear-gradient(135deg, #ffffff 0%, #5eead4 50%, #14b8a6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                BADR EDDINE DIYAF
              </h1>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div
              className={`space-y-6 transform transition-all duration-1000 delay-700 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              {/* Description Text */}
              <div className="relative mb-0">
                <p
                  className="text-lg text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300 relative z-10"
                  style={{
                    transform: `translateY(${scrollY * 0.05}px)`,
                  }}
                >
                  Développeur web passionné, spécialisé en développement full stack et conception UI/UX, avec une forte
                  aptitude à créer des applications responsives, optimisées et centrées sur l'utilisateur. Polyvalent et
                  innovant, je résous des problèmes techniques complexes et livre des projets de haute qualité dans les
                  délais.
                </p>
                {/* Decorative elements */}
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500/50 to-transparent rounded-full"></div>
                <div className="absolute -right-2 top-2 w-2 h-2 bg-teal-400/60 rounded-full animate-pulse"></div>
              </div>

              {/* Action Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-1300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {/* Download CV Button */}
<button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/BadrEddineDiyaf.pdf"; // Path relative to public folder
    link.download = "Badr_Eddine_Diyaf_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="group relative px-8 py-4 bg-transparent border-2 border-teal-500 text-teal-400 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-teal-500 hover:text-white hover:shadow-2xl hover:shadow-teal-500/25 active:scale-95"
>
  Download CV
</button>
              </div>

              {/* Decorative Line */}
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
                  style={{
                    transform: `translateY(${scrollY * -0.1}px)`,
                  }}
                >
                  <img
                    src={imge}
                    alt="Badr Eddine Diyaf"
                    className="w-full h-auto rounded-2xl transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-teal-500/0 group-hover:border-teal-500/30 transition-all duration-500"></div>
                </div>
                {/* Floating indicator */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full animate-ping opacity-75 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Right Column - Description, 3D Social Bar, and Action Buttons */}
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-1100 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              {/* Description Text */}
              <div className="relative">
                <p
                  className="text-lg text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300 relative z-10"
                  style={{
                    transform: `translateY(${scrollY * 0.05}px)`,
                  }}
                >
                  I build fast, scalable, and user-friendly web applications using modern JavaScript frameworks —
                  combining React on the frontend and Node.js on the server-side.
                </p>
                {/* Decorative elements */}
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500/50 to-transparent rounded-full"></div>
                <div className="absolute -right-2 top-2 w-2 h-2 bg-teal-400/60 rounded-full animate-pulse"></div>
              </div>

              {/* 3D Social Bar Container */}
              <div className="relative group">
                {/* Glass Container */}
                <div className="relative rounded-2xl overflow-hidden bg-black/10 backdrop-blur-md border border-white/10 hover:border-teal-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
                  {/* 3D Model */}
                  <div className="relative h-80 sm:h-72 w-full">
                    <iframe
                      src="https://my.spline.design/social3dbar-BWw5O7oN5QakNtl5Aq0rQSH5/"
                      className="w-full h-full border-0 rounded-2xl"
                      title="3D Social Bar"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                    {/* Interactive Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black backdrop-blur-sm p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-medium">Connect with me</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                        <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                        <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-1 h-1 bg-teal-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute top-8 left-6 w-0.5 h-0.5 bg-white rounded-full animate-bounce opacity-40"></div>
                  <div className="absolute bottom-16 right-8 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-pulse"></div>
                </div>

                {/* External Glow Ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>

                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-teal-400/60 rounded-tl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-teal-400/60 rounded-br-lg"></div>
              </div>

              {/* Decorative Line */}
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
    </section>
  )
}
