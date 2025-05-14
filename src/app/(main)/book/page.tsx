import React from 'react'

export default function Book() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Book a Lesson</h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Available Sessions</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <ul className="list-none space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="font-semibold mr-2">Session 1:</span>
                  May 19th - May 29th, 2025
                </li>
                <li className="flex items-center">
                  <span className="font-semibold mr-2">Session 2:</span>
                  June 2nd - June 12th, 2025
                </li>
              </ul>
              <p className="text-gray-700 mt-3 italic">
                All Sessions are: Monday - Thursday, same time every day.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">How to Book</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Review the calendar below to find an available session and time</li>
              <li>Email or text Andria at <a href="mailto:andria@centralcoastswim.com" className="text-blue-600 hover:text-blue-800">andria@centralcoastswim.com</a> or <a href="tel:+19253302184" className="text-blue-600 hover:text-blue-800">(925) 330-2184</a></li>
              <li>Include your preferred session and time in your message</li>
              <li>Andria will confirm your booking and provide any additional details</li>
            </ol>
          </div>

          <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=89440ef93c030fce64e18c624102a9c021903642d132489881b7c42662ed97d2%40group.calendar.google.com&ctz=America%2FLos_Angeles&mode=WEEK&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Swim Lesson Schedule"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 