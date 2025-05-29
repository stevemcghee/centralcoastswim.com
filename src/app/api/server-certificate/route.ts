import { NextRequest } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const name = searchParams.get('name') || 'Student Name';
  const instructor = searchParams.get('instructor') || 'Instructor Name';
  const date = searchParams.get('date') || new Date().toISOString().split('T')[0];
  const notes = searchParams.get('notes') || '';
  const achievements = searchParams.getAll('achievements');

  // Load images
  const bgPath = path.join(process.cwd(), 'public/images/logo-wave.png');
  const starPath = path.join(process.cwd(), 'public/images/star.png');
  const bgBytes = fs.readFileSync(bgPath);
  const starBytes = fs.readFileSync(starPath);

  // Create a new PDF
  const pdfDoc = await PDFDocument.create();
  const pageWidth = 800;
  const pageHeight = 560;
  const page = pdfDoc.addPage([pageWidth, pageHeight]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Embed images
  const bgImg = await pdfDoc.embedPng(bgBytes);
  const starImg = await pdfDoc.embedPng(starBytes);

  // Draw background image (faded, fit height, preserve aspect ratio, center horizontally)
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

  // Draw blue border (pdf-lib does not support rounded corners directly)
  page.drawRectangle({
    x: 8,
    y: 8,
    width: pageWidth - 16,
    height: pageHeight - 16,
    borderColor: rgb(0, 0.4, 0.8),
    borderWidth: 2,
    color: undefined,
    // Rounded corners not supported in pdf-lib as of now
  });

  // Title
  page.drawText('Swimming Achievement Certificate', {
    x: 90,
    y: pageHeight - 70,
    size: 32,
    font: fontBold,
    color: rgb(0.13, 0.38, 0.93),
  });

  // Swimmer's name (centered)
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

  // Achievements in two columns with stars (wider apart)
  const leftX = 110;
  const rightX = pageWidth / 2 + 60;
  const startY = pageHeight - 200;
  const lineHeight = 32;
  const colCount = Math.ceil(achievements.length / 2);
  for (let i = 0; i < achievements.length; i++) {
    const isLeft = i < colCount;
    const x = isLeft ? leftX : rightX;
    const y = startY - (isLeft ? i : i - colCount) * lineHeight;
    // Draw star
    page.drawImage(starImg, {
      x: x,
      y: y - 4,
      width: 22,
      height: 22,
    });
    // Draw achievement text
    page.drawText(achievements[i], {
      x: x + 30,
      y: y,
      size: 15,
      font,
      color: rgb(0.15, 0.15, 0.15),
    });
  }

  // Notes box (rectangle, not rounded)
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
      // Rounded corners not supported in pdf-lib as of now
    });
    // Center the notes text
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
      // maxWidth: pageWidth - 180, // not needed for centered text
    });
  }

  // Instructor and date (bottom right)
  // Add signature line above instructor name
  const sigLineX = pageWidth - 240;
  const sigLineY = 80;
  const sigLineWidth = 180;
  page.drawLine({
    start: { x: sigLineX, y: sigLineY },
    end: { x: sigLineX + sigLineWidth, y: sigLineY },
    thickness: 1.2,
    color: rgb(0.2, 0.2, 0.2),
  });
  // Smaller font for signature name and date
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

  // Footer (smaller font, centered)
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

  return new Response(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${name.replace(/\s+/g, '_')}_certificate.pdf"`,
    },
  });
} 