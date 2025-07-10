
"use client"
import { useEffect, useState, useRef } from "react"

export default function VideoBackgroundWrapper({ children }) {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden ">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"

          poster="/assets/fallback-image.jpg"
        >
          <source src="https://framerusercontent.com/assets/tVDFxTF16CS1iiEK8yp32aic77g.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay for Better Content Readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Additional Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(0, 0, 0, 0.8) 0%,
                rgba(0, 0, 0, 0.6) 25%,
                rgba(0, 0, 0, 0.4) 50%,
                rgba(0, 0, 0, 0.6) 75%,
                rgba(0, 0, 0, 0.8) 100%
              )
            `,
          }}
        />

        {/* Animated Particles Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className={`absolute top-20 left-10 w-2 h-2 bg-teal-400/60 rounded-full transition-all duration-1000 ${
              isVisible ? "opacity-60 animate-pulse" : "opacity-0"
            }`}
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
          <div
            className={`absolute top-40 right-20 w-1 h-1 bg-white/40 rounded-full transition-all duration-1200 delay-300 ${
              isVisible ? "opacity-40 animate-bounce" : "opacity-0"
            }`}
            style={{
              transform: `translateY(${scrollY * 0.7}px)`,
            }}
          />
          <div
            className={`absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-teal-300/50 rounded-full transition-all duration-1400 delay-600 ${
              isVisible ? "opacity-50 animate-ping" : "opacity-0"
            }`}
            style={{
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          />
          <div
            className={`absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full transition-all duration-1600 delay-900 ${
              isVisible ? "opacity-40 animate-pulse" : "opacity-0"
            }`}
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
