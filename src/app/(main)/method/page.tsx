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
              src="/gallery/andria-pool.jpg"
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
              <h3 className="text-xl font-semibold mb-3 text-blue-600">3. Group Learning Benefits</h3>
              <p className="text-gray-600">
                We teach children in groups because they learn better from each other and take more chances 
                when their peers are present. During breaks on the swim platform, they have time to practice 
                skills learned one-on-one. This approach helps build trust and comfort with classmates and 
                teachers, making them more willing to take positive risks like putting their head underwater 
                or floating.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">4. Progressive Development</h3>
              <p className="text-gray-600">
                Our curriculum is designed to build skills progressively, ensuring students develop a 
                strong foundation before advancing to more complex techniques. We maintain consistency 
                and predictability through our 8-day program structure.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">8-Day Program</h3>
              <p className="text-gray-600 mb-4">
                Our comprehensive 8-day program runs Monday through Thursday for 2 weeks, providing 
                consistent and predictable learning opportunities.
              </p>
              <h4 className="font-semibold mb-2">Program Details:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>$175 per student</li>
                <li>One teacher to 3 kids</li>
                <li>Adult and child classes limited to 3 students</li>
                <li>Private lessons available at $525 (one-on-one)</li>
                <li>30-minute classes</li>
                <li>Morning and afternoon sessions available</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Single Lessons</h3>
              <p className="text-gray-600 mb-4">
                Available for children needing a confidence boost or extra practice with specific skills, 
                or for adults who prefer one-day lessons.
              </p>
              <h4 className="font-semibold mb-2">Lesson Options:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>$25 - 1 teacher to 3 kids</li>
                <li>$75 - 1 teacher to 1 student</li>
                <li>Perfect for skill refinement</li>
                <li>Great for confidence building</li>
                <li>Flexible scheduling</li>
                <li>Personalized attention</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-semibold mb-4">Class Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Morning Sessions</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>10:00 AM</li>
                <li>10:45 AM</li>
                <li>11:30 AM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Afternoon Sessions</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>2:30 PM</li>
                <li>3:15 PM</li>
                <li>4:00 PM</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Location & Directions</h2>
          <p className="mb-4">
            <strong>Address:</strong> 6450 Squire Knoll Road, San Luis Obispo
          </p>
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-2">Directions:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Take the 101 Freeway and exit at San Luis Bay Drive near Avila</li>
              <li>If traveling south, turn left; if traveling north, turn right (heading east, away from the ocean)</li>
              <li>The road will curve 90 degrees to the right onto Monte Rd</li>
              <li>Then curve left 90 degrees onto Squire Canyon Road</li>
              <li>Travel just under a mile on Squire Canyon Road until you see a green hanging sign for Squire KNOLL Road</li>
              <li>Turn left onto Squire Knoll Road</li>
              <li>Continue straight up the bumpy road, through the olive trees</li>
              <li>Park in the brick paved parking area</li>
            </ol>
            <p className="mt-4 text-sm text-gray-600">
              Note: There are many roads named Squire in this neighborhood, so please follow these directions carefully.
            </p>
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