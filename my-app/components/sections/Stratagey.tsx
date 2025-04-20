import React from 'react'

function Stratagey() {
  return (
    <section className="py-12 bg-teal-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Strategy</h2>
            <p className="mb-8 max-w-3xl">
              Our approach combines deep market knowledge with innovative technologies to deliver superior returns. We focus on creating sustainable growth strategies customized to each client's unique needs and goals.
            </p>
            <div className="text-right">
              <button className="text-white underline">See All →</button>
            </div>
            
            <div className="mt-10 space-y-4">
              <div className="flex justify-between items-center p-4 bg-teal-700 rounded-md">
                <span>Sustainability</span>
                <button className="h-8 w-8 rounded-full bg-white text-teal-800 flex items-center justify-center">+</button>
              </div>
              <div className="flex justify-between items-center p-4 bg-teal-700 rounded-md">
                <span>Analytic Tools</span>
                <button className="h-8 w-8 rounded-full bg-white text-teal-800 flex items-center justify-center">+</button>
              </div>
              <div className="flex justify-between items-center p-4 bg-teal-700 rounded-md">
                <span>Financial Advisory</span>
                <button className="h-8 w-8 rounded-full bg-white text-teal-800 flex items-center justify-center">+</button>
              </div>
              <div className="flex justify-between items-center p-4 bg-teal-700 rounded-md">
                <span>Operations and Management</span>
                <button className="h-8 w-8 rounded-full bg-white text-teal-800 flex items-center justify-center">+</button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Stratagey