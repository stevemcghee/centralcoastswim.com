import React from 'react'

export default function Book() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Book a Lesson</h1>

      <div className="prose prose-lg max-w-none">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Book</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Once you see a time slot in the schedule below that works for your swimmer, please text Andria at{' '}
                <a href="tel:+19253302184" className="text-blue-600 hover:text-blue-800 font-semibold">
                  (925) 330-2184
                </a>{' '}
                with:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>your name,</li>
                <li>your child&apos;s name and age,</li>
                <li>approximate swimming ability and relationship with the water,</li>
                <li>week and the time you would like</li>
              </ul>
              <p className="text-gray-700 mb-4">
                I&apos;ll get back to you to confirm (it may take a couple of days). The classes get booked with first
                come first served so we may need to use your second option if necessary.
              </p>
              <p className="text-gray-700 font-medium">
                Thank you for your interest in your child&apos;s safety and fun! I look forward to meeting you and your
                family.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Schedule of Classes</h2>
            <p className="text-gray-700 mb-4">
              Below is the schedule of classes available. If a time and date work for you, consider the approximate
              level of your swimmer and determine if that time aligns with your child&apos;s comfort level. If your
              child is under 3, you and your child will be in the parent-child class.
            </p>
            <p className="text-gray-700 mb-6">
              Once the classes start booking, the level will be determined and noted in the available time slots. If the
              class says all levels, then you will be the determining factor.
            </p>
            <div className="w-full h-[600px]">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=89440ef93c030fce64e18c624102a9c021903642d132489881b7c42662ed97d2%40group.calendar.google.com&ctz=America%2FLos_Angeles&mode=AGENDA"
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

