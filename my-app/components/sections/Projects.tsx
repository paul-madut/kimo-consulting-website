'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projectHighlights } from '@/utils/data/services';

function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-snap-section">
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
              Featured <span style={{ color: 'var(--secondary-teal)' }}>Projects</span>
            </h2>
            <p className="body-text max-w-3xl mx-auto">
              Explore our portfolio of successful consultancy engagements that have driven 
              transformational change and delivered measurable impact for our clients.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectHighlights.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card group overflow-hidden"
            >
              {/* Project Header - Green Background */}
              <div 
                className="p-6 relative"
                style={{ 
                  background: index % 2 === 0 
                    ? `linear-gradient(135deg, var(--secondary-teal) 0%, var(--secondary-teal-light) 100%)`
                    : `linear-gradient(135deg, var(--secondary-teal-light) 0%, var(--secondary-teal) 100%)`
                }}
              >
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                </div>
                
                <div className="relative z-10 flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-sm font-medium text-white/90 uppercase tracking-wide">
                        {project.sector}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 leading-tight ${
                      index % 3 === 0 ? 'text-white' 
                      : index % 3 === 1 ? 'text-gray-100' 
                      : 'text-white'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-lg font-medium mb-1 ${
                      index % 3 === 0 ? 'text-white/95' 
                      : index % 3 === 1 ? 'text-gray-200' 
                      : 'text-white/90'
                    }`}>{project.client}</p>
                    <p className={`text-sm ${
                      index % 3 === 0 ? 'text-white/80' 
                      : index % 3 === 1 ? 'text-gray-300' 
                      : 'text-white/75'
                    }`}>{project.period}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${
                      index % 3 === 0 ? 'text-white' 
                      : index % 3 === 1 ? 'text-gray-100' 
                      : 'text-white'
                    }`}>{project.budget}</div>
                    <div className={`text-sm ${
                      index % 3 === 0 ? 'text-white/80' 
                      : index % 3 === 1 ? 'text-gray-300' 
                      : 'text-white/75'
                    }`}>Budget</div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Role & Responsibilities</h4>
                  <p className="body-text-small text-gray-600">{project.role}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Project Description</h4>
                  <p className="body-text-small text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Impact</h4>
                  <p className="body-text-small font-medium" style={{ color: 'var(--secondary-teal-light)' }}>
                    {project.impact}
                  </p>
                </div>

                {/* Project Stats/Metrics */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {project.client.includes('UN') ? '95%' : '100%'}
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {project.budget.includes('30M') ? '200+' : '50+'}
                      </div>
                      <div className="text-sm text-gray-600">Beneficiaries</div>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="flex justify-between items-center">
                  <a 
                    href="/projects" 
                    className="inline-flex items-center font-medium transition-colors group/link" style={{ color: 'var(--secondary-teal)' }}
                  >
                    View Full Case Study
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 8.707l-3-3a1 1 0 00-1.414-1.414L8 7.586 6.707 6.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    Completed
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="heading-tertiary text-gray-900 mb-2">
              Our <span style={{ color: 'var(--secondary-teal)' }}>Track Record</span>
            </h3>
            <p className="body-text text-gray-600">
              Delivering measurable impact across diverse sectors and regions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--secondary-teal)' }}>25+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--secondary-teal)' }}>$50M+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Projects Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--secondary-teal)' }}>500+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--secondary-teal)' }}>15+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Countries Served</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="rounded-3xl p-8 text-white" style={{ background: 'linear-gradient(135deg, var(--secondary-teal) 0%, var(--secondary-teal-light) 100%)' }}>
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Next Project?</h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Join our portfolio of successful clients and discover how our expertise can 
              transform your organization's challenges into opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-xl font-semibold transition-colors" style={{ color: 'var(--secondary-teal)' }}
              >
                Start Your Project
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="/projects" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                View All Projects
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;