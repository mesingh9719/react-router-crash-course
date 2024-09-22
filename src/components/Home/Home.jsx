import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">Welcome to Our Website</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover how we can help you achieve your goals with our innovative solutions and expert team.</p>
        </header>

        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&h=400"
                  alt="Team collaboration"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">About Us</h2>
                <p className="text-gray-600 mb-4">
                  We are a team of passionate individuals dedicated to delivering exceptional services and solutions. 
                  Our mission is to empower businesses and individuals to reach their full potential through innovative technology and expert guidance.
                </p>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Learn More <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {['Web Development', 'Mobile Apps', 'Cloud Solutions'].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">✉️</span>
                <span className="text-gray-600">info@example.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">📞</span>
                <span className="text-gray-600">(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">🏢</span>
                <span className="text-gray-600">123 Main St</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">📍</span>
                <span className="text-gray-600">Anytown, USA</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}