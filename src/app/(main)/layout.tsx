import Link from 'next/link';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
              Central Coast Swim
            </Link>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
              <Link href="/" className="hover:text-blue-200 whitespace-nowrap py-2">
                Home
              </Link>
              <Link href="/mission" className="hover:text-blue-200 whitespace-nowrap py-2">
                Our Mission
              </Link>
              <Link href="/method" className="hover:text-blue-200 whitespace-nowrap py-2">
                Our Method
              </Link>
              <Link href="/book" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                Book a Lesson
              </Link>
              <Link href="/about" className="hover:text-blue-200 whitespace-nowrap py-2">
                About Us
              </Link>
              <Link href="/photos" className="hover:text-blue-200 whitespace-nowrap py-2">
                Photos
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>
                <a href="mailto:info@centralcoastswim.com" className="hover:text-blue-200">
                  info@centralcoastswim.com
                </a>
              </p>
              <p>Call Andria at: (925) 330-2184</p>
              <p>
                <Link href="/admin" className="hover:text-blue-200">
                  Admin Tools
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p>San Luis Obispo, CA</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="space-x-4">
                <a href="https://instagram.com/central_coast_swim" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p>© 2024 Central Coast Swim. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 