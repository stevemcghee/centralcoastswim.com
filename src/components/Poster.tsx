
'use client';

import Image from 'next/image';
import React from 'react';

const Poster = () => {
  return (
    <div className="relative w-[16.5in] h-[11.7in] bg-white border border-black">
      <h1 className="absolute bottom-16 left-0 right-0 text-center z-10 text-2xl font-bold text-black bg-transparent">Swim lessons for all ages</h1>
      <div className="absolute inset-0 flex items-center justify-center transform -translate-y-[168px]">
        <Image
          src="/images/logo-white.jpg"
          alt="Central Coast Swim Logo"
          width={1100}
          height={600}
          className="transform scale-[1.3]"
        />
      </div>
      <div className="absolute bottom-4 left-4">
        <Image
          src="/gallery/andria-hunewill-sunset-square.jpg"
          alt="Andria Hunewill"
          width={300}
          height={300}
          className="border border-gray-400"
        />
      </div>
      <div className="absolute bottom-4 right-4 flex flex-col items-center">
        <Image
          src="/images/qrcode_centralcoastswim.com.png"
          alt="QR Code"
          width={200}
          height={200}
        />
        <p className="text-xl">centralcoastswim.com</p>
        <div className="flex items-center">
          <Image
            src="/images/instagram.svg"
            alt="Instagram Logo"
            width={30}
            height={30}
          />
          <p className="text-xl ml-2 text-orange-800">@centralcoastswim</p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
