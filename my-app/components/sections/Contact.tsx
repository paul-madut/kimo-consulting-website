'use client';

import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-snap-section">
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
              Let's <span style={{ color: 'var(--secondary-teal)' }}>Connect</span>
            </h2>
            <p className="body-text max-w-3xl mx-auto">
              Ready to transform your vision into reality? Get in touch with us to discuss your 
              project requirements and discover how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="heading-tertiary text-gray-900 mb-6">Get in Touch</h3>
              <p className="body-text text-gray-600 mb-8">
                We're here to help you navigate your challenges and unlock new opportunities. 
                Reach out through any of the channels below, and we'll respond promptly.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0, 95, 91, 0.1)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--secondary-teal)' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600 mb-2">Call us directly for immediate assistance</p>
                  <a href="tel:+16136182470" className="font-medium transition-colors" style={{ color: 'var(--secondary-teal)' }}>
                    +1 (613) 618-2470
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0, 120, 111, 0.1)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--secondary-teal-light)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600 mb-2">Message us for quick responses</p>
                  <a href="https://wa.me/16136182470" className="font-medium transition-colors" style={{ color: 'var(--secondary-teal-light)' }}>
                    +1 (613) 618-2470
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0, 95, 91, 0.1)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--secondary-teal)' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 mb-2">Send us detailed project inquiries</p>
                  <a href="mailto:kimo@kimoadieboconsulting.ca" className="font-medium transition-colors" style={{ color: 'var(--secondary-teal)' }}>
                    kimo@kimoadieboconsulting.ca
                  </a>
                </div>
              </div>

              {/* Skype */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0, 95, 91, 0.1)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--secondary-teal)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.667 4.324m11.084-4.882l-.029-.135c-.32-1.395-.91-2.68-1.749-3.812a9.73 9.73 0 00-2.983-2.68c-1.15-.72-2.453-1.201-3.862-1.428-.068-.011-.134-.022-.201-.032-.335-.051-.672-.086-1.012-.103a2.52 2.52 0 00-.231-.005C9.966 6.018 7.414 8.542 7.414 11.657c0 .957.237 1.859.655 2.653.068.129.144.254.225.378.354.542.777 1.035 1.257 1.462.48.428 1.01.79 1.577 1.078.327.166.666.308 1.013.424l.022.007c.03.01.059.021.089.031l.025.008c.36.118.734.204 1.118.258.085.012.171.022.258.031.535.056 1.084.056 1.619 0l.028-.003c.053-.005.106-.012.158-.019.367-.048.727-.125 1.077-.23.117-.035.233-.073.348-.114l.025-.009c.16-.058.316-.123.469-.193.93-.422 1.786-.99 2.527-1.668.742-.679 1.369-1.464 1.849-2.327.297-.533.529-1.097.69-1.683.161-.586.252-1.193.271-1.807l.003-.056c.012-.414-.001-.829-.041-1.237"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Skype</h4>
                  <p className="text-gray-600 mb-2">Schedule video consultations</p>
                  <a href="skype:adiebo2?chat" className="font-medium transition-colors" style={{ color: 'var(--secondary-teal)' }}>
                    adiebo2
                  </a>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Location</h4>
                  <p className="text-gray-600">
                    B-89 Carillon Street<br />
                    Vanier, ON K1L 5Y6<br />
                    Canada
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
          >
            <h3 className="heading-tertiary text-gray-900 mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-colors"
                    style={{ 
                      
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--secondary-teal)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(0, 95, 91, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-colors"
                    style={{ outline: 'none' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--secondary-teal)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(0, 95, 91, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-colors"
                  style={{ outline: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--secondary-teal)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(0, 95, 91, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-colors"
                  style={{ outline: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--secondary-teal)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(0, 95, 91, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Your Organization"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-colors"
                  style={{ outline: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--secondary-teal)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(0, 95, 91, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="evaluation">Project & Program Evaluation</option>
                  <option value="strategic">Strategic Planning</option>
                  <option value="development">Personal & Professional Development</option>
                  <option value="impact">Socioeconomic & Environmental Impact</option>
                  <option value="research">Research, Analysis & Policy</option>
                  <option value="innovation">Business Innovation & Development</option>
                  <option value="other">Other / Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-colors resize-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--secondary-teal)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(0, 95, 91, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Tell us about your project, timeline, and specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4 flex gap-2 justify-between "
              >
                Send Message
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 text-center">
                We typically respond within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;