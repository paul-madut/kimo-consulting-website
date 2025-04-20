import React from 'react'
import Image from 'next/image'

function Cta() {
  return (
    <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Step Into the Future</span>
            <span className="block">of Business Brilliance</span>
          </h2>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-800">
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="relative h-64 sm:h-72 md:h-96">
            <Image 
              src="/images/cta1.jpg" 
              alt="Business professionals" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>  )
}

export default Cta