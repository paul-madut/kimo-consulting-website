import React from 'react'

function Services() {
  return (
    <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Empower Your Legal Expertise as It Evolves To Your Client's Needs</h3>
                <p className="text-gray-500">
                  Streamline your legal practice with our comprehensive tools designed for modern attorneys.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Transforming Business Insights from Data to Action</h3>
                <p className="text-gray-500">
                  Turn complex financial data into actionable strategies that drive growth and minimize risk.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Services