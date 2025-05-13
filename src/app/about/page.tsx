import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Central Coast Swim</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Welcome to Central Coast Swim. Our mission is to provide a safe, comfortable, and enjoyable environment for swimmers of all ages to learn and grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Pool</h2>
            <p className="text-gray-600 mb-4">
              Our cozy backyard pool offers a perfect setting for learning to swim. The pool is heated for comfort, 
              and we maintain a warm, welcoming atmosphere that helps students feel at ease. Parents can relax in our 
              comfortable seating area while watching their children's progress.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Heated backyard pool</li>
              <li>Comfortable seating for parents</li>
              <li>Clean changing facilities</li>
              <li>Easy street parking</li>
              <li>Family-friendly environment</li>
            </ul>
          </div>
          <div className="relative h-64">
            <Image
              src="/pool-facility.jpg"
              alt="Our swimming pool"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Instructor</h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                name: 'Andria McGhee',
                role: 'Swimming Instructor',
                bio: 'Experienced swimming instructor passionate about teaching water safety and swimming skills to all ages.',
                image: '/instructor-1.jpg'
              }
            ].map((instructor) => (
              <div key={instructor.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{instructor.name}</h3>
                  <p className="text-blue-600 mb-2">{instructor.role}</p>
                  <p className="text-gray-600">{instructor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-gray-600 mb-4">
            At Central Coast Swim, we focus on making swimming fun and accessible for everyone. 
            Our gentle, patient approach helps students build confidence in the water while learning 
            essential swimming skills at their own pace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">For Beginners</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Water safety basics</li>
                <li>Getting comfortable in water</li>
                <li>Basic floating and kicking</li>
                <li>Simple swimming movements</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">For Intermediate Swimmers</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Basic stroke development</li>
                <li>Building swimming confidence</li>
                <li>Water games and activities</li>
                <li>Fun swimming skills</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Your Swimming Journey</h2>
          <p className="text-gray-600 mb-6">
            Whether you're taking your first dip or looking to improve your swimming skills, 
            we're here to help you feel confident and safe in the water. Contact us today to 
            schedule your first lesson!
          </p>
          <a
            href="/book"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book a Lesson
          </a>
        </div>
      </div>
    </div>
  )
} 