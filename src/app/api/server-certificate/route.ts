import { NextRequest } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

// Remove dynamic configuration since we're using static exports
// export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  // For static exports, we'll return a 404 since API routes aren't supported
  return new Response('API routes are not supported in static exports. Please use client-side PDF generation.', {
    status: 404,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 