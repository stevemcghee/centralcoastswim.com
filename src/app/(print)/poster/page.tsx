'use client';

import { useEffect, useState } from 'react';
import Poster from '@/components/Poster';
import PdfButton from '@/components/PdfButton';

export default function PosterPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Poster Preview</h1>
        <div className="flex justify-center">
          <div id="poster-to-print" className="shadow-lg">
            <Poster />
          </div>
        </div>
        <div className="flex justify-center mt-8 no-print">
          {isMounted && <PdfButton target="#poster-to-print" fileName="poster.pdf" />}
        </div>
      </div>
    </div>
  );
}
