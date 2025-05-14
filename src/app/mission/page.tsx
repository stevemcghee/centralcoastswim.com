import React from 'react'
import Image from 'next/image'

export default function Mission() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Our Mission</h1>

      <div className="prose prose-lg max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              At Central Coast Swim, we envision a community where everyone has the opportunity to experience 
              the joy and benefits of swimming. We believe that water safety and swimming skills are essential 
              life skills that everyone should have access to.
            </p>
          </div>
          <div className="relative h-64">
            <Image
              src="/pool-facility.jpg"
              alt="Our swimming facility"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Safety First</h3>
              <p className="text-gray-600">
                We prioritize the safety of our students above all else, maintaining the highest standards 
                in facility maintenance and instruction practices.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Inclusive Learning</h3>
              <p className="text-gray-600">
                We create an inclusive environment where swimmers of all ages, abilities, and backgrounds 
                can learn and grow together.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Excellence in Teaching</h3>
              <p className="text-gray-600">
                Our instructors are committed to continuous learning and improvement, ensuring the highest 
                quality of instruction for our students.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Community Impact</h3>
              <p className="text-gray-600">
                We actively contribute to our community by promoting water safety and making swimming 
                accessible to all.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
          <p className="text-gray-600 mb-6">
            Be part of our journey to make swimming accessible and enjoyable for everyone in our community.
          </p>
          <a
            href="/book"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  )
} 