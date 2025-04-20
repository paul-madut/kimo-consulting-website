import React from 'react'
import Image from 'next/image'

function Testimonials() {
  return (
    <section className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 rounded-lg p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-300">
              <Image src="/images/testimonial.png" alt="Sarah Wu" width={48} height={48} className="rounded-full" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Sarah Wu</h4>
            <p className="mt-2 text-gray-600">
              "The Legal Pro team worked us up to the top for key search terms and are making sure we stay there. We are thrilled to provide the capital that modern investors are asking with along with the tools to keep them well-informed as they deserve."
            </p>
            <div className="mt-4 flex space-x-4">
              <button className="h-8 w-8 rounded-full bg-white shadow flex items-center justify-center">←</button>
              <button className="h-8 w-8 rounded-full bg-white shadow flex items-center justify-center">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials