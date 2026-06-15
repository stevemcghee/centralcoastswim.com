import React from 'react'

export default function Book() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Book a Lesson</h1>

      <div className="prose prose-lg max-w-none">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Andria</h2>
            <p className="text-gray-600 mb-6">
              To book a swim lesson or inquire about availability, please contact Andria directly.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">How to Book</h3>
              <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                <li>Text Andria at <a href="tel:+19253302184" className="text-blue-600 hover:text-blue-800 font-semibold">(925) 330-2184</a></li>
                <li>Include the following information in your message:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Child's name</li>
                    <li>Child's age</li>
                    <li>Child's swimming experience</li>
                    <li>Preferred days and times</li>
                  </ul>
                </li>
                <li>Andria will get back to you to confirm your booking and provide any additional details.</li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
            <div className="w-full h-[600px]">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=89440ef93c030fce64e18c624102a9c021903642d132489881b7c42662ed97d2%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                title="Swim Schedule"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
