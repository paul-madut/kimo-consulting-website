'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-white scroll-snap-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Content Left Side */}
          <div className="order-2 lg:order-1">
            {/* Logo  Goes here*/}

            {/* Main Heading */}
            <motion.h1 
              className="heading-primary text-gray-900 mb-6 fade-in-up delay-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block">Excellence in</span>
              <span className="block font-normal" style={{ color: 'var(--secondary-teal)' }}>
                Consulting Solutions
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed fade-in-up delay-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Pioneering innovative consultancy services with 25+ years of global expertise.
              <span className="block mt-2 font-medium italic" style={{ color: 'var(--secondary-teal-light)' }}>
                "We Walk the Talk"
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12 fade-in-up delay-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 group px-8 py-4 text-lg font-medium text-white rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, var(--secondary-teal) 0%, var(--secondary-teal-light) 100%)`,
                  boxShadow: `0 4px 16px rgba(0, 95, 91, 0.3)`
                }}
              >
                Get Started
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#mission" 
                className="inline-flex items-center justify-center gap-2 group px-8 py-4 text-lg font-medium bg-white border-2 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                style={{ 
                  borderColor: 'var(--secondary-teal)',
                  color: 'var(--secondary-teal)'
                }}
              >
                Learn More
                <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>

            {/* Key Metrics */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl fade-in-up delay-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--secondary-teal)' }}>25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--secondary-teal)' }}>$30M+</div>
                <div className="text-sm text-gray-600">Projects Managed</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--secondary-teal)' }}>200+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
            </motion.div>
          </div>

          {/* Image Right Side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/hero.jpg" 
                  alt="Professional consulting team collaboration" 
                  width={700}
                  height={600}
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  priority
                />
                {/* Subtle overlay for image enhancement */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10"></div>
              </div>
              
              {/* Decorative elements */}
              <div 
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-xl"
                style={{ backgroundColor: 'var(--secondary-teal)' }}
              ></div>
              <div 
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-10 blur-2xl"
                style={{ backgroundColor: 'var(--secondary-teal-light)' }}
              ></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ color: 'var(--secondary-teal)' }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-80">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: 'var(--secondary-teal)' }}
          >
            <div 
              className="w-1 h-3 rounded-full mt-2 opacity-60"
              style={{ backgroundColor: 'var(--secondary-teal)' }}
            ></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;