import { getToken } from 'next-auth/jwt'

import { NextResponse, NextRequest } from 'next/server'
 

export async function middleware(request: NextRequest) {
//  const authToken = request.cookies.get("next-auth.session-token")?.value;
  const token=await getToken({req:request} );
  if(token)
    return  NextResponse.next()

  return NextResponse.redirect(new URL('/login', request.url));
}
 
export const config = {
  matcher: ['/cart:path*' , '/checkOut:path*' ,'/allorders' , '/wishlist'],
}