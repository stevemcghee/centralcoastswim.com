'use client';

import { useEffect } from 'react';

export default function PrintButton() {
  useEffect(() => {
    // Add print-specific styles when the component mounts
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        body {
          margin: 0;
          padding: 0;
        }
        .no-print {
          display: none;
        }
        @page {
          size: letter;
          margin: 0.5in;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <button
      onClick={() => window.print()}
      className="no-print fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Print Flyer
    </button>
  );
} 