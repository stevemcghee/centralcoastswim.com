'use client';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

type PdfButtonProps = {
  target: string;
  fileName: string;
};

const PdfButton: React.FC<PdfButtonProps> = ({ target, fileName }) => {
  const handleClick = async () => {
    const element = document.querySelector(target);
    if (element) {
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: 'a3'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(fileName);
    }
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded no-print">
      Download PDF
    </button>
  );
};

export default PdfButton;
