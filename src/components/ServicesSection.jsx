"use client"

import { useEffect, useState, useRef } from "react"
import { Code, Palette, Database, Smartphone, Server, Zap, ShoppingCart, Settings, ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState(null)
  const sectionRef = useRef(null)

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

  const services = [
    {
      id: "fullstack",
      title: "Full Stack Development",
      description:
        "Complete web applications from concept to deployment using modern technologies like React, Node.js, and cloud services.",
      icon: Code,
      features: ["React.js & Next.js", "Node.js & Express", "MongoDB & MySQL", "Cloud Deployment"],
      color: "teal",
      delay: "delay-200",
    },
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Responsive, interactive user interfaces with modern frameworks and optimal user experience design.",
      icon: Smartphone,
      features: ["React & Vue.js", "Responsive Design", "Performance Optimization", "Cross-browser Compatibility"],
      color: "blue",
      delay: "delay-300",
    },
    {
      id: "backend",
      title: "Backend Development",
      description: "Robust server-side solutions, APIs, and database architecture for scalable applications.",
      icon: Server,
      features: ["RESTful APIs", "Database Design", "Authentication Systems", "Server Architecture"],
      color: "purple",
      delay: "delay-400",
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      description:
        "User-centered design solutions that combine aesthetics with functionality for optimal user experience.",
      icon: Palette,
      features: ["Wireframing & Prototyping", "User Research", "Design Systems", "Usability Testing"],
      color: "pink",
      delay: "delay-500",
    },
    {
      id: "database",
      title: "Database Management",
      description: "Efficient database design, optimization, and management for high-performance applications.",
      icon: Database,
      features: ["Database Design", "Query Optimization", "Data Migration", "Backup Solutions"],
      color: "green",
      delay: "delay-600",
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration and inventory management systems.",
      icon: ShoppingCart,
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics Dashboard"],
      color: "orange",
      delay: "delay-700",
    },
    {
      id: "performance",
      title: "Web Performance",
      description: "Speed optimization, SEO enhancement, and performance monitoring for better user experience.",
      icon: Zap,
      features: ["Speed Optimization", "SEO Implementation", "Performance Monitoring", "Core Web Vitals"],
      color: "yellow",
      delay: "delay-800",
    },
    {
      id: "cms",
      title: "Content Management",
      description: "Custom CMS solutions and content strategy for easy website management and updates.",
      icon: Settings,
      features: ["Custom CMS", "Content Strategy", "Multi-language Support", "Admin Dashboards"],
      color: "indigo",
      delay: "delay-900",
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      teal: {
        border: "border-teal-500/30",
        text: "text-teal-400",
        bg: "bg-teal-500/10",
        hover: "hover:border-teal-500",
        glow: "group-hover:shadow-teal-500/20",
        buttonBg: "bg-teal-500",
      },
      blue: {
        border: "border-blue-500/30",
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        hover: "hover:border-blue-500",
        glow: "group-hover:shadow-blue-500/20",
        buttonBg: "bg-blue-500",
      },
      purple: {
        border: "border-purple-500/30",
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        hover: "hover:border-purple-500",
        glow: "group-hover:shadow-purple-500/20",
        buttonBg: "bg-purple-500",
      },
      pink: {
        border: "border-pink-500/30",
        text: "text-pink-400",
        bg: "bg-pink-500/10",
        hover: "hover:border-pink-500",
        glow: "group-hover:shadow-pink-500/20",
        buttonBg: "bg-pink-500",
      },
      green: {
        border: "border-green-500/30",
        text: "text-green-400",
        bg: "bg-green-500/10",
        hover: "hover:border-green-500",
        glow: "group-hover:shadow-green-500/20",
        buttonBg: "bg-green-500",
      },
      orange: {
        border: "border-orange-500/30",
        text: "text-orange-400",
        bg: "bg-orange-500/10",
        hover: "hover:border-orange-500",
        glow: "group-hover:shadow-orange-500/20",
        buttonBg: "bg-orange-500",
      },
      yellow: {
        border: "border-yellow-500/30",
        text: "text-yellow-400",
        bg: "bg-yellow-500/10",
        hover: "hover:border-yellow-500",
        glow: "group-hover:shadow-yellow-500/20",
        buttonBg: "bg-yellow-500",
      },
      indigo: {
        border: "border-indigo-500/30",
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        hover: "hover:border-indigo-500",
        glow: "group-hover:shadow-indigo-500/20",
        buttonBg: "bg-indigo-500",
      },
    }
    return colors[color] || colors.teal
  }

  return (
    <div className="min-h-screen text-white">
      <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div
              className={`text-center mb-12 md:mb-20 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
                <span className="text-xs md:text-sm text-gray-400 font-mono">// Services</span>
                <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
                What I Offer
              </h2>
              <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                Comprehensive web development and design services to bring your digital vision to life
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => {
                const colorClasses = getColorClasses(service.color)
                const IconComponent = service.icon
                return (
                  <div
                    key={service.id}
                    className={`group transform transition-all duration-1000 ${service.delay} ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div
                      className={`relative h-full bg-black/20 backdrop-blur-sm border ${colorClasses.border} ${colorClasses.hover} transition-all duration-500 rounded-lg hover:scale-[1.02] hover:shadow-2xl ${colorClasses.glow} cursor-pointer`}
                    >
                      <div className="p-6 md:p-8 h-full flex flex-col">
                        {/* Service Icon */}
                        <div
                          className={`w-12 h-12 md:w-16 md:h-16 ${colorClasses.bg} rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${colorClasses.text}`} />
                        </div>
                        {/* Service Title */}
                        <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-teal-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        {/* Service Description */}
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6 flex-grow">
                          {service.description}
                        </p>
                        {/* Service Features */}
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 ${colorClasses.bg} rounded-full flex-shrink-0`}></div>
                              <span className="text-xs md:text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        {/* CTA Button */}
                        <button
                          className={`w-full group/btn relative px-4 py-3 bg-transparent border ${colorClasses.border} ${colorClasses.text} font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${colorClasses.hover} hover:text-white hover:shadow-lg ${colorClasses.glow} flex items-center justify-center`}
                        >
                          <div
                            className={`absolute inset-0 ${colorClasses.buttonBg} scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left`}
                          ></div>
                          <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
                            Get Started
                            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </button>
                        {/* Hover Glow Effect */}
                        <div
                          className={`absolute -inset-1 ${
                            colorClasses.buttonBg.replace("bg-", "bg-") + "/20"
                          } rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}
                        ></div>
                      </div>
                      {/* Animated Corner Accent */}
                      <div
                        className={`absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] ${colorClasses.border} rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Call to Action */}
            <div
              className={`text-center mt-12 md:mt-20 transform transition-all duration-1000 delay-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-300 group"
              >
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
