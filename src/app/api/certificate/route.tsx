import { NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { SwimCertificate } from './SwimCertificate';

export async function GET(
  request: Request,
  { searchParams }: { searchParams: URLSearchParams }
) {
  try {
    const swimmerName = searchParams.get('name') || '';
    const instructorName = searchParams.get('instructor') || 'Andria McGhee';
    const date = searchParams.get('date') || new Date().toISOString().split('T')[0];
    const notes = searchParams.get('notes') || '';
    
    // Get all achievements from the URL parameters
    const achievements = searchParams.getAll('achievements');
    console.log('Achievements:', achievements); // Debug log

    const stream = await renderToStream(
      <SwimCertificate 
        swimmerName={swimmerName}
        instructorName={instructorName}
        date={date}
        notes={notes}
        achievements={achievements.length > 0 ? achievements : [
          'You can go under water',
          'You can float on your back',
          'You can be safe in the water',
          'You can swim to the edge of the pool',
          'You can swim freestyle',
          'You can swim breaststroke',
          'You can swim backstroke',
          'You can dive into a pool safely',
        ]}
      />
    );
    
    // Convert stream to buffer
    const chunks: Buffer[] = [];
    for await (const chunk of stream) {
      if (Buffer.isBuffer(chunk)) {
        chunks.push(chunk);
      } else if (typeof chunk === 'string') {
        chunks.push(Buffer.from(chunk));
      }
    }
    const buffer = Buffer.concat(chunks);

    // Return PDF with appropriate headers
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="swim-certificate.pdf"',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
} 