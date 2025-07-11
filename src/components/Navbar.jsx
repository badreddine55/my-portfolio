"use client"

import { useState } from "react"
import { Home, User, Code, FolderOpen, Briefcase, Mail, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: "HOME", href: "#home" },
    { icon: User, label: "ABOUT", href: "#about" },
    { icon: Code, label: "SKILLS", href: "#skills" },
    { icon: FolderOpen, label: "PROJECTS", href: "#projects" },
    { icon: Briefcase, label: "SERVICES", href: "#services" },
    { icon: Mail, label: "CONTACT", href: "#contact" },
  ]

  const socialLinks = [
    { label: "GITHUB", href: "https://github.com/badreddine55" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/badr-eddine-252704319/" },
    { label: "TWITTER", href: "https://x.com/Badr_eddine55" },
    { label: "INSTAGRAM", href: "https://www.instagram.com/badr_dy/" },
  ]

  return (
    <>
      {/* Horizontal Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">

                <span className="text-white font-bold text-lg tracking-wider">BADR EDDINE</span>
              </div>
            </div>

            {/* Center Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                Projects
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                Contact
              </a>
            </div>

            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-teal-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Dropdown Menu Card */}
      <div
        className={`fixed top-16 right-4 sm:right-6 w-80 sm:w-96 bg-black/70 backdrop-blur-sm rounded-2xl border border-gray-800 z-40 transform transition-all duration-300 shadow-2xl ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-96 opacity-0"
        }`}
      >
        <div className="p-6 flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
          {/* Menu Section */}
          <div className="flex-1">
            <h3 className="text-white text-sm font-bold mb-4 flex items-center gap-2 tracking-wider">
              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
              NAVIGATION
            </h3>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-900/50 transition-all py-2.5 px-3 rounded-lg group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4 text-gray-400 group-hover:text-teal-400" />
                    <span className="text-sm font-medium tracking-wide">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex-1">
            <h3 className="text-white text-sm font-bold mb-4 flex items-center gap-2 tracking-wider">
              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
              SOCIAL
            </h3>
            <ul className="space-y-1">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-900/50 transition-all py-2.5 px-3 rounded-lg group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-4 h-4 text-gray-400 group-hover:text-teal-400 flex items-center justify-center">
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium tracking-wide">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/60 z-30" onClick={() => setIsMenuOpen(false)} />}
    </>
  )
}
