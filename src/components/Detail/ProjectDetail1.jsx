
"use client"

import { useEffect, useState, useRef } from "react"
import {
  ArrowLeft,
  Package,
  Users,
  UserCheck,
  ChefHat,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import img3 from '../../assets/ISTA/HP-ISTA-Benguérir (10).png'
import img2 from '../../assets/ISTA/HP-ISTA-Benguérir (11).png'
import img1 from '../../assets/ISTA/HP-ISTA-Benguérir (12).png'
import img4 from '../../assets/ISTA/HP-ISTA-Benguérir (8).png'
import img5 from '../../assets/ISTA/HP-ISTA-Benguérir (9).png'
import img6 from '../../assets/ISTA/Screenshot from 2025-07-09 14-27-01.png'
import img7 from '../../assets/ISTA/Screenshot from 2025-07-09 14-28-45.png'
import img8 from '../../assets/ISTA/Screenshot from 2025-07-09 14-28-50.png'
import VideoBackgroundWrapper from "../VideoBackgroundWrapper"

export default function ProjectDetail1() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sectionRef = useRef(null)

  const projectImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ]

  const features = [
    {
      icon: Package,
      title: "Stock Management",
      description:
        "Precise tracking of inventory including product entries, exits, and supplier interactions with real-time updates and automated notifications.",
      benefit: "Optimizes inventory control and reduces waste through accurate tracking and forecasting.",
    },
    {
      icon: Users,
      title: "Trainee Management",
      description:
        "Autonomous management system for trainees including attendance tracking, absence requests, and meal preferences with self-service capabilities.",
      benefit:
        "Empowers trainees with control over their schedules while providing administrators with comprehensive oversight.",
    },
    {
      icon: UserCheck,
      title: "Administrative Oversight",
      description:
        "Comprehensive control panel for administrators to manage stock, trainees, and suppliers through an intuitive dashboard with analytics.",
      benefit:
        "Centralizes all operations in one platform, enabling data-driven decision making and improved efficiency.",
    },
    {
      icon: ChefHat,
      title: "Kitchen Management",
      description:
        "Specialized tools for kitchen staff to track inventory usage, plan meals based on trainee preferences, and manage food costs effectively.",
      benefit: "Reduces food waste and optimizes meal planning through accurate demand forecasting and cost tracking.",
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

      {/* Main Content */}
      <VideoBackgroundWrapper>
        <main ref={sectionRef} className="relative pt-16 md:pt-20">
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
                    HP ISTA BENGUERIR
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-400 mb-8">Stock & Trainee Management System</p>
                  <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-400" />
                      <span>2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-400" />
                      <span>4 Months</span>
                    </div>
                    <div className="px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-400 text-xs">
                      BUSINESS
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">📊 What is HP ISTA BENGUERIR?</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      HP ISTA BENGUERIR is an innovative web application designed to optimize stock and trainee management
                      for educational institutions, specifically tailored to the needs of the Office de la Formation
                      Professionnelle et de la Promotion du Travail (OFPPT). The project aimed to streamline inventory
                      tracking, trainee management, and administrative oversight through a centralized platform.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      The application addresses key operational challenges such as real-time inventory tracking,
                      autonomous trainee management, and centralized administrative control. It serves multiple user roles
                      including administrators, pedagogical directors, trainees, and kitchen staff, each with tailored
                      functionalities to meet their specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div
                  className={`transform transition-all duration-1000 delay-400 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Project Gallery</h2>

                  {/* Main Image Display */}
                  <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden mb-6">
                    <div className="relative w-full">
                      <img
                        src={projectImages[currentImageIndex] || "/placeholder.svg"}
                        alt={`HP ISTA BENGUERIR Screenshot ${currentImageIndex + 1}`}
                        className="w-full max-h-[80vh] object-contain"
                        style={{ aspectRatio: 'auto' }}
                      />

                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 backdrop-blur-sm border border-white/20 hover:border-teal-500 hover:bg-teal-500/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      >
                        <ChevronLeft className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors duration-300" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 backdrop-blur-sm border border-white/20 hover:border-teal-500 hover:bg-teal-500/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      >
                        <ChevronRight className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors duration-300" />
                      </button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm">
                        {currentImageIndex + 1} / {projectImages.length}
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                    {projectImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`flex-shrink-0 max-w-[100px] max-h-[100px] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === currentImageIndex
                            ? "border-teal-500 scale-110"
                            : "border-white/20 hover:border-white/40 hover:scale-105"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-contain"
                          style={{ aspectRatio: 'auto' }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div
                  className={`transform transition-all duration-1000 delay-600 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {features.map((feature, index) => {
                      const IconComponent = feature.icon
                      return (
                        <div
                          key={index}
                          className={`bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 rounded-lg p-6 md:p-8 group hover:scale-105 transform transition-all duration-1000 delay-${800 + index * 100}`}
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-teal-500/20 border border-teal-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-6 h-6 text-teal-400" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                                {feature.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-4">
                            <strong>How it Works:</strong> {feature.description}
                          </p>
                          <p className="text-gray-300 leading-relaxed">
                            <strong className="text-teal-400">Benefit:</strong> {feature.benefit}
                          </p>
                        </div>
                      )
                    })}
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
