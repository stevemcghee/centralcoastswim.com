import React from 'react'

export default function Schedule() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Schedule a Lesson</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Available Time Slots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
            <div key={day} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">{day}</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>9:00 AM - 10:00 AM</span>
                  <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    Book
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <span>10:00 AM - 11:00 AM</span>
                  <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    Book
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <span>2:00 PM - 3:00 PM</span>
                  <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    Book
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <span>3:00 PM - 4:00 PM</span>
                  <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Us to Book</h2>
        <p className="text-gray-600 mb-6">
          Can't find a suitable time slot? Contact us directly and we'll help you find the perfect time for your lessons.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Tell us about your swimming goals and preferred schedule"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
} 