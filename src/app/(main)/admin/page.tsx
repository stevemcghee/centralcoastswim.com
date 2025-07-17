'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });
      
      if (response.ok) {
        sessionStorage.setItem('adminAuth', 'true');
        setIsAuthenticated(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Authentication failed. Please try again.');
        setPassword(''); // Clear the password field
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please try again.');
      setPassword(''); // Clear the password field
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
            onClick={() => {
              sessionStorage.removeItem('adminAuth');
              setIsAuthenticated(false);
            }}
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