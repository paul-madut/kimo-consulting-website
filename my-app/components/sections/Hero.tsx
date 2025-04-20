import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full">
              <div className="pt-6 px-4 sm:px-6 lg:px-8 lg:flex">
                <div className="lg:w-1/2 text-left lg:pr-8">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Changing the future of</span>{' '}
                    <span className="block text-gray-900 xl:inline">investment management</span>
                  </h1>
                  <div className="mt-8 border border-gray-300 rounded-md p-4 w-full sm:max-w-md">
                    <p className="text-gray-500">Get in touch</p>
                  </div>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                  <div className="relative h-64 sm:h-72 md:h-96">
                    <Image 
                      src="/images/hero.jpg" 
                      alt="Team working together" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  )
}

export default Hero