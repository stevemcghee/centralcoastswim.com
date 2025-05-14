'use client';

import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function FlyerWhitePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Add print-specific styles when the page loads
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
    <div style={{ maxWidth: '8.5in', margin: '0 auto', padding: '1rem' }}>
      {isMounted && (
        <button
          onClick={() => window.print()}
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            border: 'none',
            cursor: 'pointer'
          }}
          className="no-print"
        >
          Print Flyer
        </button>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem' }}>
          Central Coast Swim
        </h1>
        <div style={{ width: '100%', height: '5in', position: 'relative', marginBottom: '1rem' }}>
          <Image
            src="/images/logo-white.jpg"
            alt="Central Coast Swim"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 1rem' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Professional Swimming Instruction
            </p>
            <p style={{ fontSize: '1.25rem' }}>
              Private and Group Lessons Available
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '8rem', height: '8rem', position: 'relative', marginBottom: '1rem' }}>
              <Image
                src="/gallery/andria-hunewill-sunset.jpg"
                alt="Andria Hunewill, swimming instructor"
                fill
                style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                priority
              />
            </div>
            <div style={{ width: '8rem', height: '8rem', position: 'relative' }}>
              <Image
                src="/images/qrcode_centralcoastswim.com.png"
                alt="QR Code"
                fill
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Visit us at:</p>
            <p style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#2563eb' }}>
              centralcoastswim.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 