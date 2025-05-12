import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Central Coast Swim',
  description: 'Swimming lessons and aquatic activities on the Central Coast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Central Coast Swim</Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-200">Home</Link>
              <Link href="/mission" className="hover:text-blue-200">Our Mission</Link>
              <Link href="/method" className="hover:text-blue-200">Our Method</Link>
              <Link href="/book" className="hover:text-blue-200">Book a Lesson</Link>
              <Link href="/about" className="hover:text-blue-200">About Us</Link>
              <Link href="/photos" className="hover:text-blue-200">Photos</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-6 mt-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p>Email: info@centralcoastswim.com</p>
                <p>Call Andria at: (805) 330-2184</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <p>San Luis Obispo, CA</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="space-x-4">
                  <a href="#" className="hover:text-blue-200">Facebook</a>
                  <a href="#" className="hover:text-blue-200">Instagram</a>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-gray-700">
              <p>&copy; 2024 Central Coast Swim. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 