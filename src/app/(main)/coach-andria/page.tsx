import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CoachAndria() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Coach Andria</h1>

      <div className="prose prose-lg max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-128">
            <Image
              src="/gallery/andria-hunewill-sunset.jpg"
              alt="Coach Andria McGhee"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">A Lifelong Passion for Swimming</h2>
            <p className="text-gray-600 mb-4">
              Coach Andria McGhee has been sharing her love of swimming and water safety with students 
              since 1998. With over 25 years of coaching experience, she has helped hundreds of swimmers 
              of all ages develop confidence, skills, and a lifelong appreciation for the water.
            </p>
            <p className="text-gray-600 mb-4">
              Andria's approach combines technical expertise with patience and encouragement, creating 
              a supportive environment where every student can thrive at their own pace.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Swimming Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Redlands Swimming</h3>
              <p className="text-gray-600">
                Andria began her competitive swimming journey with Redlands, where she developed 
                strong fundamentals and a deep understanding of stroke mechanics.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Riverside Swimming</h3>
              <p className="text-gray-600">
                Continuing her swimming career with Riverside, Andria refined her technique and 
                gained valuable experience in competitive swimming environments.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">UCSB Triathlon Team</h3>
              <p className="text-gray-600">
                As a member of the UCSB Triathlon team, Andria combined her swimming expertise 
                with endurance training, gaining a comprehensive understanding of aquatic fitness.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Coaching Philosophy</h2>
            <p className="text-gray-600 mb-4">
              Andria believes that swimming should be accessible to everyone, regardless of age or 
              experience level. Her coaching philosophy centers on:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Building water confidence through gentle, patient instruction</li>
              <li>Teaching proper technique to prevent injury and improve efficiency</li>
              <li>Creating a fun, supportive learning environment</li>
              <li>Emphasizing water safety as the foundation of all swimming skills</li>
              <li>Adapting lessons to each student's unique needs and learning style</li>
            </ul>
          </div>
          <div className="relative h-96">
            <Image
              src="/gallery/andria-pool.jpg"
              alt="Andria teaching in the pool"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Coach Andria?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Experience & Expertise</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>25+ years of coaching experience since 1998</li>
                <li>Competitive swimming background</li>
                <li>Triathlon team experience</li>
                <li>Specialized training in water safety</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Personalized Approach</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>One-on-one attention</li>
                <li>Customized lesson plans</li>
                <li>Patient, encouraging teaching style</li>
                <li>Focus on individual progress</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Swimming Journey?</h2>
          <p className="text-gray-600 mb-6">
            Join the hundreds of students who have learned to swim with Coach Andria. 
            Whether you're a complete beginner or looking to improve your technique, 
            Andria's experience and passion will help you achieve your swimming goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book a Lesson
            </Link>
            <Link
              href="/method"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn About Our Method
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 