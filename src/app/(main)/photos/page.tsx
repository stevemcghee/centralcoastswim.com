import React from 'react'
import Image from 'next/image'

const photos = [
  {
    src: '/gallery/pool-home.jpg',
    alt: 'Central Coast Swim pool',
  },
  {
    src: '/gallery/pool-home-sunset.jpg',
    alt: 'Central Coast Swim pool at sunset',
  },
  {
    src: '/gallery/andria-hunewill-sunset.jpg',
    alt: 'Andria Hunewill at sunset',
  },
  {
    src: '/gallery/andria-dean-polo.jpg',
    alt: 'Andria Dean in polo',
  },
  {
    src: '/gallery/andria-jack-madeline.jpg',
    alt: 'Andria with Jack and Madeline',
  },
  {
    src: '/gallery/coach-andria.jpg',
    alt: 'Coach Andria',
  },
  {
    src: '/gallery/andria-tri.jpg',
    alt: 'Andria in triathlon',
  },
  {
    src: '/gallery/andria-pool.jpg',
    alt: 'Andria at the pool',
  },
]

export default function Photos() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Photo Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="aspect-square relative rounded-lg overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
} 