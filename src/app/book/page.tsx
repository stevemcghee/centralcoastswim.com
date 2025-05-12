import React from 'react'
import dynamic from 'next/dynamic'

const GoogleCalendarButton = dynamic(() => import('@/components/GoogleCalendarButton'), {
  ssr: false
})

export default function Book() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Book a Lesson</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Select your preferred time slot below to book your swimming lesson.
          </p>
          
          <GoogleCalendarButton />
        </div>
      </div>
    </div>
  )
} 