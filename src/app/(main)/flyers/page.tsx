import Link from 'next/link';

export default function FlyersPage() {
  const flyers = [
    {
      name: 'Standard Flyer',
      description: 'Our main flyer with sunset background',
      path: '/flyer'
    },
    {
      name: 'White Flyer',
      description: 'Clean white background version',
      path: '/flyer-white'
    },
    {
      name: 'Wave Flyer',
      description: 'Version with wave background',
      path: '/flyer-wave'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Printable Flyers</h1>
      <p className="mb-8">
        Download and print our flyers to help spread the word about Central Coast Swim.
        Each flyer includes our contact information and QR code for easy access to our website.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flyers.map((flyer) => (
          <div key={flyer.path} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{flyer.name}</h2>
            <p className="text-gray-600 mb-4">{flyer.description}</p>
            <Link
              href={flyer.path}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              target="_blank"
            >
              View Flyer
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 