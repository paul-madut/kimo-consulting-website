'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { companyValues } from '@/utils/data/services';

function Mission() {
  return (
    <section id="mission" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-snap-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary mb-6">
              Our <span style={{ color: 'var(--secondary-teal)' }}>Mission & Vision</span>
            </h2>
            <p className="body-text max-w-3xl mx-auto">
              Committed to providing world-class consultancy services that drive meaningful change 
              and sustainable development across communities and organizations.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 95, 91, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--secondary-teal)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="heading-tertiary text-gray-900 mb-4">Our Mission</h3>
              <p className="body-text-small leading-relaxed">
                To provide the most innovative consultancy services to a wide range of clients, 
                contributing to private sector development by facilitating enterprise development 
                and transferring business knowledge and skills to enhance capacities of existing 
                and aspiring entrepreneurs, especially youth and women.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full -translate-y-16 translate-x-16"></div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 120, 111, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--secondary-teal-light)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="heading-tertiary text-gray-900 mb-4">Our Vision</h3>
              <p className="body-text-small leading-relaxed">
                To be a hub for world-class Consultancy Services in the National Capital Region, 
                Ontario, and beyond, recognized for excellence, innovation, and transformative impact 
                on communities and organizations we serve.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/30 rounded-full -translate-y-16 translate-x-16"></div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-tertiary mb-4"
          >
            Our <span style={{ color: 'var(--secondary-teal)' }}>Core Values</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="body-text max-w-2xl mx-auto"
          >
            The guiding principles that shape our approach to every client engagement and project delivery.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {companyValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="service-card h-full flex flex-col items-center p-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: 'rgba(0, 95, 91, 0.08)' }}>
                  {/* Dynamic icon based on value */}
                  {value.icon === 'Brain' && (
                    <svg className="w-7 h-7" style={{ color: 'var(--secondary-teal)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  )}
                  {value.icon === 'Target' && (
                    <svg className="w-7 h-7" style={{ color: 'var(--secondary-teal)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {value.icon === 'Shield' && (
                    <svg className="w-7 h-7" style={{ color: 'var(--secondary-teal)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {value.icon === 'Heart' && (
                    <svg className="w-7 h-7" style={{ color: 'var(--secondary-teal)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  )}
                  {value.icon === 'Arrows' && (
                    <svg className="w-7 h-7" style={{ color: 'var(--secondary-teal)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">{value.title}</h4>
                <p className="body-text-small text-center leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="rounded-3xl p-8 text-white" style={{ background: 'linear-gradient(135deg, var(--secondary-teal) 0%, var(--secondary-teal-light) 100%)' }}>
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Vision?</h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Let's collaborate to turn your strategic goals into measurable results with our proven expertise and innovative approach.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-xl font-semibold transition-colors" style={{ color: 'var(--secondary-teal)' }}
            >
              Start Your Project
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Mission;