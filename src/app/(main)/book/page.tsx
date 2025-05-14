import React from 'react'

export default function Book() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Book a Lesson</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Select your preferred time slot below to book your swimming lesson.
          </p>
          
          <div className="w-full h-[600px]">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ30_eM7WHSgwJaE27N-nvqe897igBEFDcARk-Npl-A3Og1vPzqxU7JDYx4kFStYlXXap2SBE5Yg?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Booking Calendar"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 