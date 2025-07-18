'use client';

import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { useState } from 'react';

interface CertificateGeneratorProps {
  name: string;
  instructor: string;
  date: string;
  notes: string;
  achievements: string[];
}

export default function CertificateGenerator({
  name,
  instructor,
  date,
  notes,
  achievements,
}: CertificateGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    try {
      setIsGenerating(true);
      console.log('Starting PDF generation...');

      // Create a new PDF
      const pdfDoc = await PDFDocument.create();
      console.log('PDF document created');
      
      const pageWidth = 800;
      const pageHeight = 560;
      const page = pdfDoc.addPage([pageWidth, pageHeight]);
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      console.log('Fonts embedded');

      // Load images
      console.log('Loading images...');
      const [bgResponse, starResponse] = await Promise.all([
        fetch('/images/logo-wave.png'),
        fetch('/images/star.png'),
      ]);
      
      if (!bgResponse.ok || !starResponse.ok) {
        throw new Error(`Failed to load images: bg=${bgResponse.status}, star=${starResponse.status}`);
      }
      
      const [bgBytes, starBytes] = await Promise.all([
        bgResponse.arrayBuffer(),
        starResponse.arrayBuffer(),
      ]);
      console.log('Images loaded');

      // Embed images
      const bgImg = await pdfDoc.embedPng(bgBytes);
      const starImg = await pdfDoc.embedPng(starBytes);
      console.log('Images embedded');

      // Draw background image
      const bgDims = bgImg.scale(1);
      const drawHeight = pageHeight;
      const drawWidth = bgDims.width * (drawHeight / bgDims.height);
      const drawX = (pageWidth - drawWidth) / 2;
      const drawY = 0;
      page.drawImage(bgImg, {
        x: drawX,
        y: drawY,
        width: drawWidth,
        height: drawHeight,
        opacity: 0.45,
      });

      // Draw blue border
      page.drawRectangle({
        x: 8,
        y: 8,
        width: pageWidth - 16,
        height: pageHeight - 16,
        borderColor: rgb(0, 0.4, 0.8),
        borderWidth: 2,
        color: undefined,
      });

      // Title
      page.drawText('Swimming Achievement Certificate', {
        x: 90,
        y: pageHeight - 70,
        size: 32,
        font: fontBold,
        color: rgb(0.13, 0.38, 0.93),
      });

      // Swimmer's name
      const nameFontSize = 26;
      const nameTextWidth = fontBold.widthOfTextAtSize(name, nameFontSize);
      const nameX = (pageWidth - nameTextWidth) / 2;
      page.drawText(name, {
        x: nameX,
        y: pageHeight - 120,
        size: nameFontSize,
        font: fontBold,
        color: rgb(0.13, 0.13, 0.13),
      });

      // Subtitle
      page.drawText('Congratulations on your swimming accomplishments!', {
        x: 90,
        y: pageHeight - 155,
        size: 18,
        font,
        color: rgb(0.2, 0.2, 0.2),
      });

      // Achievements in two columns
      const leftX = 110;
      const rightX = pageWidth / 2 + 60;
      const startY = pageHeight - 200;
      const lineHeight = 32;
      const colCount = Math.ceil(achievements.length / 2);
      for (let i = 0; i < achievements.length; i++) {
        const isLeft = i < colCount;
        const x = isLeft ? leftX : rightX;
        const y = startY - (isLeft ? i : i - colCount) * lineHeight;
        
        // Draw star icon and achievement text
        page.drawImage(starImg, {
          x: x,
          y: y - 4,
          width: 22,
          height: 22,
        });
        page.drawText(achievements[i], {
          x: x + 30,
          y: y,
          size: 15,
          font,
          color: rgb(0.15, 0.15, 0.15),
        });
      }

      // Notes box
      if (notes) {
        const notesY = 120;
        page.drawRectangle({
          x: 70,
          y: notesY,
          width: pageWidth - 140,
          height: 60,
          color: rgb(1, 1, 1),
          opacity: 0.7,
          borderColor: rgb(0.7, 0.7, 0.7),
          borderWidth: 1.5,
        });
        const notesFontSize = 18;
        const notesTextWidth = fontBold.widthOfTextAtSize(notes, notesFontSize);
        const notesBoxWidth = pageWidth - 140;
        const notesX = 70 + (notesBoxWidth - notesTextWidth) / 2;
        page.drawText(notes, {
          x: notesX,
          y: notesY + 22,
          size: notesFontSize,
          font: fontBold,
          color: rgb(0.2, 0.2, 0.2),
        });
      }

      // Signature and date
      const sigLineX = pageWidth - 240;
      const sigLineY = 80;
      const sigLineWidth = 180;
      page.drawLine({
        start: { x: sigLineX, y: sigLineY },
        end: { x: sigLineX + sigLineWidth, y: sigLineY },
        thickness: 1.2,
        color: rgb(0.2, 0.2, 0.2),
      });
      const sigFontSize = 11;
      page.drawText(instructor, {
        x: pageWidth - 220,
        y: 60,
        size: sigFontSize,
        font,
        color: rgb(0.15, 0.15, 0.15),
      });
      page.drawText(date, {
        x: pageWidth - 220,
        y: 40,
        size: sigFontSize,
        font,
        color: rgb(0.15, 0.15, 0.15),
      });

      // Footer
      const footerText = 'Central Coast Swim • www.centralcoastswim.com';
      const footerFontSize = 10;
      const footerTextWidth = font.widthOfTextAtSize(footerText, footerFontSize);
      const footerX = (pageWidth - footerTextWidth) / 2;
      page.drawText(footerText, {
        x: footerX,
        y: 20,
        size: footerFontSize,
        font,
        color: rgb(0.3, 0.3, 0.3),
      });

      const pdfBytes = await pdfDoc.save();
      console.log('PDF generated successfully');

      // Create a blob and download
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${name.replace(/\s+/g, '_')}_certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Provide more specific error messages
      if (error instanceof TypeError && error.message.includes('fetch')) {
        alert('Failed to load certificate images. Please check your internet connection and try again.');
      } else if (error instanceof Error && error.message.includes('embedFont')) {
        alert('Failed to load fonts. Please try again.');
      } else if (error instanceof Error && error.message.includes('embedPng')) {
        alert('Failed to load certificate images. Please try again.');
      } else {
        alert('Failed to generate PDF. Please try again.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {isGenerating ? 'Generating...' : 'Download Certificate'}
    </button>
  );
} 