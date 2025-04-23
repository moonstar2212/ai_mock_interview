// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthenticated } from '@/lib/actions/auth.action';

export async function middleware(request: NextRequest) {
  const isUserAuthenticated = await isAuthenticated();
  const pathname = request.nextUrl.pathname;

  if (!isUserAuthenticated && !pathname.startsWith('/sign-in')) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

// Config: Jalankan middleware hanya untuk route tertentu
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sign-in).*)'],
};