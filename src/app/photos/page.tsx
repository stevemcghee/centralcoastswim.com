import React from 'react'

export default function Photos() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Photo Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div 
            key={index} 
            className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-gray-500 text-lg font-medium">Coming Soon</p>
              <p className="text-gray-400 text-sm">Photo {index}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 