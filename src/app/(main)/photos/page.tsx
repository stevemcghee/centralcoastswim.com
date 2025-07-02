import React from 'react'
import Image from 'next/image'

const photos = [
  {
    src: '/gallery/pool-home.jpg',
    alt: 'Central Coast Swim pool',
    caption: 'Our beautiful home pool where all the magic happens',
  },
  {
    src: '/gallery/pool-home-sunset.jpg',
    alt: 'Central Coast Swim pool at sunset',
    caption: 'Golden hour at Central Coast Swim - a peaceful end to training',
  },
  {
    src: '/gallery/andria-hunewill-sunset.jpg',
    alt: 'Andria Hunewill at sunset',
    caption: 'Coach Andria enjoying a beautiful sunset after a day of coaching',
  },
  {
    src: '/gallery/andria-dean-polo.jpg',
    alt: 'Andria Dean in polo',
    caption: 'Coach Andria in her coaching polo, ready for another great session',
  },
  {
    src: '/gallery/andria-jack-madeline.jpg',
    alt: 'Andria with Jack and Madeline',
    caption: 'Coach Andria with swimmers Jack and Madeline celebrating their progress',
  },
  {
    src: '/gallery/coach-andria.jpg',
    alt: 'Coach Andria',
    caption: 'Coach Andria demonstrating proper technique and form',
  },
  {
    src: '/gallery/andria-tri.jpg',
    alt: 'Andria in triathlon',
    caption: 'Coach Andria competing in triathlon - leading by example',
  },
  {
    src: '/gallery/andria-pool.jpg',
    alt: 'Andria at the pool',
    caption: 'Coach Andria poolside, always ready to help swimmers improve',
  },
  {
    src: '/gallery/pool-night.jpg',
    alt: 'Central Coast Swim pool at night',
    caption: 'Evening training sessions under the lights',
  },
  {
    src: '/gallery/pool-friends.jpg',
    alt: 'Friends at the pool',
    caption: 'Building friendships and memories through swimming',
  },
]

export default function Photos() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Photo Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="aspect-square relative">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Follow Us on Instagram</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
            <iframe
              src="https://www.instagram.com/central_coast_swim/embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Central Coast Swim Instagram Feed"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 