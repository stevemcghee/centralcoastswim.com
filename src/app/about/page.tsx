import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Central Coast Swim</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Welcome to Central Coast Swim, where we've been teaching the joy of swimming to our community since 2010. 
          Our mission is to provide a safe, supportive, and fun environment for swimmers of all ages and skill levels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Facility</h2>
            <p className="text-gray-600 mb-4">
              Our state-of-the-art facility features a heated indoor pool, comfortable viewing areas for parents, 
              and modern changing rooms. The pool is maintained at a comfortable temperature year-round, making it 
              perfect for lessons in any season.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Heated indoor pool</li>
              <li>Comfortable viewing areas</li>
              <li>Modern changing facilities</li>
              <li>Ample parking</li>
              <li>Wheelchair accessible</li>
            </ul>
          </div>
          <div className="relative h-64">
            <Image
              src="/pool-facility.jpg"
              alt="Our swimming facility"
              fill
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
                role: 'Head Instructor',
                bio: 'Certified swimming instructor with extensive experience teaching all age groups.',
                image: '/instructor-1.jpg'
              }
            ].map((instructor) => (
              <div key={instructor.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
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
            At Central Coast Swim, we believe in a personalized approach to swimming instruction. 
            Our programs are designed to build confidence and develop proper technique while ensuring 
            safety and enjoyment in the water.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">For Beginners</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Water safety basics</li>
                <li>Comfort in the water</li>
                <li>Basic swimming strokes</li>
                <li>Breathing techniques</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">For Advanced Swimmers</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Stroke refinement</li>
                <li>Endurance training</li>
                <li>Competition preparation</li>
                <li>Advanced techniques</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Swimming Family</h2>
          <p className="text-gray-600 mb-6">
            Whether you're looking to learn to swim, improve your technique, or prepare for competition, 
            we have a program that's right for you. Contact us today to start your swimming journey!
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