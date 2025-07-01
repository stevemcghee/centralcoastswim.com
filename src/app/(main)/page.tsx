import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-blue-900/50 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/gallery/pool-home-sunset.jpg"
            alt="Swimming pool at sunset"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Welcome to Central Coast Swim
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                From first-time swimmers to technique refinement, we offer personalized swimming instruction for all ages and skill levels.
              </p>
              <Link
                href="/book"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Book a Lesson
              </Link>
            </div>
            <div className="flex justify-end">
              <div className="relative aspect-square w-[200px] md:w-[250px] rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/gallery/andria-hunewill-sunset.jpg"
                  alt="Andria Hunewill, swimming instructor"
                  fill
                  sizes="(max-width: 768px) 200px, 250px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Swimming Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Learn to Swim</h3>
            <p className="text-gray-600 mb-4">
              Perfect for kids of all ages, our group lessons focus on water safety and having fun in the pool. 
              In a supportive group environment, children learn essential swimming skills while building confidence 
              and making new friends.
              <br/> 
              Individual lessons for all ages are also available in the privacy of our backyard. 
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Age-appropriate group sizes</li>
              <li>• Focus on water safety</li>
              <li>• Fun, engaging activities</li>
              <li>• Builds social skills</li>
            </ul>
            <Link
              href="/book"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Book Group Lessons
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Get Better at Swimming</h3>
            <p className="text-gray-600 mb-4">
              Individual lessons for all ages featuring our innovative Slipstream™ portable swimming machine. This 
              revolutionary technology transforms our pool into an endless swim lane, creating a powerful yet smooth 
              current that allows our instructors to observe and perfect your stroke technique in real-time. Perfect 
              for those who want to refine their technique or learn proper swimming fundamentals in a low-stress environment.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• One-on-one coaching</li>
              <li>• Slipstream™ portable swimming machine</li>
              <li>• Real-time stroke analysis</li>
              <li>• All ages welcome</li>
            </ul>
            <Link
              href="/book"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Book Individual Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Swimming Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're learning to swim or perfecting your technique, our expert instructors are here to help you achieve your goals.
          </p>
          <Link
            href="/book"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Book Your First Lesson
          </Link>
        </div>
      </section>
    </div>
  )
} 