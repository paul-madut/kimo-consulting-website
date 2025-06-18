import React from 'react'

function About() {
  return (
    <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">OUR IDENTITY</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-gray-500 text-sm mb-6">
                  In the midst of business, success is both a destination and a journey. At Kimo Adiebo Consulting, innovation is never far away.
                </p>
                <p className="text-lg font-medium text-gray-900">
                  Kimo Adiebo Consulting was established as the essential investment consulting firm, trusted for our innovative solutions and service excellence at your business.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-teal-700">780+</span>
                <p className="mt-2 text-sm text-gray-500">Clients worldwide</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-teal-700">$200K+</span>
                <p className="mt-2 text-sm text-gray-500">Average investment</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-teal-700">92%</span>
                <p className="mt-2 text-sm text-gray-500">Client satisfaction</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default About