import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    // Get the admin password from environment variables (server-side only)
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminPassword) {
      console.error('ADMIN_PASSWORD environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error' }, 
        { status: 500 }
      );
    }
    
    if (password === adminPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Invalid password' }, 
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}