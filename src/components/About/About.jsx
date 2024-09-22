import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Learn more about our company and our mission</p>
        </header>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, our company has been at the forefront of innovation in the tech industry. 
            We started with a small team of passionate developers and have grown into a global organization 
            serving clients across various sectors.
          </p>
          <p className="text-gray-600">
            Our journey has been marked by continuous learning, adaptation, and a commitment to excellence. 
            We've weathered challenges and celebrated successes, always keeping our core values at heart.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            We strive to empower businesses and individuals through innovative technology solutions. 
            Our mission is to make complex technologies accessible and beneficial for everyone, 
            driving positive change in the world.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Deliver high-quality, user-friendly software</li>
            <li>Foster a culture of continuous innovation</li>
            <li>Prioritize customer satisfaction and support</li>
            <li>Contribute to the global tech community</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {['John Doe', 'Jane Smith', 'Mike Johnson'].map((name, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-600">Co-founder</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Innovation', description: 'Constantly pushing boundaries and exploring new technologies.' },
              { title: 'Integrity', description: 'Maintaining the highest ethical standards in all our dealings.' },
              { title: 'Collaboration', description: 'Fostering teamwork and open communication.' },
              { title: 'Excellence', description: 'Striving for the highest quality in everything we do.' }
            ].map((value, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About