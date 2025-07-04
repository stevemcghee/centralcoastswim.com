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
              <ul className="list-none text-gray-700">
                <li className="line-through">
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Session 1:</span>
                  </div>
                  <div className="ml-20">
                    <div>May 19, 20, 21, 22</div>
                    <div>May 26, 27, 28, 29</div>
                  </div>
                </li>
                <li className="line-through mt-2">
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Session 2:</span>
                  </div>
                  <div className="ml-20">
                    <div>June 2, 3, 4, 5</div>
                    <div>June 9, 10, 11, 12</div>
                  </div>
                </li>
                <li className="line-through mt-2">
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Session 3:</span>
                  </div>
                  <div className="ml-20">
                    <div>June 16, 17, 18, 19</div>
                    <div>June 23, 24, 25, 26</div>
                  </div>
                </li>
                <li className="mt-2">
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Session 4:</span>
                  </div>
                  <div className="ml-20">
                    <div>July 7, 8, 9, 10</div>
                    <div>July 14, 15, 16, 17</div>
                  </div>
                </li>
                <li className="mt-2">
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Session 5:</span>
                  </div>
                  <div className="ml-20">
                    <div>July 21, 22, 23, 24</div>
                    <div>July 28, 29, 30, 31</div>
                  </div>
                </li>
              </ul>
              <p className="text-gray-700 mt-3 italic">
                All Sessions are 8 days: Monday - Thursday, at the same time every day, for 2 weeks.
                <br/>
                There are 3 spots available for each session.
                <br/>
                <br/>
                Be sure to click on the event in the calendar below to see the details.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">How to Book</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Review the calendar below to find an available session and time</li>
              <li>Text Andria at <a href="tel:+19253302184" className="text-blue-600 hover:text-blue-800">(925) 330-2184</a></li>
              <li>Include the following information in your message:
                <ul className="list-disc pl-6">
                  <li>Preferred session</li>
                  <li>Preferred time</li>
                  <li>Child's name</li>
                  <li>Child's age</li>
                  <li>Child's swimming experience</li>
                </ul>
              </li>
              <li>Andria will confirm your booking and provide any additional details</li>
            </ol>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Weekly View</h3>
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=89440ef93c030fce64e18c624102a9c021903642d132489881b7c42662ed97d2%40group.calendar.google.com&ctz=America%2FLos_Angeles&mode=WEEK&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Swim Lesson Schedule - Weekly View"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Detailed Schedule</h3>
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=89440ef93c030fce64e18c624102a9c021903642d132489881b7c42662ed97d2%40group.calendar.google.com&ctz=America%2FLos_Angeles&mode=AGENDA&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Swim Lesson Schedule - Detailed View"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 