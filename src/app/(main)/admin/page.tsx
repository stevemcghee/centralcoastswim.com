'use client';

import { useState } from 'react';
import Link from 'next/link';

// !!! WARNING: INSECURE METHOD !!!
// This method of password protection is not secure. The password is stored in plain text
// in the client-side code, which can be easily accessed by anyone with access to the browser's
// developer tools. This should only be used for non-sensitive content on a low-risk site.
//
// Replace 'your_password_here' with your desired password.
const ADMIN_PASSWORD = 'your_password_here';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Admin Access</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Tools</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Flyers</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/flyer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                Standard Flyer
              </Link>
            </li>
            <li>
              <Link href="/flyer-white" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                White Flyer
              </Link>
            </li>
            <li>
              <Link href="/flyer-wave" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                Wave Flyer
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Certificate</h2>
          <ul className="space-y-3">
            <li>
              <Link 
                href="/admin/certificate" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                Certificate Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}