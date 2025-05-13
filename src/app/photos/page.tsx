import React from 'react'
import Image from 'next/image'

const photos = [
  {
    src: '/gallery/gallery-1.jpg',
    alt: 'Swimming lesson in progress',
    category: 'Lessons'
  },
  {
    src: '/gallery/gallery-2.jpg',
    alt: 'Children learning to swim',
    category: 'Lessons'
  },
  {
    src: '/gallery/gallery-3.jpg',
    alt: 'Our swimming facility',
    category: 'Facility'
  },
  {
    src: '/gallery/gallery-4.jpg',
    alt: 'Pool area',
    category: 'Facility'
  },
  {
    src: '/gallery/gallery-5.jpg',
    alt: 'Swimming competition',
    category: 'Events'
  },
  {
    src: '/gallery/gallery-6.jpg',
    alt: 'Swimming meet',
    category: 'Events'
  },
  {
    src: '/gallery/gallery-7.jpg',
    alt: 'Swim team practice',
    category: 'Team'
  },
  {
    src: '/gallery/gallery-8.jpg',
    alt: 'Team building activity',
    category: 'Team'
  }
]

export default function Photos() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Photo Gallery</h1>
      
      <div className="mb-8">
        <div className="flex space-x-4 mb-6">
          {['All', 'Lessons', 'Facility', 'Events', 'Team'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.src} className="group relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{photo.category}</p>
                <p className="text-sm">{photo.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Share Your Moments</h2>
        <p className="text-gray-600 mb-6">
          Have photos from your swimming journey with us? We'd love to see them! 
          Share your favorite moments and they might be featured in our gallery.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Share Your Photos
        </button>
      </div>
    </div>
  )
} 