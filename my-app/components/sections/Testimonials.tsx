'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/utils/data/services';

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white scroll-snap-section">
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
              Client <span style={{ color: 'var(--secondary-teal)' }}>Testimonials</span>
            </h2>
            <p className="body-text max-w-3xl mx-auto">
              Hear from our valued clients about their experience working with us and the 
              transformational impact we've delivered together.
            </p>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card"
              >
                {/* Quote */}
                <div className="mb-8">
                  <p className="text-xl text-gray-800 leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="font-medium" style={{ color: 'var(--secondary-teal)' }}>
                      {testimonials[currentTestimonial].organization}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Project</div>
                    <div className="font-medium text-gray-700">
                      {testimonials[currentTestimonial].project}
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(0, 95, 91, 0.08)' }}>
                  <div className="text-sm font-medium mb-1" style={{ color: 'var(--secondary-teal)' }}>Key Outcome</div>
                  <p className="text-gray-700 text-sm">
                    {testimonials[currentTestimonial].outcome}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 text-gray-600 transition-colors" style={{ color: 'var(--secondary-teal)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className="w-3 h-3 rounded-full transition-colors"
                    style={{
                      backgroundColor: index === currentTestimonial 
                        ? 'var(--secondary-teal)' 
                        : '#D1D5DB'
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 text-gray-600 transition-colors" style={{ color: 'var(--secondary-teal)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Trusted by Leading Organizations
            </h3>
            <p className="text-gray-600">
              We've had the privilege of working with renowned institutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {/* Organization Logos/Names */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-2" style={{ color: 'var(--secondary-teal)' }}>UN</div>
              <div className="text-sm text-gray-600">United Nations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2" style={{ color: 'var(--secondary-teal)' }}>WB</div>
              <div className="text-sm text-gray-600">World Bank</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2" style={{ color: 'var(--secondary-teal)' }}>UNDP</div>
              <div className="text-sm text-gray-600">UN Development</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2" style={{ color: 'var(--secondary-teal)' }}>AECOM</div>
              <div className="text-sm text-gray-600">Global Infrastructure</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;