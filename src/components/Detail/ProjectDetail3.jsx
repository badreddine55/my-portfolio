"use client"

import { useEffect, useState, useRef } from "react"
import {
  ArrowLeft,
  Palette,
  Code,
  Smartphone,
  Zap,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import VideoBackgroundWrapper from "../VideoBackgroundWrapper"


export default function ProjectDetail3() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sectionRef = useRef(null)

  // Project images - you can replace these with actual project screenshots
  const projectImages = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  const features = [
    {
      icon: Palette,
      title: "Modern Design System",
      description:
        "Clean, minimalist design with a cohesive color palette, typography, and visual hierarchy that reflects professional branding and user experience principles.",
      benefit: "Creates a memorable first impression and establishes credibility with potential clients and employers.",
    },
    {
      icon: Code,
      title: "Interactive Components",
      description:
        "Smooth animations, hover effects, and interactive elements built with modern web technologies to engage visitors and showcase technical skills.",
      benefit:
        "Demonstrates technical proficiency while providing an engaging user experience that keeps visitors interested.",
    },
    {
      icon: Smartphone,
      title: "Responsive Layout",
      description:
        "Fully responsive design that adapts seamlessly across all devices - desktop, tablet, and mobile - ensuring optimal viewing experience everywhere.",
      benefit:
        "Reaches a wider audience and provides consistent experience regardless of how visitors access the portfolio.",
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description:
        "Fast loading times, optimized images, and efficient code structure to ensure quick page loads and smooth interactions across all sections.",
      benefit:
        "Improves user experience and search engine rankings while demonstrating attention to technical details.",
    },
  ]

  useEffect(() => {
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

    return () => observer.disconnect()
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 text-white hover:text-teal-400 transition-colors duration-300">
                <ArrowLeft className="w-5 h-5" />
                <a href="/">
                  <span className="font-medium">Back to Projects</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    <VideoBackgroundWrapper>
      {/* Main Content */}
      <main ref={sectionRef} className="relative pt-16 md:pt-20 overflow-hidden">
        {/* Crosshatch/Mesh Background Pattern */}

        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                  <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
                  <span className="text-xs md:text-sm text-gray-400 font-mono">// Project Details</span>
                  <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-teal-400 to-white bg-clip-text text-transparent mb-6">
                  PORTFOLIO
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8">Personal Portfolio Website</p>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span>2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span>2 Months</span>
                  </div>
                  <div className="px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-400 text-xs">
                    WEB DESIGN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div
                className={`transform transition-all duration-1000 delay-200 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 rounded-lg p-6 md:p-8 mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">🎨 What is this Portfolio?</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    This personal portfolio website serves as a comprehensive showcase of my skills, projects, and
                    professional journey as a Full Stack Developer. Designed with modern web technologies and user
                    experience principles, it reflects my technical expertise and creative vision in web development.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    The portfolio features a clean, minimalist design with smooth animations and interactive elements
                    that engage visitors while maintaining professional aesthetics. Built with performance and
                    accessibility in mind, it provides an optimal viewing experience across all devices and showcases my
                    commitment to quality code and attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">© 2025 Badr Eddine Diyaf. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/badreddine55" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      </VideoBackgroundWrapper>
    </div>
  )
}
