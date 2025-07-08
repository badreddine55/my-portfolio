"use client"

export default function Footer() {
  const quickLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ]

  const portfolioLinks = [
    { label: "GITHUB", href: "https://github.com/badreddine55" },
    { label: "PROJECTS", href: "#projects" },
    { label: "RESUME", href: "#" }, // Add your resume link here
  ]

  const socialLinks = [
    { label: "INSTAGRAM", href: "https://www.instagram.com/badr_dy/" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/badr-eddine-252704319/" },
    { label: "TWITTER", href: "https://x.com/Badr_eddine55" },
  ]

  return (
    <footer className="py-16 md:py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-teal-400 transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio */}
            <div>
              <h4 className="font-semibold text-white mb-6">Portfolio</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {portfolioLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                      className="hover:text-teal-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Social Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-6">Contact</h4>
              <div className="space-y-4">
                <div>
                  <a
                    href="mailto:beddine330@gmail.com"
                    className="font-semibold text-lg text-teal-400 hover:text-teal-300 transition-colors duration-300"
                  >
                    beddine330@gmail.com
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+212701708363"
                    className="font-semibold text-lg text-teal-400 hover:text-teal-300 transition-colors duration-300"
                  >
                    +212 701 708 363
                  </a>
                </div>
                <div className="text-gray-400">Ben Guerir, Morocco</div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-gray-800 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              <span>© 2025 Badr Eddine Diyaf. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
