'use client';

import React from 'react';

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded no-print"
    >
      Print
    </button>
  );
};

export default PrintButton;