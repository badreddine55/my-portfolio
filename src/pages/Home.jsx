"use client"

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Add Services section when you create it */}
      <section id="services"><ServicesSection/></section>
      <section id="CTASection"><CTASection/></section>
      {/* Add Contact section when you create it */}
      <section id="contact">{/* <ContactSection /> */}</section>

      <Footer />
    </div>
  )
}
