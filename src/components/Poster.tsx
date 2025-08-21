
'use client';

import Image from 'next/image';
import React from 'react';

const Poster = () => {
  return (
    <div className="relative w-[16.5in] h-[11.7in] bg-white border border-black">
      <div className="absolute bottom-8 left-[316px] right-[316px] z-10 flex flex-row justify-around items-center">
        <p className="text-xl text-[#179BCE]">centralcoastswim.com</p>
        <h1 className="text-xl font-bold text-[#0C5C94] bg-transparent">Swim lessons for all ages</h1>
        <div className="flex items-center">
          <Image
            src="/images/instagram.svg"
            alt="Instagram Logo"
            width={30}
            height={30}
          />
          <p className="text-xl ml-2 text-[#F38415]">@centralcoastswim</p>
        </div>
      </div>
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
          width={300}
          height={300}
        />
        
      </div>
    </div>
  );
};

export default Poster;
