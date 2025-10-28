"use client";

import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

const Home = lazy(() => import("./pages/Home"));
const ProjectDetail1 = lazy(() => import("./components/Detail/ProjectDetail1"));
const ProjectDetail2 = lazy(() => import("./components/Detail/ProjectDetail2"));
const ProjectDetail3 = lazy(() => import("./components/Detail/ProjectDetail3"));

// Welcome Screen Component
const WelcomeScreen = ({ onStart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 300);

    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setIsVisible(false);
    setTimeout(() => onStart(), 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
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

        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/20 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
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
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Welcome Text */}
          <div
            className={`mb-8 sm:mb-12 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
              <span className="text-sm sm:text-base text-gray-300 font-mono">
                // Welcome
              </span>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </div>

            <h1
              className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #5eead4 30%, #14b8a6 60%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(20, 184, 166, 0.3))",
              }}
            >
              BADR EDDINE DIYAF
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-2 sm:mb-4">
              Full Stack Developer & UI/UX Designer
            </p>

            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Welcome to my digital portfolio. Discover innovative web
              solutions, creative designs, and cutting-edge development
              projects.
            </p>
          </div>

          {/* Simplified Start Button - Only Hover Effects */}
          {/* 3D Start Button */}

          <div
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            }`}
          >
            <div className="relative group">
              {/* Button Glow Ring */}

              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/50 via-blue-500/50 to-purple-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl animate-pulse"></div>

              {/* Main Button */}

              <button
                onClick={handleStart}
                className="relative rounded-full group/btn overflow-hidden"
              >
                {/* Button Base */}

                  <div className="relative px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-6 rounded-full bg-black/80 backdrop-blur-sm group-hover:bg-black/60 transition-all duration-300">
                    {/* Button Content */}

                    <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                      {/* Start Icon */}

                      <div className="relative">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white ml-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>

                        {/* Icon Glow */}

                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 opacity-0 group-hover/btn:opacity-50 blur-md transition-opacity duration-300"></div>
                      </div>

                      {/* Button Text */}

                      <span
                        className="text-xl sm:text-2xl lg:text-3xl font-bold group-hover/btn:scale-105 transition-transform duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, #ffffff 0%, #5eead4 50%, #14b8a6 100%)",

                          WebkitBackgroundClip: "text",

                          WebkitTextFillColor: "transparent",

                          backgroundClip: "text",
                        }}
                      >
                        START JOURNEY
                      </span>

                      {/* Arrow */}

                      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-teal-400/50 flex items-center justify-center group-hover/btn:border-teal-400 group-hover/btn:scale-110 transition-all duration-300">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-teal-400 group-hover/btn:translate-x-0.5 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Button Shine Effect */}

                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                
                {/* 3D Shadow */}

                <div className="absolute inset-0 rounded-full bg-gradient-to-r  from-teal-500/30 via-blue-500/30 to-purple-500/30 translate-y-2 blur-lg opacity-50 group-hover:translate-y-4 group-hover:opacity-70 transition-all duration-300"></div>
              </button>

              {/* Floating Elements Around Button */}

              <div className="absolute -top-8 -left-8 w-4 h-4 bg-teal-400/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute -top-6 -right-10 w-2 h-2 bg-blue-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>

              <div className="absolute -bottom-8 -right-6 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400"></div>

              <div className="absolute -bottom-6 -left-10 w-2 h-2 bg-teal-400/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-600"></div>
            </div>
          </div>

          {/* Bottom Hint */}
          <div
            className={`mt-8 sm:mt-12 transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2">
              <span>Click to explore my work</span>
              <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
            </p>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-teal-400/30 rounded-tl-lg"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-blue-400/30 rounded-tr-lg"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-purple-400/30 rounded-bl-lg"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-teal-400/30 rounded-br-lg"></div>
    </div>
  );
};

// Home wrapper component that handles welcome screen with session storage
const HomeWithWelcome = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isHomeReady, setIsHomeReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the welcome screen in this browser session
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");

    if (!hasSeenWelcome) {
      // First time visiting - show welcome screen
      setShowWelcome(true);
      setIsLoading(false);
    } else {
      // Already seen welcome - go directly to home
      setShowWelcome(false);
      setIsHomeReady(true);
      setIsLoading(false);
    }
  }, []);

  const handleStart = () => {
    // Mark that user has seen the welcome screen
    sessionStorage.setItem("hasSeenWelcome", "true");
    setShowWelcome(false);
    setTimeout(() => setIsHomeReady(true), 100);
  };

  // Show loading while checking session storage
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-t-4 border-teal-500/30"></div>
        </div>
      </div>
    );
  }

  // Show welcome screen on first visit
  if (showWelcome) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  // Show home page after welcome or directly if already seen
  return (
    <div
      className={`transition-opacity duration-500 ${
        isHomeReady ? "opacity-100" : "opacity-0"
      }`}
    >
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-t-4 border-teal-500/30"></div>
            </div>
          </div>
        }
      >
        <Home />
      </Suspense>
    </div>
  );
};

// Standard loading fallback for project pages
const ProjectLoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500"></div>
      <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-t-4 border-teal-500/30"></div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route with welcome screen */}
        <Route path="/" element={<HomeWithWelcome />} />

        {/* Project detail routes without welcome screen */}
        <Route
          path="/ProjectDetail1"
          element={
            <Suspense fallback={<ProjectLoadingFallback />}>
              <ProjectDetail1 />
            </Suspense>
          }
        />
        <Route
          path="/ProjectDetail2"
          element={
            <Suspense fallback={<ProjectLoadingFallback />}>
              <ProjectDetail2 />
            </Suspense>
          }
        />
        <Route
          path="/ProjectDetail3"
          element={
            <Suspense fallback={<ProjectLoadingFallback />}>
              <ProjectDetail3 />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
