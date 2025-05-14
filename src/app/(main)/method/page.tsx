import React from 'react'
import Image from 'next/image'

export default function Method() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Our Method</h1>

      <div className="prose prose-lg max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Teaching Philosophy</h2>
            <p className="text-gray-600 mb-4">
              At Central Coast Swim, we believe in creating a safe, fun, and effective learning environment 
              for swimmers of all ages and abilities. Whether you're learning to swim for the first time or 
              refining your technique, our expert instructors are here to guide you every step of the way.
            </p>
          </div>
          <div className="relative h-64">
            <Image
              src="/gallery/gallery-1.jpg"
              alt="Swimming instruction"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Teaching Approach</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">1. Safety First</h3>
              <p className="text-gray-600">
                Water safety is our top priority. We teach essential safety skills and awareness in every 
                lesson, ensuring students develop a healthy respect for the water while building confidence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">2. Fun-Focused Learning</h3>
              <p className="text-gray-600">
                We believe that learning to swim should be enjoyable. Our lessons incorporate games and 
                activities that make learning fun while developing essential swimming skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">3. Personalized Attention</h3>
              <p className="text-gray-600">
                Whether in group or individual lessons, each student receives personalized attention and 
                feedback. We adapt our teaching style to match each student's learning pace and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">4. Progressive Development</h3>
              <p className="text-gray-600">
                Our curriculum is designed to build skills progressively, ensuring students develop a 
                strong foundation before advancing to more complex techniques.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Learn to Swim (Group Lessons)</h3>
              <p className="text-gray-600 mb-4">
                Perfect for children ages 5-15, our group lessons focus on water safety and having fun 
                while learning essential swimming skills.
              </p>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Age-appropriate group sizes</li>
                <li>Focus on water safety</li>
                <li>Fun, engaging activities</li>
                <li>Social skill development</li>
                <li>Basic stroke introduction</li>
                <li>Confidence building</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Get Better at Swimming (Individual Lessons)</h3>
              <p className="text-gray-600 mb-4">
                One-on-one instruction for all ages featuring our innovative jet system, perfect for 
                technique refinement and personalized coaching.
              </p>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>One-on-one coaching</li>
                <li>State-of-the-art jet system</li>
                <li>Technique-focused training</li>
                <li>All ages welcome</li>
                <li>Low-stress environment</li>
                <li>Customized goals</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Your Swimming Journey</h2>
          <p className="text-gray-600 mb-6">
            Whether you're learning to swim for the first time or looking to improve your technique, 
            our expert instructors are here to help you achieve your goals.
          </p>
          <a
            href="/book"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book a Trial Lesson
          </a>
        </div>
      </div>
    </div>
  )
} 