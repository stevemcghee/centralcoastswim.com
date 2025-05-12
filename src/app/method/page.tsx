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
              At Central Coast Swim, we believe in a holistic approach to swimming instruction that combines 
              technical excellence with personal development. Our method is built on decades of experience 
              and continuous research in aquatic education.
            </p>
          </div>
          <div className="relative h-64">
            <Image
              src="/gallery/gallery-1.jpg"
              alt="Swimming instruction"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Teaching Approach</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">1. Progressive Learning</h3>
              <p className="text-gray-600">
                We break down swimming skills into manageable steps, allowing students to build confidence 
                and competence gradually. Each level builds upon the previous one, ensuring a solid foundation 
                for advanced techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">2. Individual Attention</h3>
              <p className="text-gray-600">
                Our small class sizes ensure that each student receives personalized attention and feedback. 
                We adapt our teaching style to match each student's learning pace and preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">3. Positive Reinforcement</h3>
              <p className="text-gray-600">
                We focus on celebrating progress and achievements, creating a positive learning environment 
                that encourages students to take on new challenges with confidence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">4. Safety Integration</h3>
              <p className="text-gray-600">
                Water safety is woven into every lesson, teaching students not just how to swim, but how to 
                be safe in and around water. This includes understanding water conditions, emergency procedures, 
                and self-rescue techniques.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Program Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Beginner</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Water comfort</li>
                <li>Basic floating</li>
                <li>Intro to strokes</li>
                <li>Safety basics</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Intermediate</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Stroke refinement</li>
                <li>Breathing techniques</li>
                <li>Endurance building</li>
                <li>Advanced safety</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Advanced</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Competition prep</li>
                <li>Advanced techniques</li>
                <li>Performance training</li>
                <li>Leadership skills</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Experience Our Method</h2>
          <p className="text-gray-600 mb-6">
            Join us and discover how our proven teaching method can help you or your child become a confident, 
            skilled swimmer.
          </p>
          <a
            href="/schedule"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book a Trial Lesson
          </a>
        </div>
      </div>
    </div>
  )
} 