import React from 'react'

export default function Directions() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Location & Directions</h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <p className="mb-4">
            <strong>Address:</strong> 6450 Squire Knoll Road, San Luis Obispo
          </p>

          <h2 className="text-2xl font-semibold mb-4">Driving Directions</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Take the 101 Freeway and exit at San Luis Bay Drive near Avila</li>
            <li>If traveling south, turn left; if traveling north, turn right (heading east, away from the ocean)</li>
            <li>The road will curve 90 degrees to the right onto Monte Rd</li>
            <li>Then curve left 90 degrees onto Squire Canyon Road</li>
            <li>Travel just under a mile on Squire Canyon Road until you see a green hanging sign for Squire Knoll Road</li>
            <li>Turn left onto Squire Knoll Road</li>
            <li>Continue straight up the bumpy road, through the olive trees</li>
            <li>Park in the brick paved parking area</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            Note: There are many roads named Squire in this neighborhood, so please follow these directions carefully.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Interactive Map</h2>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=35.1960837,-120.699532&destination=35.1965619,-120.6879084&mode=driving`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions to Central Coast Swim"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 